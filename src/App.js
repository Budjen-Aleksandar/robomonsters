/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { CardList } from "../src/components/card-list/card-list.component..jsx";
import { SearchBox } from "../src/components/search-box/search-box.components.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users, search } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          placeholder="Search user: "
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}
export default App;
