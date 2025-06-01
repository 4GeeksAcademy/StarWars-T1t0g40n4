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
    case 'add-favorites':{
      console.log("store", store.favorites)
      return{
        ...store,
        favorites:[...store.favorites, action.payload]
      }
    }
    case 'remove-favorite':{
      console.log(action.payload.favorites)

      const newFavorites = store.favorites.filter((favorite) =>  { 
        console.log('favorite', favorite)
        console.log(favorite.uid, action.payload.favorites.uid);
        return favorite.uid !== action.payload.favorites.uid })
      console.log(newFavorites)
      
      return {
        ...store,
        favorites: newFavorites
      }
    }
    default:
      throw new Error('Unknown action');
  }
}