import React from 'react'
import API from '../utils/Api'
import {Container , Row, Pagination } from 'react-bootstrap'
import styled from 'styled-components'

import Card from '../components/hotel/Card'
import Map from '../components/map/Map'

const ThisContainer = styled(Container)`
  margin-top: 90px
`;

class HotelContainer extends React.Component {
    constructor(state){
        super(state)
        this.state={
            hotel : {},
            center : { 
                lat : "",
                lon : ""
            }
        }
    }


  componentDidMount(){
    //console.log( 'params.id', this.props.match.params.id )
    API.getHotel(this.props.match.params.id).then(hotel => this.setState({
        hotel : hotel.result,
        center: hotel.result.location
    }))
    
  }

  render() {
    console.log("hotel",this.state.hotel)
    console.log("center",this.state.center)
    return ( 
      <ThisContainer fluid>
          <Row>
              <div className="col-lg-6 col-sm-12">
                HotelContainer
              </div>
              <div className="col-lg-6 col-sm-12">
                <Map hotels={[this.state.hotel]} center={{lat: this.state.center.lat, lng:this.state.center.lon}} zoom={12} />
              </div>
          </Row>
          
      </ThisContainer> 
    );
  }
}
  
export default HotelContainer;
