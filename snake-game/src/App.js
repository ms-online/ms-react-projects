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
    direction:'RIGHT',
    speed:200,
    snakeDots: [
      [0, 0],
      [2,0]
    ]
  }
 //1键盘事件
 componentDidMount() {
   setInterval(this.moveSnake,this.state.speed );
   document.onkeydown = this.onkeydown;
 }
 //2键盘函数
 onkeydown =(e) => {
   switch (e.keyCode) {
      case 38:
        this.setState({ direction: 'UP'});
        break;
      case 40:
        this.setState({ direction: 'DOWN'});
        break;
      case 37:
        this.setState({ direction: 'LEFT'});
        break;
      case 39:
        this.setState({ direction: 'RIGHT'});
        break;
      default:
        this.setState({ direction: 'RIGHT'});
   }
 }

 //3移动贪吃蛇函数
 moveSnake = () => {
   let dots = [...this.state.snakeDots];
   let head = dots[dots.length - 1];

   switch (this.state.direction) {
     case 'RIGHT':
       head = [head[0] + 2, head[1]];
       break;
     case 'LEFT':
       head = [head[0] - 2, head[1]];
      break;
     case 'DOWN':
       head = [head[0], head[1] + 2];
      break;
      case 'UP':
      head = [head[0], head[1] - 2];
      break;
     default:
       break;
   }

   dots.push(head);
   dots.shift();
   this.setState({
     snakeDots:dots
   })
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


