import React from 'react';
import { container, Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store'

import AppNavbar from './components/AppNavbar';
import Posts from './components/Posts';
import PostModal from './components/postModal'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <PostModal />
            <Posts />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
