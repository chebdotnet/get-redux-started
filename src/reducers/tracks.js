 // const initialState = [
 //   {id:'1541964705353', name:"People are strange"},
 //   {id:'1541964705354', name:"Alabama song"},
 //   {id:'1541964705355', name:"Riders on the storm"}
 // ]
const initialState = [];
export default function tracks(state = initialState, action){
  console.log(action);
  if (action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_TRACK'){
    return state;
  } else if (action.type === 'FETCH_TRACKS_SUCCESS'){
    return action.payload;
  }
  return state;
}
