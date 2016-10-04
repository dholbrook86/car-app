import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
// I'd like to put all my components inside a "components" directory, but react-create-app (boilerplate I chose to
// try out defaults all imports to the node_modules folder. I didn't know this. I could "eject" the app but I want to keep all the configuration.
import DropDown from './DropDown';

import './App.css';

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
            // A flat state makes it easier to update and prevents unwanted mutations
            // If you are working with a larger state USE REDUX
            makes: "*",
            models: "*",
            yearsNew: "*",
            yearsUsed: "*",
            styles: "*",

            //Drop Down Selections
            selectedMake: '*',
            selectedMakeName: '',
            // selectedMake_data: {},
            // selectedModel_data: {},
            selectedModel: '*',
            selectedYear: '*',
            selectedStyle: '*',
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
                this.setState({makes: response.data.makes});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    changeMakeHandler(e) {
        let selectedMakeName = null;

        for (const key of Object.keys(this.state.makes)) {
            if (String(this.state.makes[key].id) === e.target.value)
                selectedMakeName = this.state.makes[key].niceName;
        }

        this.setState({selectedMakeName});
        this.setState({selectedMake: e.target.value},
            () => {
                this.httpInstance.get('/v1/api/tco/getmodelswithtcodata', {
                    params: {
                        makeid: this.state.selectedMake,
                        fmt: 'json'
                    }
                })
                    .then((response) => {
                        console.log(response);
                        this.setState({
                            models: response.data.models
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    changeModelHandler(e) {
        this.setState({selectedModel: e.target.value},
            () => {
                let car = this.state.models[this.state.selectedModel];
                if (car.years.NEW_USED) {
                    this.setState({yearsNew: car.years.NEW_USED});
                }
                if (car.years.USED) {
                    this.setState({yearsUsed: car.years.USED});
                }
            });
    }

    changeYearsHandler(e) {
        this.setState({selectedYear: e.target.value},
            () => {
                this.httpInstance.get('/v1/api/tco/getstyleswithtcodatabysubmodel', {
                    params: {
                        make: this.state.selectedMakeName,
                        model: this.state.models[this.state.selectedModel].nicemodel,
                        year: this.state.selectedYear,
                        submodel: this.state.models[this.state.selectedModel].submodel,
                        fmt: 'json'
                    }
                })
                    .then((response) => {
                        console.log("Styles: ", response);
                        this.setState({
                            styles: response.data.styles
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
    }

    changeStyleHandler(e) {
        this.setState({selectedYear: e.target.value},
            () => {
                this.httpInstance.get('/v1/api/tco/getstyleswithtcodatabysubmodel', {
                    params: {
                        make: this.state.selectedMakeName,
                        model: this.state.models[this.state.selectedModel].nicemodel,
                        year: this.state.selectedYear,
                        submodel: this.state.models[this.state.selectedModel].submodel,
                        fmt: 'json'
                    }
                })
                    .then((response) => {
                        console.log("Styles: ", response);
                        this.setState({
                            styles: response.data.styles
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
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
                    <select value={this.state.selectedMake} onChange={e => this.changeMakeHandler(e)}>
                        <option disabled value='*'>Select a Make</option>
                        <DropDown data={this.state.makes} type={"make"}/>
                    </select>
                    <label>Model: </label>
                    <select value={this.state.selectedModel} onChange={e => this.changeModelHandler(e)}>
                        <option disabled value='*'>Select a Model</option>
                        <DropDown data={this.state.models} type={"model"}/>
                    </select>
                    <label>New: </label>
                    <select value={this.state.selectedYear} onChange={e => this.changeYearsHandler(e)}>
                        <option disabled value='*'>Select a Year</option>
                        <DropDown data={this.state.yearsNew} type={"new"}/>
                        <DropDown data={this.state.yearsUsed} type={"used"}/>
                    </select>
                    <label>Style: </label>
                    <select value={this.state.selectedStyle} onChange={e => this.changeStyleHandler(e)}>
                        <option disabled value='*'>Select a Style</option>
                        <DropDown data={this.state.styles} type={"styles"}/>
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
