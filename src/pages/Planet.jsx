import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Planet = ({planet}) => {

    const { store, dispatch } = useGlobalReducer();

    const addFavorites = (planet) =>{
       
       const favorite = {
            uid: planet.uid,
            name: planet.name,
            type: "planet"
        }

        dispatch({
            type: 'add-favorite',
            payload: {
                favorite
            }
        });
        
    }

    const removeFavorites =(planet) =>{
        dispatch({
            type: 'remove-favorite',
            payload: {
                uid: planet.uid,
                type: "planet"
            }
        });
    }
        
    const getFavoriteButton =()=>{
        const isFavorite = store.favorites.find(favorite=>
         favorite.uid === planet.uid && favorite.type === "planet"
        )
        if (isFavorite)
            return (
                <button onClick={()=>removeFavorites(planet)} className="aling-items-start btn btn-primary">
                    <i className="fa-solid fa-heart"></i>
                </button>
            )
        else {
            return (
                <button onClick={()=>addFavorites(planet)} className="aling-items-start btn btn-primary">
                    <i className="fa-regular fa-heart"></i>
                </button>    
            )
        }
        
    }

    return (
        <div className="container">
            <div className="card" style={{minWidth:"200px"}} key={planet.uid}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt={planet.name}/>
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">{planet.uid}</p>
                    <p className="card-text">{planet.terrain}</p>
                    <p className="card-text">{planet.gravity}</p>
                    <p className="card-text">{planet.population}</p>
                    <div className="d-flex justify-content-between">
                        <button href="/people" className="aling-items-start btn btn-primary">Learn more</button>
                        {getFavoriteButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}