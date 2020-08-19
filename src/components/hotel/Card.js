import React from 'react'
import {Card} from 'react-bootstrap'
import PropType from 'prop-types'
import Config from '../../Config'
import styled from 'styled-components'

const Hotel = styled(Card)`
padding: 10px;
border:0;
`;
const HotelBody = styled(Card.Body)`
padding:0;
`;
const ThisCard = ({name, source, slug, stars, price, url, id }) => {
    source = Config.host+source;

    const count = stars;
    stars = [];
    for (let index = 0; index < 5; index++) {        
        if (index < count) {
            stars[index] = "text-warning";
        }else{
            stars[index] = "text-mute";
        }        
    }

    return (
        <Hotel>
            <Card.Img variant="top" src={source} />
            <HotelBody >
                <Card.Link href={"/hotels/"+id}> {name} </Card.Link> <br/>     
                <HotelBody className="d-flex justify-content-between" >                   
                <span> 
                    {price} € 
                </span>
                <span> 
                    {stars.map((ele,i)=> <i key={i} className={"fas fa-star "+ele}></i>)}
                </span>           
            </HotelBody>         
            </HotelBody>
        </Hotel>
    )
}

ThisCard.propType = {
    source: PropType.string,
    slug: PropType.string,                  
};
ThisCard.defaultProps = {                 
    source: "/img/hotels/spinning.gif",
    slug: "",  
};

export default ThisCard;