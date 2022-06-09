import characters from '../characters.json';
import GalleryItem from './GalleryItem';
import './Gallery.css';

export default function Gallery() {
    const components = characters.map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    return (
        <div className="gallery">
            {components}
        </div>
    )
}