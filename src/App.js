import logo from './logo.svg';
import './App.css';
import {Component}from 'react';
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
const API='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
window.onload = function() {
    document.body.className += " loaded";
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      index:undefined,
      color:colors[Math.floor(Math.random()*colors.length)]
  };
    this.randomIndexer=this.randomIndexer.bind(this);
 this.changeColor=this.changeColor.bind(this);
  }
  randomIndexer(){
    this.setState({
      index:Math.floor(Math.random()*this.state.quotes.length)
    })
  }
  
  changeColor(){
    this.setState({
      color:colors[Math.floor(Math.random()*colors.length)]
    })
  }
  
  componentDidMount(){
   console.log(this.state.color); fetch(API).then(res=>res.json()).then(res=>{this.setState({quotes:res.quotes
},this.randomIndexer,this.changeColor)
})
  }
  
  render(){
    let quote=this.state.quotes[this.state.index];
    return(
      <div style={{'background-color':this.state.color}} className='d-flex flex-column align-items-center justify-content-center vh-100'>
        <div id='quote-box' className='rounded w-50'>
          {quote && 
            <div style={{color:this.state.color}}>
            <p id='text'>
              <i class="fas fa-quote-left fa-2x"> </i> {quote.quote}
              </p>
              <br /><p id='author' class='d-flex justify-content-end'>-{quote.author}</p></div>}
          <div class='d-flex justify-content-between'>
            <a id='tweet-quote' href='https://twitter.com/intent/tweet'target='_blank'><button class='rounded' style={{'background-color':this.state.color}}><i class="fab fa-twitter" ></i></button></a>
          <button onClick={()=>{this.randomIndexer();
                                this.changeColor();}} id='new-quote' class='rounded' style={{'background-color':this.state.color}}>
            <i class="bi bi-dice-6"></i> &nbsp;&nbsp;New Quote</button></div>
        </div>
        <p>چيمي الحكيم</p>
    </div>)
  }
}
export default App;
