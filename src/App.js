
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import  SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className="app">
    <Container>
      <Switch>
        <Route path='/' component={Trending} exact />
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
        <Route path='/search' component={Search}/>
        </Switch> </Container>
    </div>
   
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
