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
        };        console.log(AirCheapAPI.fetchAirports());        return (            <div>                <Navbar />                <div className={contentTop}>                    {this.props.children}                </div>            </div>        );    }}