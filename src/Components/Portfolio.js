import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Portfolio.css';
import { NavBar }   from './NavBar';
import { Banner }   from './Banner';
import { Skills }   from './Skills';
import { Projects } from './Projects';
import { Contact }  from './Contact';
import { Footer }   from './Footer';

function Portfolio() {

  return (
    <div className="Portfolio">

        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

    </div>
  );
}

export default Portfolio;