import Heading from "components/sections/Heading/Heading";
import "./App.scss";
import Header from "components/sections/Header/Header";
import Partners from "components/sections/Partners/Partners";
import Testimonial from "components/sections/Testimotional/Testimonial";

const App = () => {
  return (
    <main>
      <Header />
      <Heading />
      <Partners />
      <Testimonial
        summury="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
        fullname=" Sarah Johnson"
        position="TechSavvy Solutions"
      />
    </main>
  );
};

export default App;
