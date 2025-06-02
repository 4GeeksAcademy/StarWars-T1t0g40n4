import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const People = ({person}) => {

    const { store, dispatch } = useGlobalReducer();
    

    const addFavorites = (person) =>{
       
       const favorite = {
            uid: person.uid,
            name: person.name,
            type: "person"
        }

        dispatch({
            type: 'add-favorite',
            payload: {
                favorite
            }
        });
        
    }

    const removeFavorites =(person) =>{
        dispatch({
            type: 'remove-favorite',
            payload: {
                uid: person.uid,
                type: "person"
            }
        });
    }
        
    const getFavoriteButton =()=>{
        const isFavorite = store.favorites.find(favorite=>
         favorite.uid === person.uid && favorite.type === "person"
        )
        if (isFavorite)
            return (
                <button onClick={()=>removeFavorites(person)} className="align-items-start btn btn-primary">
                    <i className="fa-solid fa-heart"></i>
                </button>
            )
        else {
            return (
                <button onClick={()=>addFavorites(person)} className="align-items-start btn btn-primary">
                    <i className="fa-regular fa-heart"></i>
                </button>    
            )
        }
        
    }

    return (
        <div className="container">
            <div className="card h-100" style={{minWidth:"200px"}} key={person.uid}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt={person.name}/>
                <div className="card-body">
                    <h5 className="card-title">Name: {person.name}</h5>
                    <p className="card-text">Id: {person.uid}</p>
                    <p className="card-text">Gender: {person.gender}</p>
                    <p className="card-text">Hair color: {person.hair_color}</p>
                    <p className="card-text">Eyes color: {person.eye_color}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/Single/${person.uid}`} className="align-items-start btn btn-primary">See details</Link>
                        {getFavoriteButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}