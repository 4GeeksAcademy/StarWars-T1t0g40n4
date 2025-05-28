export const People = ({person}) => {
    return (
        <div className="container">
            <div className="card" style={{maxWidth:"18rem" }}>
                <img src={`https://www.swapi.tech/api/people/${person.uid}`} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.uid}</p>
                        <p className="card-text">{person.gender}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}