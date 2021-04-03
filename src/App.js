import './assets/scss/App.scss';
import Checklist from './components/Checklist';

function App() {
  return (
    <Checklist options={['Eat', 'Sleep', 'Code', 'Repeat']} />
  );
}

export default App;
