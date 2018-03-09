import React, { Component, } from 'react'
import img from '../../assets/images/react_logo_512x512.png'


export default class IndexContainer extends Component {

  static propTypes = {}

  render() {
    return (
        <div>
          <h2 id="heading">Hello ReactJS</h2>
          <img
              className="image"
              style={{ margin: '0.5em', }}
              height="40"
              width="40"
              src={img}
              alt="React Logo"
          />
        </div>
    )
  }

}
