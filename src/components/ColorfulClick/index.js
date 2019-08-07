import React from 'react';
import Script from 'react-load-script'

export default class ColorfulClick extends React.Component {


    render() {
        return (
            <Script
      url="./click-colorful.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
        )
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }
}