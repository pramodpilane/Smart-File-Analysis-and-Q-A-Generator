import './App.css';
import * as React from 'react';
import Header from './Header&Footer/Header';
import Upload_file from './Module1/upload_file';
import Module2 from './Module2/Module2';
import Module3 from './Module3/Module3';
import Footer from './Header&Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [color, setColor] = React.useState('primary');

  return (
  <>
    <Header color={color} setColor={setColor}/>
    <Router>
        <Routes>
          <Route exact path="/" element={<Upload_file />} />
          <Route exact path="/prompt" element={<Module2 />} />
          <Route exact path="/solution/:question" element={<Module3 />} />
        </Routes>
      </Router>
    <Footer color={color}/>
  </>
  );
}

export default App;
