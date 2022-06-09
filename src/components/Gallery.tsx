import characters from '../characters.json';
import GalleryItem from './GalleryItem';
import './Gallery.css';
import {useState} from "react";

export default function Gallery() {
    //const components = characters.map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    const [name, setName] = useState("");

    const components = characters
        .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
        .map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    return (
        <div className="gallery">
            <div className="search">
                Search for Name: <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
            </div>
            <div className="gallery">
                {components}
            </div>
        </div>
    )
}