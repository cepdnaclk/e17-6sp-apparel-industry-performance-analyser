import React from 'react';
import './App.css';

import KpiVsTime from './components/graphs/kpi/KpiVsTime';


function App() {


  return (
    <div className = "test-graph">
      <KpiVsTime xData={['jan','feb','mar','apr']} yData={['1','7','3','5']} title = {"On time delivery rate"}/>
    </div>
  );
}

export default App;
