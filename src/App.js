 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import './App.css';
  
  import { getTracks } from './actions/tracks';

 class App extends Component {
   addTrack(){
      console.log('add track', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
   }

   findTrack(){
      console.log('find track', this.searchInput.value);
      this.props.onFindTrack(this.searchInput.value);
      this.searchInput.value = '';
   }


   render() {
     console.log(this.props.testStore);
     return (
       <div className="App">
         <div>
           <input type="text" className="trackInput" ref={(input) => {this.trackInput = input; }}/>
           <button onClick={this.addTrack.bind(this)} className="addTrack">Add track</button>
         </div>
         <div>
           <input type="text" className="searchInput" ref={(input) => {this.searchInput = input; }}/>
           <button onClick={this.findTrack.bind(this)} className="findTrack">Find track</button>
         </div>
         <div>
          <button onClick={this.props.onGetTracks}>Get Tracks</button>
         </div>
         <ul className="list">
         {this.props.tracks.map((track, index) =>
           <li key={index}>{track.name}</li>
         )}
         </ul>
       </div>
     );
   }
 }

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      const payload = {
        id: Date.now().toString(),
        name: trackName
      }
      dispatch({'type': 'ADD_TRACK', payload: payload})
    },
    onFindTrack: (name) => {
      dispatch({'type': 'FIND_TRACK', payload: name})
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);
