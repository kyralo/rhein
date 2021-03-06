import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class Aplayer extends React.Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      mini: true,
      listFolded: true,
      listMaxHeight: 20,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        },
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        },
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        },
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    );
  }
}