import { BrowserRouter } from "react-router-dom";
import { About, Contact, ContactDirectly, Experience, Certificates, Feedbacks, Hero, Navbar, Tech, Works, Footer, StarsCanvas } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Certificates />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <ContactDirectly />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
