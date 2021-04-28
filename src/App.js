
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header/Header'
import HomePage from './pages/HomePage/HomePage';
import FooterTop from './components/FirstPage/Footer/FooterTop'
import FooterBottom from './components/FirstPage/Footer/FooterBottom'
import SinglePage from './pages/SinglePage/SinglePage';
import TopPage from './pages/TopPage/TopPage'
import FormPage from './pages/FormPage/FormPage'
import ChartPage from './pages/ChartPage/ChartPage'
import Form from './pages/Form/Form'

function App() {
  return (
    <Router>
      <div className="App">

      </div>

      <Header/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/single" component={SinglePage}/>
        <Route path="/top" component={TopPage}/>
        <Route path="/form" component={FormPage}/>
        <Route path="/charPage" component={ChartPage}/>
        <Route path="/formpage" component={Form}/>
      </Switch>
      <FooterTop/>
      <FooterBottom/>


    </Router>
  );
}

export default App;
