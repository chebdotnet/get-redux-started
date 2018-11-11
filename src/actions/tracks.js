var mockDataApi = [
  {id:'1541964705353', name:"People are strange"},
  {id:'1541964705354', name:"Alabama song"},
  {id:'1541964705355', name:"Riders on the storm"}
]



export const getTracks = () => dispatch => {
  setTimeout(()=>{
    console.log("I got tracks");
    dispatch({'type': 'FETCH_TRACKS_SUCCESS', payload: mockDataApi})
  }, 2000)
};
