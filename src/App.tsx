import React, { Component } from 'react';
import './App.css';
import {MapExperiment} from './MapExperiment'

class App extends Component {
    render() {
        return (
            <MapExperiment lat={-34.4} lng={150.6}/>
        );
    }
}

// const App = () => (
//     <MapExperiment lat={-34.4} lng={150.6}/>
// )

export default App;
