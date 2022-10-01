import './App.css';
import { Component } from 'react';
import $ from 'jquery';
import Navigation from './components/nav';
import Home from './components/home';
import Footer from './components/footer';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data.results);
      }
    });
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
