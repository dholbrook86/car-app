import React from 'react';
import './App.css';

const DropDown = (props) => {
    if(props.data === "*"){return null}
    if (props.data !== null) {
        let label = props.type.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        let optionsOutput = Object.keys(props.data).map((key)=> {
            let val = props.data[key];
            switch (props.type) {
                case "make":
                    return <option value={val.id} key={key}>{val.name}</option>;
                case "model":
                    return <option value={key} key={key}>{val.name}</option>;
                case "new":
                    return <option value={val} key={key}>{val}</option>;
                case "used":
                    return <option value={val} key={key}>{val}</option>;
                case "styles":
                    return <option value={val.id} key={key}>{key}</option>;
                default:
                    return null;
            }
        });
        return (
            <optgroup label={label}>
                {optionsOutput}
            </optgroup>
        )
    }
};

export default DropDown;

// class DropDown extends Component {
//
//
//
//     componentDidMount() {
//     }
//
//     // genYearsUsedOptions() {
//     //     if (this.props.data !== null) {
//     //         return Object.keys(this.props.data).map((key)=> {
//     //             let val = this.props.data[key];
//     //             switch (this.props.type) {
//     //                 case "make":
//     //                     return <option value={val.id} key={key}>{val.name}</option>;
//     //                 case "model":
//     //                     return <option value={key} key={key}>{val.name}</option>;
//     //                 case "year":
//     //                     return <option value={val} key={key}>{val}</option>;
//     //                 default:
//     //                     return null;
//     //             }
//     //
//     //         });
//     //     }
//     // }
//
//     render() {
//         const options = () => {
//
//         };
//         return (
//             <optgroup>
//                 {options}
//             </optgroup>
//         );
//     }
// }

// DropDown.propTypes = {
//     data: React.PropTypes.object,
//     type: React.PropTypes.string
// };

// export default DropDown;
