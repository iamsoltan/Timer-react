import React, { Component } from 'react';
import './App.css';


class App extends Component {
   state = {
      x : 0,
    };
    seconds = 0;
    minutes = 0;
    hours = 0;
    y = 0;

  render() {
    return (
      <div className="outercontainer">
        <div className="innercontainer">
            <div className="inputs">
                <input id="chrono" type="text" />
                <button className="conv" onClick={this.setx}>convert now</button><br />
            </div><br />
            <div className="aff">
            <div id="affichage"><h3>{this.hours} Hour  {this.minutes} minutes  {this.seconds} seconds</h3></div>
            <div className="aff2">
            <button className="cont"onClick={this.countDown} >countdown</button>
            <button className="stop">stop</button>
            <button className="reset" onClick={this.reset}>reset</button>
            </div>
            </div>
        </div>
    </div>
    );
  }


  setx =() =>{
    console.log("aywash");
    this.setState({x : document.getElementById("chrono").value*1 });
    console.log(this.state.x);
    this.convert(this.state.x)
  }
  convert=(x)=>{

    if ( x < 60 ) { this.seconds = x }else{
        if ( x < 3600) { this.seconds = x % 60 ; this.minutes =  (x-x%60)/60}else{
            this.seconds = x % 60 ; this.minutes = (x%3600-x%60)/60 ; this.hours = (x-x%3600)/3600 ;
        }
    }
  }
  countDown=()=>{
    this.y = setInterval(()=>{ this.setState({x : this.state.x -1 }) }, 1000) ;
  }
  stop=()=>{
    clearInterval(this.y)
  }
  reset=()=>{
    this.seconds=0; this.minutes=0; this.hours,  this.setState({x : 0 });
    clearInterval(this.y)
  }
  
}

export default App;
