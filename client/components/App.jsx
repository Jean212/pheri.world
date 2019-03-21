import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import News from './News';

// styled-components
import MainContainer from '../styles/Main';
import Header from '../styles/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
    this.changeView = this.changeView.bind(this);
  }
  

  changeView(option) {
    this.setState({
      view: option
    })
  }

  renderView() {
    if (this.state.view === 'home') {
      return <Home />
    } else if (this.state.view === 'news') {
      return <News />
    }
  }

  render() {
    return (
      <MainContainer id="main-page">
        {this.renderView()}
        <Header>
          <NavBar 
            changeView={this.changeView}
          />
        </Header>
      </MainContainer>
    )
  }
}

export default App;