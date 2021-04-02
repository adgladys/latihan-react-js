"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var App = function () {
    var _a = react_1.useState(0), timer = _a[0], setTimer = _a[1];
    var _b = react_1.useState(false), isActive = _b[0], setIsActive = _b[1];
    var increment = react_1.useRef(null);
    var handleStart = function () {
        setIsActive(true);
        increment.current = setInterval(function () {
            setTimer(function (timer) { return timer + 1; });
        }, 10);
    };
    var handlePause = function () {
        setIsActive(false);
        clearInterval(increment.current);
    };
    var handleResume = function () {
        setIsActive(true);
        increment.current = setInterval(function () {
            setTimer(function (timer) { return timer + 1; });
        }, 10);
    };
    var handleReset = function () {
        clearInterval(increment.current);
        setIsActive(false);
        setTimer(0);
    };
    console.log("timer", timer);
    var formatTime = function () {
        var centiSeconds = ("0" + timer % 100).slice(-2);
        var seconds = ("0" + Math.floor(timer / 100) % 60).slice(-2);
        var minutes = ("0" + Math.floor(timer / 6000 % 60)).slice(-2);
        return minutes + " : " + seconds + " : " + centiSeconds;
    };
    var renderingBtn = function () {
        if (!isActive && timer === 0) {
            return (react_1["default"].createElement("button", { onClick: handleStart }, "Start"));
        }
        else if (!isActive && timer > 0) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("button", { onClick: handleResume }, "Resume"),
                react_1["default"].createElement("button", { onClick: handleReset }, "Reset")));
        }
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("button", { onClick: handlePause }, "Pause")));
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "Stopwatch" },
            react_1["default"].createElement("div", { className: "Stopwatch-header" }, "Stopwatch"),
            react_1["default"].createElement("div", { className: "Stopwatch-display" }, formatTime()),
            renderingBtn())));
};
//week 8
// interface IAppState {
//   fullname: string;
//   age: string;
// }
// class App extends React.Component<{}, IAppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: '',
//       age: '',
//     }
//   }
//   handleBtnClick = () => {
//     alert(`${this.state.fullname} ${this.state.age}`)
//   }
//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {name} = event.target;
//     const {value} = event.target;
//     const newState = {...this.state};
//     newState[name] = value;
//     this.setState(newState);
//   }
//   public render() {
//     return (
//       <div className = "App">
//         <header className = "App-header">
//           <img src={logo} className = "App-logo" alt= "logo" />
//           <form>
//             <input name= "fullname" value={this.state.fullname} placeholder="type fullname here" onChange={this.handleChange} />
//             <br/>
//             <input name="age" value={this.state.age} placeholder="type age here" onChange={this.handleChange} />
//             <br/>
//             <button type="button" onClick={this.handleBtnClick}>SAVE</button>
//           </form>
//         </header>
//       </div>
//     )
//   }
// }
//week 7
// interface IData {
//   id: string;
//   name: string;
//   email: string;
// }
// interface IAppState {
//   showTable: boolean;
// }
// interface IAppProps {
//   data: IData[]
// }
// class App extends React.Component<IAppProps, IAppState>{
//   constructor(props) {
//     super(props);
//     this.state = {
//       showTable: true,
//     }
//   }
//   componentDidMount() {
//     alert("did mount App component !")
//   }
//   componentWillUnmount() {
//     alert("unmounting App component !")
//   }
//   componentDidUpdate(){
//     alert("did update called !")
//   }
//   public toggleShowTable = () => {
//     const {showTable} = this.state;
//     this.setState({showTable: !showTable});
//   };
//   public renderRow = () => {
//     return this.props.data.map((item) => {
//       return (
//         <tr>
//           <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         </tr>
//       )
//     })
//   }
//   public renderTable = () => {
//     if (this.state.showTable) {
//       return (
//         <table className = "table">
//           <thead>
//             <tr>
//               <td>id</td>
//               <td>name</td>
//               <td>email</td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.renderRow()}
//           </tbody>
//         </table>
//       )
//     }
//   }
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {this.renderTable()}
//           <button onClick={this.toggleShowTable}>test</button>
//         </header>
//       </div>
//     );
//   };
// };
exports["default"] = App;
