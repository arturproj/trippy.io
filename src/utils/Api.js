import Config from './../Config'

const fetchData = (url) => {
    return fetch( url )
        .then(res => res.json())
            .then(data => data)
}

class Api {

    getHome(){
        return fetchData(Config.host+"/api/home").then(data => { return { cities : data.cities} });
    }

    getCity(city){
        return fetchData(Config.host+"/api/hotels/city/"+city).then(data =>  { return data });
    }

    getHotel(id){
        return fetchData(Config.host+"/api/hotels/"+id).then(hotel =>  { return hotel });
    }
}

export default new Api();