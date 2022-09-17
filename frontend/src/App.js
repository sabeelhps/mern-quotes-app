import React,{Fragment} from 'react';
import AllQuotes from './pages/AllQuotes';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/allquotes" element={<AllQuotes/>} />
      </Routes>
    </Fragment>
  )
}

export default App
