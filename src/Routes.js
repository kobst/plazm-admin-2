import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import SearchForm from './components/SearchForm';
import EditDetailsPage from './components/EditDetailsPage';

const RoutesMap = () => (

    <Router>
    <Routes>
    <Route exact path="/" element={ <SearchForm/> }/>
    <Route exact path="/place/:id" element={ <EditDetailsPage/> }/>
    <Route path="/*" element={ <SearchForm/> } />
    </Routes>
     



  </Router>

)

export default RoutesMap