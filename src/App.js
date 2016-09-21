import React, {Component} from 'react';
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
            baseURL: 'https://api.edmunds.com',
            timeout: 5000
        });
        this.httpInstance.interceptors.request.use((config) => {
            //Always send the api_key in the request
            if (!config.params) {
                config.params = {}
            }
            config.params.api_key = this.api_key;
            return config;
        }, function (error) {
            console.log(error);
            return Promise.reject(error);
        });
        this.state = {
            appData: {
                availableMakes: {},
                availableModels: {}
            },
            selected: {
                make: '*',
                model: '*'
            }
        }
    }

    componentDidMount() {
        this.httpInstance.get('/v1/api/tco/getmakeswithtcodata', {
            params: {
                fmt: 'json'
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    appData: Object.assign(this.state.appData, {availableMakes: response.data.makes})
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    changeModelHandler(e) {

    }

    changeMakeHandler(e) {
        this.setState({
                selected: Object.assign(this.state.selected, {make: e.target.value})
            },
            () => {
                this.httpInstance.get('/v1/api/tco/getmodelswithtcodata', {
                    params: {
                        makeid: this.state.selected.make,
                        fmt: 'json'
                    }
                })
                    .then((response) => {
                        console.log(response);
                        this.setState({
                            appData: Object.assign(this.state.appData, {availableModels: response.data.models})
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    genMakeOptions() {
        if (this.state.appData.availableMakes !== null) { //this waits for the data to come back and be assigned to `availableMakes`
            return Object.keys(this.state.appData.availableMakes).map((key)=> {
                let val = this.state.appData.availableMakes[key];
                return <option value={val.id} key={key}>{val.name}</option>;
            });
        }
    }

    genModelOptions() {
        if (this.state.appData.availableModels !== null) {
            return Object.keys(this.state.appData.availableModels).map((key)=> {
                let val = this.state.appData.availableModels[key];
                return <option value={val.id} key={key}>{val.name}</option>;
            });
        }
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
                <div className="input-field col s12">
                    <label>Make: </label>
                    <select value={this.state.selected.make} onChange={e => this.changeMakeHandler(e)}>
                        <option disabled value='*'>Select a Make</option>
                        {this.genMakeOptions()}
                    </select>
                    <label>Model: </label>
                    <select value={this.state.selected.model} onChange={e => this.changeModelHandler(e)}>
                        <option disabled value='*'>Select a Model</option>
                        {this.genModelOptions()}
                    </select>
                </div>
                <div className="row">
                    <ReactHighcharts config={hc_config}/>
                </div>
            </div>
        );
    }
}

export default App;
