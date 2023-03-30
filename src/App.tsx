import './App.css';
import Filters from './components/Filters';
import GetCards from './components/getCards';

export default function App() {

  return (
    <div className="container__main">
      <Filters />
      <GetCards />
    </div>
  )
}


