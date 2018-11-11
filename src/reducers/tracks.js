const initialState = [
    "People are strange",
    "Alabama song ",
    "Riders on the storm"
  ];

export default function tracks(state = initialState, action){
  console.log(action);
  if (action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_TRACK'){
    return state;
  }
  return state;
}
