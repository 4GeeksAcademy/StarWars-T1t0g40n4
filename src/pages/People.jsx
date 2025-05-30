import { Link } from "react-router-dom";

export const People = ({person}) => {
    return (
        <div className="container">
            
            <div className="card" style={{maxWidth:"540"}} key={person.uid}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${person.uid}.jpg `} className="card-img-top" alt={person.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.uid}</p>
                        <p className="card-text">{person.gender}</p>
                        <p className="card-text">{person.hair_color}</p>
                        <p className="card-text">{person.eye_color}</p>
                        <Link href="/people" className="aling-items-start btn btn-primary">Learn more</Link>
                    </div>
            </div>
        </div>
    )
}