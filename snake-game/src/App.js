import React, { Component } from 'react';
import { Food } from './components/Food'
import { Snake } from './components/Snake'

//随机生成Food坐标（0-98）偶数
const getRandomCoordinates = () =>{
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * max + min)/2)*2;
  let y = Math.floor((Math.random() * max + min)/2)*2;
  return [x, y];
}

class App extends Component {
  state = {
    food:getRandomCoordinates(),
    snakeDots: [
      [0, 0],
      [2,0]
    ]
  }
 
  render() {
    return (
      <div className='game-area'>
        <Snake snakeDots={this.state.snakeDots} />
        <Food food={this.state.food} />
      </div>
    );
  }
}

export default App;


