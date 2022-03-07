import React from 'react';
import './App.css';

import Dashboard from "./components/Dashboard";

function App() {


  return (

    <div className = "App">
      <Dashboard />
    </div>
    
    // <div className = "test-graph">
    //   <KpiVsTime xData={['jan','feb','mar','apr']} yData={['1','7','3','5']} title = {"On time delivery rate"}/>
    // </div>
  );
}

export default App;
