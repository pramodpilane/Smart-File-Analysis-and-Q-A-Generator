import './App.css';
import * as React from 'react';
import Header from './Header&Footer/Header';
import Upload_file from './Module1/upload_file';
import About from './Module1/about';
import Module2 from './Module2/Module2';
import Footer from './Header&Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [color, setColor] = React.useState('primary');
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  return (
  <>
    <Router>
      <div>
        <Header color={color} setColor={setColor} />
        <Routes>
          <Route exact path="/" element={<Upload_file selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/prompt" element={<Module2 />} />
        </Routes>
        <Footer color={color} />
      </div>
    </Router>
  </>
  );
}

export default App;


