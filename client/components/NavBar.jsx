import React, { Component } from 'react';
import NavResponsive from '../styles/NavResponsive';

//styled-components:
import Container from '../styles/NavBar';
import NavButton from '../styles/buttons/NavButton';
import MenuButton from '../styles/buttons/MenuButton';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: 'close'
    }
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    let navMenu = document.querySelector('.navEl');
    navMenu.style.display = 'flex';
    navMenu.style.animation = 'appear-text-trans 0.5s';
    this.setState({
      nav: 'open'
    })
  }

  closeNav() {
    let navMenu = document.querySelector('.navEl');
    let btn = document.querySelector('a');
    btn.style.color = 'white';
    navMenu.style.animation = 'disappear-text-trans 0.3s';
    setTimeout(()=>{
      navMenu.style.display = 'none';
    }, 250);
    this.setState({
      nav: 'closed'
    })
  }

  render() {
    return (
      <Container>
        <div className="navWide">
          <NavButton
            onClick={()=> {
              this.props.changeView('news', false)
            }}
          ><a>News</a></NavButton>
          <NavButton
            onClick={()=> {
              this.props.changeView('about', false)
            }}
          ><a>About</a></NavButton>
          <div
            onClick={()=> this.props.changeView('home', true)}
          >
            <a>
              <img 
              src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/PhEri-logover2+(2).png" 
              alt="PhEri Logo" 
              id="pheri-logo-nav"
              ref="pheriLogo"/>
            </a>
          </div>
          <NavButton
            onClick={()=> {
              this.props.changeView('contact', false)
            }}
          ><a>Contact</a></NavButton>
          <NavButton
            onClick={()=> {
              this.props.changeView('links', false)
            }}
          ><a>Links</a></NavButton>
        </div>

        {/* Narrow Nav */}

        <div className="navNarrow">
          <div className="menuButton" onClick={this.openNav}>
            <MenuButton>
              <div className="burger bar-1"></div>
              <div className="burger bar-2"></div>
              <div className="burger bar-3"></div>
            </MenuButton>
          </div>
          
          <NavResponsive className="navEl">
            <div 
            id="navClose" 
            onClick={this.closeNav}>
              <a>x</a>
            </div>
            <NavButton
              onClick={()=> {
                this.props.changeView('home', true)
                this.closeNav()
              }}
            ><a>Home</a></NavButton>
            <NavButton
              onClick={()=> {
                this.props.changeView('news', false)
                this.closeNav();
              }}
            ><a>News</a></NavButton>
            <NavButton
              onClick={()=> {
                this.props.changeView('about', false)
                this.closeNav();
              }}
            ><a>About</a></NavButton>
            <NavButton
              onClick={()=> {
                this.props.changeView('contact', false)
                this.closeNav();
              }}
            ><a>Contact</a></NavButton>
            <NavButton
              onClick={()=> {
                this.props.changeView('links', false)
                this.closeNav();
              }}
            ><a>Links</a></NavButton>
          </NavResponsive>
        </div>
      </Container>
    )
  }
}

export default NavBar;