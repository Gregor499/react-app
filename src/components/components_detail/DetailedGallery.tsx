import DetailedGalleryItem from './DetailedGalleryItem';
import {useEffect, useState} from "react";
import {queries} from "@testing-library/react";
import axios from "axios";
import {Character, PageData} from "../../model";
import {useParams} from "react-router-dom";

export default function DetailedGallery() {
    //const components = characters.map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    const [name, setName] = useState("");

    const [characters, setCharacters] = useState<Array<Character>>([])

    const [errorMessage, setErrorMessage] = useState("");

    const {characterId} = useParams()

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/${charcterId}")
            .then(response => response.data)
            .then((page: PageData) => setCharacters(page.results))
            //props.onGetComponents();
            .catch(e => setErrorMessage(e.message));
    }, [])

    useEffect(() => {
        setTimeout(() => setErrorMessage(""), 3000)
    }, [errorMessage])

    const getComponents = () => {
        return characters
            .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            .map(c => <DetailedGalleryItem
                character={{
                    name: c.name,
                    image: c.image,
                    status: c.status,
                    species: c.species,
                    origin: c.origin,
                    location: c.location,
                }}/>)
    }

return (
    <div className="gallery">
        {errorMessage && <div>{errorMessage}</div>}
        <div className="detailed-gallery">
            {getComponents()}
        </div>
    </div>
)
}