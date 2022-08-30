import './App.css';
import Navbar from './Section/Navbar/Navbar'
import Profile from './Section/Profile/Profile';
import Education from './Section/Education/Education';
import Footer from './Section/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
