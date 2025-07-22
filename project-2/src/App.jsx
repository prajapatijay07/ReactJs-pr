import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="app-wrapper">
      <div className="glass-box gradient-border light-sweep">
        <Counter name="Counter App" />
      </div>

      
      <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="particle" style={{ left: '30%', animationDelay: '2s' }}></div>
      <div className="particle" style={{ left: '50%', animationDelay: '4s' }}></div>
      <div className="particle" style={{ left: '70%', animationDelay: '1s' }}></div>
      <div className="particle" style={{ left: '90%', animationDelay: '3s' }}></div>
    </div>
  );
}

export default App;