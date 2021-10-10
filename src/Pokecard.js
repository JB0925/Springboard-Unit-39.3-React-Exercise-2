import "./Pokecard.css";

const Pokecard = props => {
    const { id, name, type, base_experience } = props.card;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img src={url} alt={name}/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
};

export default Pokecard;