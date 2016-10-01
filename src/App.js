import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import update from 'react-addons-update';
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
            makes: {},
            models: {},
            yearsNew: [],
            yearsUsed: [],

            //Drop Down Selections
            selectedMake: '*',
            selectedMake_data: {},
            selectedModel_data: {},
            selectedModel: '*',
            selectedYear: '*',
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

    changeModelHandler(e) {
        this.setState({selectedModel: e.target.value},
            () => {
                let car = this.state.models[this.state.selectedModel];
                if(car.years.NEW_USED){
                    this.setState({yearsNew: car.years.NEW_USED});
                }
                if(car.years.USED){
                    this.setState({yearsUsed: car.years.USED});
                }
            });
    }

    changeMakeHandler(e) {
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

    changeYearsHandler(e){
        this.setState({selectedYear: e.target.value},
            () => {
                this.httpInstance.get('/v1/api/tco/getstyleswithtcodatabysubmodel', {
                    params: {
                        make: this.state.models[this.state.selectedModel].nicemodel,
                        model: this.state.models[this.state.selectedModel].nicemodel,
                        year: this.state.selectedYear,
                        submodel: this.state.models[this.state.selectedModel].submodel,
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
            });
    }

    genMakeOptions() {
        if (this.state.makes !== null) { //this waits for the data to come back and be assigned to `makes`
            return Object.keys(this.state.makes).map((key)=> {
                let val = this.state.makes[key];
                return <option value={val.id} key={key}>{val.name}</option>;
            });
        }
    }

    genModelOptions() {
        if (this.state.models !== null) {
            return Object.keys(this.state.models).map((key)=> {
                let val = this.state.models[key];
                return <option value={key} key={key}>{val.name}</option>;
            });
        }
    }

    genYearsNewOptions(){
        if (this.state.yearsNew !== null) {
            return Object.keys(this.state.yearsNew).map((key)=> {
                let val = this.state.yearsNew[key];
                return <option value={val} key={key}>{val}</option>;
            });
        }
    }

    genYearsUsedOptions(){
        if (this.state.yearsUsed !== null) {
            return Object.keys(this.state.yearsUsed).map((key)=> {
                let val = this.state.yearsUsed[key];
                return <option value={val} key={key}>{val}</option>;
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
                    <select value={this.state.selectedMake} onChange={e => this.changeMakeHandler(e)}>
                        <option disabled value='*'>Select a Make</option>
                        {this.genMakeOptions()}
                    </select>
                    <label>Model: </label>
                    <select value={this.state.selectedModel} onChange={e => this.changeModelHandler(e)}>
                        <option disabled value='*'>Select a Model</option>
                        {this.genModelOptions()}
                    </select>
                    <label>New: </label>
                    <select value={this.state.selectedYearsNew} onChange={e => this.changeYearsHandler(e)}>
                        <option disabled value='*'>Select a Year - New</option>
                        {this.genYearsNewOptions()}
                    </select>
                    <label>Used: </label>
                    <select value={this.state.selectedYearsUsed} onChange={e => this.changeYearsHandler(e)}>
                        <option disabled value='*'>Select a Year - Used</option>
                        {this.genYearsUsedOptions()}
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
