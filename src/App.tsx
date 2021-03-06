import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import Data from './data/data.json';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const mainTitle = Data.data.main.title;
const mainDescription = Data.data.main.text;
const otherTitle = Data.data.other.title;
const otherDescription = Data.data.other.text;

const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ homeUrl + "/" }>
            <Helmet
              title={ mainTitle }
              meta={[
                { name: 'description', content: mainDescription }
              ]}
            />
          </Route>
          <Route path={ homeUrl + "/other" }>
            <Helmet
              title={ otherTitle }
              meta={[
                { name: 'description', content: otherDescription }
              ]}
            />
          </Route>
        </Switch>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
