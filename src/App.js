import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from 'react-highcharts';

/* Choosing Axios because it is isomorphic - Both node.js and the client can use the same calls. Makes server-side validation a snap
 * Supports the Promise API without a polyfill
 * Don't need an extra tool for supporting object query params
 * Client side support against cross origin attacks
 * We use it at Overstock and love it */
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.api_key = 'pnpfgkjaqbt7vmx83zs2h9ub';
        this.httpInstance = axios.create({
            baseURL: 'https://api.edmunds.com/api/',
            timeout: 5000
        });
        this.httpInstance.interceptors.request.use((config) => {
            //Always send the api_key in the request
            config.params.api_key = this.api_key;
            return config;
        }, function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    }

    componentDidMount() {
        // this.httpInstance.get('vehicle/v2/styles/count', {
        //     params: {
        //         state: "used"
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        const hc_config = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            }]
        };
        return (
            <div className="container">
                <div className="row">
                    <ReactHighcharts config={hc_config}/>
                </div>
            </div>
        );
    }
}

export default App;
