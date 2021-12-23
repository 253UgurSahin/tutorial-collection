import { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";

function App() {
    const [src, setSrc] = useState(null);
    const [alt, setAlt] = useState(null);

    return (
        <div className="relative">
            <Title />
            <div className="container mx-auto px-2">
                <UploadForm />
                <ImageGrid setSrc={setSrc} setAlt={setAlt} />
            </div>
            { src && <Modal src={src} alt={alt} setSrc={setSrc} /> }
        </div>
    );
}

export default App;
