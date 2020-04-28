import React, { Component } from 'react';
import './App.css';


class App extends Component {
   state = {
      x : 0
    };
    seconds = 0;
    minutes = 0;
    hours = 0;
    y = 0;
    iscountDownActive = false ;

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
            <button className="stop" onClick={this.stop}>stop</button>
            <button className="reset" onClick={this.reset}>reset</button>
            </div>
            </div>
        </div>
    </div>
    );
  }


  setx =() =>{
    console.log("aywash this :",this);
    let chrono = this.state.x = document.getElementById("chrono").value*1;
    this.convert(this.state.x);
    this.setState({x : chrono});
    console.log("x  : ",this.state.x);

  }
  convert=(x)=>{

    if ( x < 60 ) { this.seconds = x ; this.minutes=0;this.hours=0}else{
        if ( x < 3600) { this.seconds = x % 60 ; this.minutes =  (x-x%60)/60 ; this.hours=0;}else{
            this.seconds = x % 60 ; this.minutes = (x%3600-x%60)/60 ; this.hours = (x-x%3600)/3600 ;
        }
    }
    console.log("convert is executed");
  }
  countDown=()=>{
    if ((this.iscountDownActive == false ) &&  (this.state.x > 0)){
    this.y = setInterval(()=>{ if (this.state.x >0) {this.iscountDownActive = true ; this.state.x = this.state.x - 1; this.convert(this.state.x) ;this.setState({x : this.state.x }) ;console.log("x : ",this.state.x);
    }else{this.stop()}}, 1000) ;
    console.log("countDown is executed");
  }
  }

  stop=()=>{
    clearInterval(this.y);
    console.log("stop is executed");
    this.iscountDownActive = false;
  }
  reset=()=>{
    this.stop();
    this.seconds=0; this.minutes=0; this.hours = 0 ; this.setState({x : 0 });
    this.y = 0;
    console.log("reset is executed");
  }
  
}

export default App;
