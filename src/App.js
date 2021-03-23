import './App.css';
import Greeter from './components/Greeter';
import Timestamp from './components/Timestamp';

const spiceGirls = [
  'Melanie',
  'Emma',
  'Mel B',
  'Geri',
  'Victoria'
]

function App() {
  return (
    <div className="App">
      <Timestamp />
    <h1 class="greeting">Hello React!</h1>
    {
      spiceGirls.map((girl, index) => {
        return <Greeter name={girl} key={index} />
      })
    }
    </div>
  );
}

export default App;

