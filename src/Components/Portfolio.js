import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Portfolio.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skills';

function Portfolio() {

  return (
    <div className="Portfolio">

        <NavBar />
        <Banner />
        <Skills />

    </div>
  );
}

export default Portfolio;