import React from 'react';
import { Badge } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <Badge variant="success" style={{fontSize:".8rem"}}>{text}</Badge>;

class App extends React.Component {
    constructor(state){
        super(state)

        this.state = {
            hotels : []
        }
    }
    
    componentDidMount(){
        //console.log("maps",this.props.hotels)
    }

    render() {
        return (
        <div style={{ width: 600, height: 600 }}>
            <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA2YZVO1empgUEIclgAr9FRnPANHnyRUtg" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                {
                    (
                        this.props.hotels.map((ele,i)=>
                        <AnyReactComponent key={i}
                            lat={ele.location.lat}
                            lng={ele.location.lon}
                            text={ele.price+" €"}
                        />
                        )
                    )
                }
            </GoogleMapReact>
            </div>
        </div>
        );
    }
}

App.defaultProps = {
  center: {
    lat: 25.1233779,
    lng: -74.9871031,
  },
  zoom: 6
}

export default App;