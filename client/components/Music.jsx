import React, { Component } from 'react';

//react components:
import PheriDust from './PheriDust';

//styled-components:
import Container from '../styles/Music';
import WallFade from '../styles/animations/pageFade';
import MusicList from '../styles/music-section/musicList'
import Footer from '../styles/Footer';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'pheri',
      footer: true
    }
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(option, footer) {
    this.setState({
      view: option,
      footer: footer
    })
  }

  renderView() {
    if (this.state.view === 'pheri') {
      return (
        <div>
          <MusicList>
            <WallFade>
              <h1 className="transitionText">{this.props.state.view}</h1>
            </WallFade>
            <div className="albumName">
              <h3>[Single]  「PhEri Dust」</h3>        
            </div>
            <img 
              className="albumImage"
              src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/music-section/pheridust.jpg" 
              alt="pheri dust"
              onClick={()=>{
                this.changeView('pheriDust')
              }}
            />
            <ul className="albumInfo">
                <li>[Release] 2018.11.03</li>
                <li>[Label] Professor Records</li>
            </ul>
            <div 
            className="buyMusic"
            onClick={()=>{
              this.changeView('pheriDust')
            }}>
              <strong>Buy PhEri Dust</strong>
            </div>
          </MusicList>
        </div>
      )
    } else if (this.state.view === 'pheriDust') {
      return (
        <PheriDust
          changeView={this.changeView}
        />
      )
    }
  } 

  render() {
    return (
      <Container>
        <WallFade>
          <h1 className="transitionText">{this.props.state.view}</h1>
        </WallFade>
        <h1>
          Music
        </h1>
        <ul id="artistList">
          <li
            onClick={()=>{
              this.changeView('pheri', false)
            }}>PhEri</li>
          <li>Phoebe</li>
          <li>Eri</li>
        </ul>
        {this.renderView()}
      </Container>
    )
  }
} 

export default Music;