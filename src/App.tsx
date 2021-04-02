import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment: any = useRef(null);

  const handleStart = () => {
    setIsActive(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 10)
  }

  const handlePause = () => {
    setIsActive(false)
    clearInterval(increment.current)
  }

  const handleResume = () => {
    setIsActive(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 10)
  }

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setTimer(0);
  }

  console.log("timer", timer);
  const formatTime = () => {
    const centiSeconds = `0${timer % 100}`.slice(-2)
    const seconds = `0${Math.floor(timer / 100) % 60}`.slice(-2)
    const minutes = `0${Math.floor(timer / 6000 % 60)}`.slice(-2)

    return `${minutes} : ${seconds} : ${centiSeconds}`
  }

  const renderingBtn = () => {
    if (!isActive && timer === 0) {
      return (
        <button onClick = {handleStart}>Start</button>
      )
    } else if (!isActive && timer > 0) {
      return (
        <>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button>
        </>
      )
    }

    return (
      <>
        <button onClick={handlePause}>Pause</button>
      </>
    )
  }

  return (
    <div className="App">
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {formatTime()}
        </div>
        {renderingBtn()}
      </div>
    </div>
  )
}

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

export default App;
