import Header from './components/header';
import NavBar from './components/NavBar.jsx';
import AboutMe from './components/aboutMe';
import Qualifications from './components/qualifications';
import Footer from './components/footer';

function App() {
  return (
    <main>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Qualifications/>
      <Footer/>
    </main>
  );
}

export default App;
