import React from 'react'
import qs from 'qs'
import API from '../utils/Api'
import {Container , Row, Pagination } from 'react-bootstrap'
import styled from 'styled-components'

import Card from '../components/hotel/Card'
import Map from '../components/map/Map'

const ThisContainer = styled(Container)`
  margin-top: 90px
`;

class HotelsContainer extends React.Component {
  constructor(state){
    super(state)

    this.state = {
      city : "",
      center : "",
      hotels : [],
      select : [],
      pagination : [],
    }

    this.paginationHotels = this.paginationHotels.bind(this)
    this.hendlerHotels = this.hendlerHotels.bind(this)
  }

  componentDidMount(){
    const { city } = qs.parse(window.location.search.replace('?', ''));
    API.getCity(city).then(data => {      
      this.setState({
        city,
        center : data.center,
        hotels : data.results,
        pagination : this.paginationHotels(data.results)
      })
      this.hendlerHotels(1)
    });
         
  }

  paginationHotels(val){
    let rel = (val.length / 4);var res=[];
    for (let index = 0; index < rel; index++) {
      res.push(index+1)      
    }
    //console.log(res)
    return res;
  }

  hendlerHotels(pag){
    pag = 4*pag;
    this.setState({
      select : this.state.hotels.slice(pag-4, pag)
    })
    //console.log(this.state.hotels)
  }

  render() {
    return ( 
      <ThisContainer fluid>
        <Row>
          <div className="col-lg-6 col-md-6 col-sm-12">
           <Row className="row-cols-md-2 row-cols-lg-2 px-0">
             {
               (this.state.select.length > 0 ? 
                this.state.select.map((ele,i) =>
                <Card key={i} source={ele.pictures[0]} name={ele.name} price={ele.price} stars={ele.stars} url={ele.website} id={ele._id} />
                )
                : null)
             }
           </Row>
           <Pagination className="d-flex justify-content-center">
              {(this.state.pagination.length > 0 ? this.state.pagination.map((ele,i) => <Pagination.Item key={i} onClick={()=>this.hendlerHotels(i+1)}>{ele}</Pagination.Item>) : null)}
          </Pagination>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          {(this.state.hotels.length > 0 ? <Map hotels={this.state.hotels} center={{lat: this.state.center.lat,lng:this.state.center.lon}} zoom={12} /> : null)}
            
          </div>
        </Row>
      </ThisContainer> 
    );
  }
}
  
export default HotelsContainer;
