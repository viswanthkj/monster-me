import React, { Component } from 'react';
import { CardList }  from './components/card-list-components/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(users => this.setState({ monsters: users}))
  }
  render() {
  const {monsters,searchField } = this.state;
  const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <input type='search' placeholder='search-monster' 
      onChange={e => this.setState({ searchField:e.target.value })}/>
      <CardList monsters={filterMonster} />
    </div>
  );
  }
}

export default App;
