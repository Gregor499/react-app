import {Character} from "../model"
import './GalleryItem.css';
import {Link} from "react-router-dom";

interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <div className="image-wrapper">
                <img src={props.character.image}/>
            </div>
            <div data-testid="testCharacter" className="character-information">
                <div>
                    <span className="label">Name:</span> {props.character.name}
                </div>
                <div>
                    <span className="label">Status:</span> {props.character.status}
                </div>
                <div>
                    <span className="label">Species:</span> {props.character.species}
                </div>
                <div>
                    <Link to="/details/:characterId">Details</Link>
                </div>
            </div>
        </div>
    )
}