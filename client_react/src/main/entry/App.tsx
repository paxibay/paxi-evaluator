import * as React from 'react';
import 'whatwg-fetch';import Navbar from './Navbar';
export default class App extends React.Component<{}, {}> {
    render() {        const topStyle = {
            topPadding: 'topPadding'
        };
        let contentTop = `container ${topStyle.topPadding}`;        let AirCheapAPI = {
            fetchAirports() {
                return fetch('/api/locations/' + '56c8dd0bdafe64443c11898f')
                    .then((response) => response.json());
            },

            //fetchTickets(origin, destination) {
            //    return fetch('flights.json')
            //        .then((response) => response.json());
            //}
            // return this.http.get('/api/locations/' + '56c8dd0bdafe64443c11898f')
        };        console.log(AirCheapAPI.fetchAirports());        return (            <div>                <Navbar />                <div className={contentTop}>                    {this.props.children}                </div>            </div>        );    }}

//let AirCheapAPI = {
//  fetchAirports() {
//    return fetch('airports.json')
//      .then((response) => response.json());
//  },

//  fetchTickets(origin, destination) {
//    return fetch('flights.json')
//      .then((response) => response.json());
//  }
//};

//export default AirCheapAPI;