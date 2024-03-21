import './App.css';
import * as React from 'react';
import Header from './Header&Footer/Header';
import Upload_file from './Module1/upload_file';
import About from './Module1/about';
import Module2 from './Module2/Module2';
import Faq from './FAQ/Faq';
import Footer from './Header&Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [color, setColor] = React.useState('primary');
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [faq, setFaq] = React.useState();
  const [suggestion, setSuggestion] = React.useState();

  return (
  <>
        <Header color={color} setColor={setColor} />
        <Router>
          <Routes>
            <Route exact path="/" element={<Upload_file selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} setSuggestion={setSuggestion}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/prompt" element={<Module2 setFaq={setFaq} suggestion={suggestion}/>} />
            <Route exact path="/prompt/faq" element={<Faq faq={faq}/>} />
          </Routes>
        </Router>
        <Footer color={color} />
  </>
  );
}

export default App;