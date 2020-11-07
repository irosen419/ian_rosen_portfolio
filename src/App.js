import Intro from './Components/Intro'
import Works from './Containers/Works'
import About from './Containers/About'
// import Footer from './Components/Footer'
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'
import './App.scss';

function App() {

  return (
    <div className="App">
      <Intro />
      <About />
      <Works />
      {/* <Footer /> */}
      <div id="social">
        <a href="https://www.linkedin.com/in/irosen419/" target="_blank" rel="noreferrer"><FaIcons.FaLinkedin /></a>
        <a href="https://github.com/irosen419" target="_blank" rel="noreferrer"><FaIcons.FaGithub /></a>
        <a href="https://medium.com/@irosen419" target="_blank" rel="noreferrer"><FaIcons.FaMedium /></a>
        <a href="https://twitter.com/irosen419" target="_blank" rel="noreferrer"><FaIcons.FaTwitter /></a>
        <a href="mailto:irosen419@gmail.com" target="_blank" rel="noreferrer"><CgIcons.CgMail /></a>
      </div>
    </div>
  );
}

export default App;
