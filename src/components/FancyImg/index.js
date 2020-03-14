/*
* @Author: 王宸
* @Date:   2020-03-13 18:36:50
* @Last Modified by:   王宸
* @Last Modified time: 2020-03-13 18:38:07
*/
import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

export default class FancyImg extends Component {
  render() {
    return (
      <div>
        <ReactFancyBox
          thumbnail="https://loremflickr.com/320/240"
          image="https://www.w3schools.com/howto/img_forest.jpg"/>
      </div>
    );
  }
}
