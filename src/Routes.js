import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import SearchForm from './components/SearchForm';
import DetailsPage from './components/DetailsPage';

const RoutesMap = () => (

    <Router>
    <Routes>
    <Route exact path="/" element={ <SearchForm/> }/>
    <Route exact path="/place/:id" element={ <DetailsPage/> }/>
    <Route path="/*" element={ <SearchForm/> } />
    </Routes>
     



  </Router>

)

export default RoutesMap