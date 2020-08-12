import React from 'react'
import {Container , Row } from 'react-bootstrap'
import styled from 'styled-components'
import Card from './../components/city/Card'
import API from './../utils/Api'

const ThisContainer = styled(Container)`
  margin-top: 90px
`;


class HomeContainer extends React.Component {

  constructor(state){
    super(state)

    this.state = {
        activeCard : {},
        cities : []
    }
}

componentDidMount(){
    API.getHome().then(data => {
        console.log("home",data.cities)
        const activeCard = data.cities[0];
        data.cities.splice(0, 1);
        this.setState({activeCard,cities : data.cities})
        } 
    );          
}

render(){       
    const { name, slug, source } = this.state.activeCard;
    return(
        <ThisContainer>
            <Row>
                <div className="col-lg-6 col-sm-12">
                <Card 
                    name={name} 
                    slug={slug} 
                    source={source}
                
                /> 
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="row row-cols-2">
                        {
                            ( this.state.cities.length > 0 ? 
                                this.state.cities.map((item,i) => 
                                    <div className="col" key={i}> <Card                                         
                                        name={item.name} 
                                        slug={item.slug} 
                                        source={item.source}                                    
                                    /> </div>
                                ) : null )
                        }
                    </div>
                </div>
            </Row>            
        </ThisContainer>
    )
}
}
  
  export default HomeContainer;