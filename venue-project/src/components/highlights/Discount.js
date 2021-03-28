import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  }

 percentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })

    }
  }


  componentDidUpdate() {
    setTimeout(()=>{
      this.percentage()
    },30)
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={()=> this.percentage()}
          >
          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>Off</span>
          </div>
          </Fade>
          <Slide>
          <div className="discount_description">
            <h3>Purchase Tickets before December 1st</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
              laoreet non curabitur gravida arcu ac tortor dignissim.
            </p>
          <div><MyButton 
          text="Purchase Tickets"
          bck="#ffa800"
          color="#ffffff"
          link="https://www.google.com"
          /></div>
          
          </div></Slide>
        </div>
      </div>
    );
  }
}
