export const initialStore=()=>{
  return{
    people : [],
    planets : [],
    starships: [],
    favorits : []
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
      
    }
    case 'remove-favorite':{

    }
    default:
      throw new Error('Unknown action');
  }
}