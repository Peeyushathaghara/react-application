import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
// import Table from './Table'

class App extends Component {
  state = {
    persons: [
      { name: "Peeyush", age: 25 },
      { name: "Nitesh", age: 26 },
      { name: "Subhankar", age: 27 }
    ],
    showPersons: false,
  }

  switchNames = (name) => {
    // console.log('Was clicked')
    this.setState({
      persons: [
        { name: name, age: 25 },
        { name: "Nitesh", age: 26 },
        { name: "Subhankar", age: 50 }
      ]
    })
  }

  togglePersons = () => {
    const status = this.state.showPersons
    this.setState({ showPersons: !status })
  }

  nameChange = (event) => {
    this.setState({
      persons: [
        { name: "Peeyush", age: 25 },
        { name: event.target.value, age: 26 },
        { name: "Subhankar", age: 50 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className='App'>
        <h1>This is react</h1>
        <p>This is working.</p>
        <p>
          <button
            style={style}
            onClick={this.togglePersons}
          >
            Switch names
          </button>
        </p>
        {
          this.status.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNames.bind(this, 'Peeyush!!!')}
                changed={this.nameChange}
              >
                My Hobbies are : Cricket
            </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div>
            : null
        }

      </div>


      // <Table characters = {characters} / >
    )
  }
}

export default App