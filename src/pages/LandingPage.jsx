import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <h1>Welcome to My App</h1>
      <Link to="/main">
        <button>go to main</button>
      </Link>
    </div>
  );
}

export default LandingPage;
