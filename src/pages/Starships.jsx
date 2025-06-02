import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Starship = ({starship}) => {

    const { store, dispatch } = useGlobalReducer();

    const addFavorites = (starship) =>{
       
       const favorite = {
            uid: starship.uid,
            name: starship.name,
            type: "starship"
        }

        dispatch({
            type: 'add-favorite',
            payload: {
                favorite
            }
        });
        
    }

    const removeFavorites =(starship) =>{
        dispatch({
            type: 'remove-favorite',
            payload: {
                uid: starship.uid,
                type: "starship"
            }
        });
    }
        
    const getFavoriteButton =()=>{
        const isFavorite = store.favorites.find(favorite=>
         favorite.uid === starship.uid && favorite.type === "starship"
        )
        if (isFavorite)
            return (
                <button onClick={()=>removeFavorites(starship)} className="align-items-start btn btn-primary">
                    <i className="fa-solid fa-heart"></i>
                </button>
            )
        else {
            return (
                <button onClick={()=>addFavorites(starship)} className="align-items-start btn btn-primary">
                    <i className="fa-regular fa-heart"></i>
                </button>    
            )
        }
        
    }

    return (
        <div className="container">
            <div className="card" style={{minWidth:"200px"}} key={starship.uid}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${starship.uid}.jpg`} className="card-img-top" alt={starship.name}/>
                <div className="card-body">
                    <h5 className="card-title">{starship.name}</h5>
                    <p className="card-text">{starship.uid}</p>
                    <p className="card-text">{starship.name}</p>
                    <p className="card-text">{starship.cargo_capacity}</p>
                    <p className="card-text">{starship.max_atmosphering_speed}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/Single/${starship.uid}`} className="align-items-start btn btn-primary">See details</Link>
                        {getFavoriteButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}