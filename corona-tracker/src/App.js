import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import Styles from './App.module.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={Styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
         );
    }
}
 
export default App;