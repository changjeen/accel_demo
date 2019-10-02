import React, { Component } from 'react'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    )
  }
}
export default App