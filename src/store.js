export const initialStore=()=>{
  return{
    people : [],
    planets : [],
    starships: [],
    favorites : []
  }    
}
export default function storeReducer (store, action = {}){
  switch(action.type){
    case 'set-people':{
      const {people} = action.payload;
      return{
        ...store,
        people : people
      }
    }
    case 'set-planets':{
      const {planets} = action.payload;
      return{
        ...store,
        planets : planets
      }
    }
    case 'set-starships':{
      const {starships} = action.payload;
      return{
        ...store,
        starships : starships
      }
    }
    case 'add-favorite':{
      return{
        ...store,
        favorites: [...store.favorites, action.payload.favorite]
      }
    }
    case 'remove-favorite':{
      const newFavorites = store.favorites.filter((favorite) => !(favorite.uid === action.payload.uid && favorite.type === action.payload.type)) ;
      return {
        ...store, 
        favorites: [...newFavorites]
      }
    }
    default:
      throw new Error('Unknown action');
  }
}