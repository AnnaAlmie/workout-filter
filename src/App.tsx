import './app.scss';
import Aside from '~/components/aside/Aside';
import Main from '~/components/main/Main';

export default function App() {

  return (
    <div className="container__main">
      <Aside />
      <Main />
    </div>
  )
}


