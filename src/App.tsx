import './App.css'
import { Accordion } from  "./components/Accordion/Accordion";
import { Header } from  "./components/Header/Header";
import { Footer } from  "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header /> 
      <Accordion id={0} />
      <Accordion id={1} />
      <Accordion id={2} />
      <Accordion id={3} />
      <Footer /> 
    </>
  );
}

export default App
