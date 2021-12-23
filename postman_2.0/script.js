import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import prettyBytes from 'pretty-bytes';
import setupEditors from './setupEditor';

const form = document.querySelector('[data-form]');

const queryParamsContainer = document.querySelector('[data-query-params]');
const requestHeadersContainer = document.querySelector('[data-request-headers]');
const keyValueTemplate = document.querySelector('[data-key-value-template]');
const responseHeadersContainer = document.querySelector('[data-response-headers]');

const addQueryparamBtn = document.querySelector('[data-add-query-param-btn]');
const addRequestHeaderBtn = document.querySelector('[data-add-request-header-btn]');

addQueryparamBtn.addEventListener('click', () => queryParamsContainer.append(createKeyValuePair()) );
addRequestHeaderBtn.addEventListener('click', () => requestHeadersContainer.append(createKeyValuePair()) );

queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.append(createKeyValuePair());

axios.interceptors.request.use(req => {
    req.customData = req.customData || {};
    req.customData.startTime = new Date().getTime();
    return req;
});

function updateEndTime(res) {
    res.customData = res.customData || {};
    res.customData.time = new Date().getTime() - res.config.customData.startTime;
    return res;
}

axios.interceptors.response.use(updateEndTime, e => {
    return Promise.reject(updateEndTime(e.response))
});

const { requestEditor, updateResponseEditor } = setupEditors();

form.addEventListener('submit', e => {
    e.preventDefault();

    let data;
    try {
        data = JSON.parse(requestEditor.state.doc.toString() || null);
    } catch (e) {
        alert("JSON data is malformed");
        return;
    }

    axios({
        url: document.querySelector('[data-url]').value,
        method: document.querySelector('[data-method]').value,
        params: keyValuePairsToObjects(queryParamsContainer),
        headers: keyValuePairsToObjects(requestHeadersContainer), data
    })
    .catch(e => e)
    .then(res => {
        document.querySelector('[data-response-section]').classList.remove('d-none');
        updateResponseDetails(res);
        updateResponseEditor(res.data);
        updateResponseHeaders(res.headers);
    });
});

function updateResponseHeaders(headers) {
    responseHeadersContainer.innerHTML = "";

    Object.entries(headers).forEach(([key, val]) => {
        const keyEl = document.createElement('div');
        keyEl.textContent = key;
        responseHeadersContainer.append(keyEl);

        const valEl = document.createElement('div');
        valEl.textContent = val;
        responseHeadersContainer.append(valEl);
    });
}

function updateResponseDetails(res) {
    document.querySelector('[data-status]').textContent = res.status;
    document.querySelector('[data-time]').textContent = res.customData.time;
    document.querySelector('[data-size]').textContent = prettyBytes(JSON.stringify(res.data).length + JSON.stringify(res.headers).length);
}

function createKeyValuePair() {
    const el = keyValueTemplate.content.cloneNode(true);

    el.querySelector('[data-remove-btn]').addEventListener('click', e => {
        e.target.closest('[data-key-value-pair]').remove();
    });

    return el;
}

function keyValuePairsToObjects(container) {
    const pairs = container.querySelectorAll('[data-key-value-pair]');
    return [...pairs].reduce((data, pair) => {
        const key = pair.querySelector('[data-key]').value;
        const value = pair.querySelector('[data-value]').value;
        
        if (key == '') return data;
        return { ...data, [key]: value };
    }, {});
}