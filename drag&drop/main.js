const draggable_list = document.getElementById('draggable-list');
const check_order = document.getElementById('check');

const richestPeople = [
    'Bill Gates',
    'Jeff Bezos',
    'Warren Buffet',
    'Bernard Arnault',
    'Carlos slim helu',
    'Amancio Ortego',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Micheal Bloomberg',
    'Larry Page',
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
    [...richestPeople]
    .map(a => ({value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, i) => {
        const listItem = document.createElement('li');
            listItem.classList = 'flex flex-wrap flex-row items-center';
            listItem.setAttribute('data-index', i);
            listItem.innerHTML = `
                <span class="w-12 h-12 flex justify-center items-center bg-blue-200 rounded font-semibold text-lg">${i + 1}</span>
                <div class="p-2 flex flex-1 items-center draggable" draggable="true">
                    <div class="draggable px-2 flex flex-1 justify-center items-center cursor-pointer">
                        <p class="text-xl font-bold">${person}</p>
                    </div>
                    <i class="fas fa-grip-lines cursor-pointer"></i>
                </div>
            `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });

    addEventListeners();
}


function dragStart() {
    // console.log('dragstart')
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}

function dragOver(e) {
    // console.log('dragOver')
    e.preventDefault();
}

function dragDrop() {
    // console.log('dragDrop')
    const dragEndindex = this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndindex);

    this.classList.remove('bg-gray-200');
}

function dragEnter() {
    // console.log('dragEnter')
    this.classList.add('bg-gray-200');
}

function dragLeave() {
    // console.log('dragLeave')
    this.classList.remove('bg-gray-200');
}

function swapItems(fromI, toI) {
    const itemOne = listItems[fromI].querySelector('.draggable');
    const itemTwo = listItems[toI].querySelector('.draggable');

    listItems[fromI].appendChild(itemTwo);
    listItems[toI].appendChild(itemOne);
}


function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}

function checkOrder() {
    listItems.forEach((item, i) => {
        const personName = item.querySelector('.draggable').innerText.trim();

        if (personName !== richestPeople[i]) {
            item.classList.add('bg-red-200');
        } else {
            item.classList.remove('bg-red-200');
            item.classList.add('bg-green-200');
        }
    });
}

check_order.addEventListener('click', checkOrder);