import React, { Component } from 'react'

export default class pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Pellentesque dignissim enim sit amet.',
      'Risus quis varius quam quisque id diam.'
    ],
    linkto: ['https://www.zenziali.com', 'https://www.learncodewithme.com', 'https://www.youtube.com']
  }
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            boxes
          </div>
        </div>
        
      </div>
    )
  }
}
