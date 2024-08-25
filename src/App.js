import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div className='App'>
     <header className="App-header">
      <h1 className='App-title'>Google Map with react</h1>
     </header>
     <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
       
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDty5ZmJIZQnZXdy0lM-HX_zZ9qnrVUgKI')
})(App)
