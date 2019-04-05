import React, { Component } from 'react';

//React components
import NavBar from './NavBar';
import Home from './Home';
import News from './News';
import About from './About';
import Contact from './Contact';
import Links from './Links';
import Music from './Music';
import Shop from './Shop';

// styled-components
import MainContainer from '../styles/Main';
import Header from '../styles/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      scrolling: false,
      home: true
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    console.log('Welcome to PhEri world');
  }

  componentWillUnmount() {
  }

  changeView(option, checkHome) {
    this.setState({
      view: option,
      home: checkHome
    })
  }

  renderView() {
    if (this.state.view === 'home') {
      return <Home 
        className="webPage"
      />
    } else if (this.state.view === 'news') {
      return <News 
        className="webPage"
        state={this.state}
        changeView={this.changeView}
      />
    } else if (this.state.view === 'about') {
      return <About 
        className="webPage"
        state={this.state}
      />
    } else if (this.state.view === 'music') {
      return <Music 
        className="webPage"
        state={this.state}
      />
    } else if (this.state.view === 'contact') {
      return <Contact 
        className="webPage"
        state={this.state}
      />
    } else if (this.state.view === 'shop') {
      return <Shop 
        className="webPage"
        state={this.state}
      />
    } else if (this.state.view === 'links') {
      return <Links 
        className="webPage"
        state={this.state}
      />
    }
  }

  render() {
    return (
      <MainContainer 
      id="mainPage"
      >
        {this.renderView()}
        <Header
            className={this.state.home ? 'homeHeader' : 'notHome'}
        >
          <NavBar 
            className={this.state.home ? 'homeHeader' : 'notHome'}
            changeView={this.changeView}
            ref="navBar"
            state={this.state}
          />
        </Header>
      </MainContainer>
    )
  }
}

export default App;