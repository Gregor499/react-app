import {Link} from "react-router-dom";
import {Character} from "../../model";

interface GalleryItemProps {
    character: Character
}

export default function DetailedGalleryItem(props: GalleryItemProps) {
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
                    <span className="label">Species:</span> {props.character.origin.originName}
                </div>
                <div>
                    <span className="label">Species:</span> {props.character.origin.originUrl}
                </div>
                <div>
                    <span className="label">Species:</span> {props.character.location.locationName}
                </div>
                <div>
                    <span className="label">Species:</span> {props.character.location.locationUrl}
                </div>
            </div>
        </div>
    )
}