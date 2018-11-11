 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import './App.css';

 class App extends Component {
   addTrack(){
      console.log('add track', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
   }

   render() {
     console.log(this.props.testStore);
     return (
       <div className="App">
         <input type="text" className="trackInput" ref={(input) => {this.trackInput = input; }}/>
         <button onClick={this.addTrack.bind(this)} className="addTrack">Add track</button>
         <ul className="list">
         {this.props.tracks.map((track, index) =>
           <li key={index}>{track}</li>
         )}
         </ul>
       </div>
     );
   }
 }

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({'type': 'ADD_TRACK', payload: trackName})
    }
  })
)(App);
