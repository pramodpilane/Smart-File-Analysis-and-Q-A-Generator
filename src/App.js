import './App.css';
import * as React from 'react';
import Header from './Header&Footer/Header';
import Upload_file from './Module1/upload_file';
import About from './Module1/about';
import Module2 from './Module2/Module2';
import Quiz from './Module2/Quiz';
import QuizResult from './Module2/QuizResult';
import Faq from './FAQ/Faq';
import Footer from './Header&Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  return (
  <>
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Upload_file selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/prompt" element={<Module2 />} />
          <Route exact path="/prompt/faq" element={<Faq />} />
          <Route exact path="/prompt/quiz" element={<Quiz />} />
          <Route exact path="/prompt/quiz/quizResult" element={<QuizResult />} />
         </Routes>
        {/* <Footer color={color} /> */}
    </Router>
  </>
  );
}

export default App;