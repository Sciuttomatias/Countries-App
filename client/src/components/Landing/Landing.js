import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="container">
      <h1>Henry Countries</h1>
        <Link to="/countries">
            <button className="btn-landing" type="button">Home</button>
        </Link>

    </div>
  );
}

export default Landing;