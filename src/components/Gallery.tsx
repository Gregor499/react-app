import GalleryItem from './GalleryItem';
import './Gallery.css';
import {useEffect, useState} from "react";
import {Character, PageData} from "../model";
import {queries} from "@testing-library/react";

export default function Gallery() {
    //const components = characters.map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    const [name, setName] = useState("");

    const [checkedAlive, setCheckedAlive] = useState(false);
    const [checkedDead, setCheckedDead] = useState(false);
    const [checkedUnknown, setCheckedUnknown] = useState(false);

    const [characters, setCharacters] = useState<Array<Character>>([])

    useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then((page: PageData) => setCharacters(page.results));
}, [])

    const getComponents =() => {
        if (checkedAlive) {
            return characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
                .filter(c => c.status.toLowerCase() === "alive")
                .map(c => <GalleryItem
                    character={{name: c.name, image: c.image, status: c.status, species: c.species}}/>)

        } else if (checkedDead) {
            return characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
                .filter(c => c.status.toLowerCase() === "dead")
                .map(c => <GalleryItem
                    character={{name: c.name, image: c.image, status: c.status, species: c.species}}/>)
        } else if (checkedUnknown) {
            return characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
                .filter(c => c.status.toLowerCase() === "unknown")
                .map(c => <GalleryItem
                    character={{name: c.name, image: c.image, status: c.status, species: c.species}}/>)

        } else {
            return characters
                .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
                .map(c => <GalleryItem
                    character={{name: c.name, image: c.image, status: c.status, species: c.species}}/>)
        }
    }


    return (
        <div className="gallery">
            <div className="search">
                Search for Name: <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
            </div>
            <div className="checkbox">
                Alive: <input type="checkbox" onClick={ev => setCheckedAlive(!checkedAlive)}/>
                Dead: <input type="checkbox" onClick={ev => setCheckedDead(!checkedDead)}/>
                Unknown: <input type="checkbox" onClick={ev => setCheckedUnknown(!checkedUnknown)}/>

            </div>
            <div className="gallery">
                {getComponents()}
            </div>
        </div>
    )
}