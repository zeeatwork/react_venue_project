import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export default class pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Pellentesque dignissim enim sit amet.",
      "Risus quis varius quam quisque id diam.",
    ],
    linkto: [
      "https://www.zenziali.com",
      "https://www.learncodewithme.com",
      "https://www.youtube.com",
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay} key={i}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>${this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
            <span>${this.state.desc[i]}</span>
          </div>
          <div className="pricing_buttons"><MyButton 
              text="purchase"
              bck="#ffa800"
              color="white"
              link={this.state.linkto[i]}
              />
              </div>
        </div>
      </div>
    </Zoom>)
    
    );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
