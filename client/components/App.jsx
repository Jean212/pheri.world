import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';

// styled-components
import MainContainer from '../styles/Main';
import Header from '../styles/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }
  

  changeView(option) {
    this.setState({
      view: option
    })
  }

  renderView() {
    if (this.state.view === 'home') {
      return <Home />
    }
  }

  render() {
    return (
      <MainContainer id="main-page">
        {this.renderView()}
        <Header>
          <NavBar />
        </Header>
      </MainContainer>
    )
  }
}

export default App;