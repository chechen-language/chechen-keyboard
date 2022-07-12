import './App.css';
import 'ui-neumorphism/dist/index.css'
import { Hero } from './components/hero';
import { Header } from './components/header';
import { Main } from './components/abat';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
    </>
  );
}

export default App;
