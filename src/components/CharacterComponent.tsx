interface CharacterComponentProps{
    name: string;
    image: string,
}

export default function CharacterComponent(props: CharacterComponentProps){
    return (
        <div>
            Charakter: {props.name} <img src={props.image}/>
        </div>
    )
}