import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, PrivacyPolicy } from "./components";

const Home = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
    <footer className='relative z-10 text-center pb-8'>
      <Link
        to='/privacy-policy'
        className='text-secondary hover:text-white text-[14px] uppercase tracking-wider'
      >
        Privacy Policy
      </Link>
    </footer>
  </div>
);

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
