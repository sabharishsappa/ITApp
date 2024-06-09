import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import ValueComponent from './components/ValueComponent';
import Salary from './components/Salary';
import BusinessAndProfession from './components/BusinessAndProfessions';
import CapitalGains from './components/CapitalGains';
import OtherSources from './components/OtherSources';

function App() {


  return (
    <div className="App">
     
     <ValueComponent/>
     <Salary/>
     <BusinessAndProfession/>
     <CapitalGains/>
     <OtherSources/>
      
    

     

     

     

    </div>
  );
}

export default App;
