import Heading from "components/sections/Heading/Heading";
import "./App.scss";
import Header from "components/sections/Header/Header";
import Partners from "components/sections/Partners/Partners";
import Testimonial from "components/sections/Testimotional/Testimonial";
import Features from "components/sections/Features/Features";
import Video from "components/sections/Video/Video";
import Pricing from "components/sections/Pricing/Pricing";
import FAQ from "components/sections/FAQ/FAQ";
import CTA from "components/sections/CTA/CTA";
import PrivatePolicy from "components/sections/PrivatePolicy/PrivatePolicy";
import Footer from "components/sections/Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Heading />
      <Partners />
      <Testimonial
        summary="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
      <Features />
      <Testimonial
        summary="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
      <Video />
      <Testimonial
        summary="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
      <Pricing />
      <Testimonial
        summary="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
      <FAQ />
      <Testimonial
        summary="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
      <CTA />
      <Footer />
      <PrivatePolicy />
    </main>
  );
};

export default App;
