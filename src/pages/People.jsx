import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useState} from "react";
export const People = ({person}) => {

   const { store, dispatch } = useGlobalReducer();
   const [isFavorite, setIsFavorite] = useState(false); 

    const addFavorites =(person) =>{
       
       const favorites = {
        uid: person.uid,
        name: person.name,
        type: "person"
        }
        setIsFavorite(true);

        dispatch({
				type: 'add-favorites',
				payload: {
					favorites
				}
			});
        
    }
    const removeFavorites =(person) =>{
       
       const favorites = {
        uid: person.uid,
        type: "person"
        }
        setIsFavorite(false);

        dispatch({
				type: 'remove-favorite',
				payload: {
					favorites
				}
			});
        
    }
        
        const getFavoriteButton =()=>{
            if (isFavorite) {
                 return <button onClick={()=>removeFavorites(person)} className="aling-items-start btn btn-primary"><i className="fa-solid fa-heart"></i></button>
            }
            else 
                return <button onClick={()=>addFavorites(person)} className="aling-items-start btn btn-primary"><i className="fa-regular fa-heart"></i></button>    
            
        }
    return (
        <div className="container">
            
            <div className="card" style={{minWidth:"200px"}} key={person.uid}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt={person.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{person.uid}</p>
                        <p className="card-text">{person.gender}</p>
                        <p className="card-text">{person.hair_color}</p>
                        <p className="card-text">{person.eye_color}</p>
                        <div className="d-flex justify-content-between">
                            <button href="/people" className="aling-items-start btn btn-primary">Learn more</button>
                            {getFavoriteButton()}
                            
                        </div>
                       
                        
                    </div>
            </div>
        </div>
    )
}