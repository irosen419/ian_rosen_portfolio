import Intro from './Components/Intro'
import Works from './Containers/Works'
import About from './Containers/About'
import Social from './Components/Social'
import VideoBlogs from './Containers/VideoBlogs'
import './App.scss';

function App() {

  return (
    <div className="App">
      <Intro />
      <About />
      <Works />
      <Social />
      <VideoBlogs />
    </div>
  );
}

export default App;
