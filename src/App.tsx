import './app.scss';
import Filters from '~/components/aside/Filters';
import Card from '~/components/main/Card';
import cardsInner from "~/helpers/cardsDataInner.json";

import { useState, useEffect } from 'react'
import { supabase, TData } from '~/utils/supabaseClient';

export default function App() {
  let [cards, setCards] = useState<TData[]>([]);
  let [error, setError] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    let { data, error } = await supabase
      .from('Workout')
      .select('*');

    if (error) {
      setError(error.message)
    } else if (data) {
      setCards(data as TData[])
    }
  }

  const setInnerData = () => {
    setCards(cardsInner as TData[]);
    setError('');
  }

  return (
    <div className="container__main">
      <Filters />
      {error
        ? <IfError error={error} setInnerData={setInnerData} />
        : <div className="container__cards container">
          <>{
            cards.map(card => <Card card={card} key={card.id.toString()} />)
          }</>
        </div>
      }
    </div>
  )
}

interface IProps {
  error: string,
  setInnerData: () => void
}
function IfError({ error, setInnerData }: IProps) {
  return (
    <div className="container">
      <div>
        <b>Error type:</b> {error}
      </div>
      <br />
      <div>
        Якщо ви побачили цю помилку, то скоріш за все безкоштовна версія supabase призупинила свою роботу.
      </div>
      <div>
        Але ви можете подивитись варіант з json файлу
      </div>
      <button onClick={setInnerData}>Завантажити</button>
    </div>
  )
}
