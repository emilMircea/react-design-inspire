import React, {Component} from 'react';
import GridItem from './TheGridItem';
import logo from './logo.svg';

import _ from 'lodash';

// images
import color1 from './../images/color1.png';
import color2 from './../images/color2.png';
import color3 from './../images/color3.png';
import color4 from './../images/color4.png';
import color5 from './../images/color5.png';
// font images
import font1 from './../images/font1.jpg';
import font2 from './../images/font2.jpg';
import font3 from './../images/font3.png';
import font4 from './../images/font4.jpg';
import font5 from './../images/font5.png';

// import bootstrap styles
import { Grid, Navbar, Nav, NavItem, Image } from 'react-bootstrap';

const fontArr = [font1, font2, font3, font4, font5];
const colorArr = [color1, color2, color3, color4, color5];

class TheGrid extends Component {

  constructor(props) {
    super(props);
    this.showColors = this.showColors.bind(this);
    this.showFonts = this.showFonts.bind(this);
    this.state = { images: [color1, font1, color2, font5, color5, font2, font3, font4, color4, color3] };
  }

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='index.html'>
                <Image className='App-logo' src={logo} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className='nav-link' id='showColors' onClick={this.showColors} eventKey={1} href="#">Color Palette</NavItem>
              <NavItem className='nav-link' id='showFonts' onClick={this.showFonts} eventKey={2} href="#">Fonts</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ImagesList images={this.state.images} />
      </div>
    );
  }
  showColors(e) {
    e.preventDefault();
    this.setState( () => ({
      images: colorArr
      }));
    } // end showColors
  showFonts(e) {
    e.preventDefault();
    this.setState( () => ({
      images: fontArr
      }));
    } // end showFonts

} // end of component

class ImagesList extends React.Component {
  render() {
    return (
      <Grid>
        {this.props.images.map( (image, id) => (
          <GridItem key={id}>
            <Image src={image} responsive />
          </GridItem>
        ))}
      </Grid>
    );
  }
}

export default TheGrid;
