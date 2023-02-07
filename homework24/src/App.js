import React,  { Component } from "react";
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

class App extends Component {
  render() {
    const carttonsData = [
      {
      id : 1,
      value : 'The little Mermaide'
      },
      {
      id : 2,
      value : 'Peter Pan'
      },
      {
      id : 3,
      value : 'Mulan'
      },
      {
      id : 4,
      value : 'Alladin'
      },
      {
      id : 5,
      value : 'The aristocats'
      },
      {
      id : 6,
      value : 'Lion King'
      }
    ]
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Navigation participants={carttonsData} />
          <Content />
        </main>
      </div>
    )
  }
}
export default App;
