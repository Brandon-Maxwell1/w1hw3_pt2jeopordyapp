import React, { useState } from 'react';
// import TriviaInfo from './components/DataFetching';
import './App.css';


function App() {
  return (
    <div id="appContainer">
      <h1>Welcom to Jeopardy!!</h1>
      <Points score="Score: " />
      <div className='incrementButtons'>
        <button type='submit'>Decrease</button>
        <button type='submit'>Increase</button>
        <button type='submit'>Reset</button>
      </div>
      <h3>Let's play!!</h3>
      <TriviaInfo category="Category: " />
      <Points points="Points: " />
      <TriviaInfo answer="Answer: " />
    </div>
  );
}

const TriviaInfo = (props) => {
  console.log(props);
  return (
    <div>
      <h5>{props.answer} </h5>
      <h4>{props.category} </h4>
    </div>
  );
}

const Points = (props) => {
  return (
    <div>
      <h3>{props.score} </h3>
      <h5>{props.points} </h5>
    </div>
  )
}


export default App;



// import React, { Component } from 'react';
// import TriviaDetails from './components/TriviaDetails';



// class App extends Component {

//   state = {
//     randomA: '',
//     answer: '',
//     category: '',
//   }

//   handleSubmitGetA = e => {
//     console.log('handle submit')
//     e.preventDefault()

//     fetch('http://jservice.io/api/random')
//       .then(res => res.json())
//       .then(data => this.setState({ randomAs: data[0] }))
//       .catch(error = console.error('ERROR'))
//   }


//   render() {
//     return (
//       <div id='appContainer'>
//         <h1>Welcome to Jeopordy!</h1>


//         <h3>Let's play!</h3>
//         <button className='getQ' onClick={handleSubmitGetA}>Get Question</button>
//         <h2>Answer: {this.props.answer}</h2>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import TriviaDetails from './components/TriviaDetails';
// import './App.css';



// class App extends Component {
//   state = {
//     // baseURL: 'http://jservice.io/api/random',
//     triviaQuestion: ""
//   }

//   increaseScore = (e) => e++;

//   decreaseScore = (e) => e--


//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }

//   handleSubmitGetA = e => {
//         console.log('handle submit')
//         e.preventDefault()

//         fetch('http://jservice.io/api/random')
//           .then(res => res.json())
//           .then(data => this.setState({ randomA: data[0] }))
//           .catch(error = console.error('ERROR'))
//       }

//   // componentDidMount() {
//   //   console.log('mounted app.js')
//   //   fetch(this.state.baseURL)
//   //     .then(response => response.json())
//   //     .then(data => this.setState({ triviaQuestion: data.pop() }))
//   //     .catch(error => console.error(error))
//   // }

//   render() {
//     const { question, answer, value } = this.state.triviaQuestion
//     return (
//       <div id='appContainer'>
//         <h1>Welcome to Jeopardy</h1>
//         <h2>Score: </h2>
//         <div className="buttons">
//           <button type="submit" onClick="decreaseScore()">Decrease</button>
//           <button>Increase</button>
//           <button>Reset</button>
//         </div>
//         <h2>Let's Play!</h2>
//         <button type="submit" onClick="handleSubmitGetA()">Get Question</button>
//         <h2>Category: {this.state.triviaQuestion.category?.title} </h2>
//         <h3>Points: {value} </h3>
//         <div>
//           <h3>Answer: {question} </h3>
//         </div>

//         <button>Click To Reveal Question</button>
//         <h1>Alec, {answer}</h1>
//       </div>
//     );
//   }
// }

// export default App;






