import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";


const App = () => {
  return <div>
   <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Service</section>
    <section id="Porfolio">Parallax</section>
    <section>Porfolio1</section>
    <section>Porfolio2</section>
    <section>Porfolio3</section>
    <section id='Contact'>Contact</section>

    
  </div>;
};

export default App;
