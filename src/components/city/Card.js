import React from 'react'
import {Card} from 'react-bootstrap'
import PropType from 'prop-types'
import Config from './../../Config'
import styled from 'styled-components'

const CityBody = styled(Card.Body)`
padding:0;
`;

const ThisCard = ({name, source, slug }) => {
    
    source = ( source !== "http://via.placeholder.com/300x200" ? Config.host+source : source)
    slug = ( slug !== "" ? "/hotels/?city="+slug : slug)

    return (
        
            <Card>
                <a href={slug}>
                <Card.Img variant="top" src={source} />
                <CityBody>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </CityBody>
                </a>
            </Card>       

    )
}

ThisCard.propType = {
    source: PropType.string,
    slug: PropType.string,                  
};
ThisCard.defaultProps = {                 
    source: "http://via.placeholder.com/300x200",
    slug: "",  
};

export default ThisCard;