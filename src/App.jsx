import Header from './components/header';
import AboutMe from './components/aboutMe';
import Qualifications from './components/qualifications';
import Footer from './components/footer';
import NavBar from './components/MainNav';

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
