import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Avatar from '../images/profilePicture.jpg';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='parallax'></div>
        <div className='content'>
          <Grid fluid>
             <Row>
               <Col xs={6} md={3}>
                 <img id='avatar' src={Avatar} alt='Avatar' />
               </Col>
             </Row>
           </Grid>          
        </div>
      </div>
    );
  }
}

export default Home;
