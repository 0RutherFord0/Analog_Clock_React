import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
 state = {
   h: 0,
   m: 0,
   s: 0,

 };

 interval = null;

 componentDidMount= () => {
   this.setTime();
 }


 setTime = () =>
 {
   this.interval = setInterval(() => {
     var d = new Date();

   var hours = d.getHours();
   var minutes = d.getMinutes();
   var seconds = d.getSeconds();


   this.setState({
     h: hours,
     m: minutes,
     s: seconds
   });

   },1000)


 }
 render() {
  const { h, m , s} = this.state;
  const unit12 = 360/12; //30
  const unit60 = 360/60; //6
  const hourunit = unit12/60;
  const minuteunit = unit60/60;

   return (
     <>

       <h1>CLOCK - {this.state.h}:{this.state.m}:{this.state.s}
       {(this.state.h>12) ? "PM" : "AM" }</h1>
        
        <div className = 'Clock'>
          
            <div className ='shadow-circle' ></div>
            <div className ='dot'></div>
            <div className = 'hour'style={{transform: `rotateZ(${((h%12)*unit12 + (hourunit))}deg)`}}></div>
            <div className = 'min'style={{transform: `rotateZ(${(m*unit60) + (minuteunit)}deg)`}}></div>
            <div className = 'sec'style={{transform: `rotateZ(${(s*unit60) + (hourunit + minuteunit)}deg)`}}></div>
          
          </div>

     </>
   )
 }
}



export default Clock;