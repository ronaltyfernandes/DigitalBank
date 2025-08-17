import Header from './sections/Header';
import './styles/App.css';
import Welcome from './sections/Welcome';
import WhyChose from './sections/WhyChose';
import Articles from './sections/Articles';
import Footer from './sections/Footer';
import HeaderDesktop from './sections/HeaderDesktop';

function App() {
  return (
    <>
      <Header />
      <HeaderDesktop />
      <Welcome />
      <WhyChose />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
