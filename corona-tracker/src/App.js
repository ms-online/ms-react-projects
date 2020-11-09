import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import Styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {
    state = {
        data: {
        },
    }
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
      }
    render() { 
        return ( 
            <div className={Styles.container}>
                <Cards data={this.state.data}/>
                <CountryPicker />
                <Chart />
            </div>
         );
    }
}
 
export default App;