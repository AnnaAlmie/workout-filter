import './app.scss';
import { useState, useEffect, ChangeEvent } from 'react'
import { supabase, TData } from '~/utils/supabaseClient';
import { types, levels } from '~/helpers/filters';
import cardsInner from "~/helpers/cardsDataInner.json";
import Filters from '~/components/aside/Filters';
import Card from '~/components/main/Card';
import IfError from '~/components/main/IfError';


export default function App() {
  let [cards, setCards] = useState<TData[]>([]);
  let [cardsFiltered, setCardsFiltered] = useState<TData[]>([]);
  let [filters, setFilters] = useState<(string | number)[]>([]);
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
      setData(data as TData[])
    }
  }

  const setInnerData = () => {
    setData(cardsInner as TData[]);
    setError('');
  }

  const setData = (dataArray: TData[]) => {
    setCards(dataArray)
    setCardsFiltered(dataArray)
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newFilters = filters;

    if (event.target.checked) {
      newFilters.push(event.target.id)
    } else {
      newFilters = filters.filter(e => e !== event.target.id)
    }
    setFilters(newFilters)

    if (!newFilters.length) {
      setCardsFiltered(cards);
      return
    }

    let filteredArray: TData[] = [];
    newFilters.forEach(filter => {
      cards.filter(item => {
        const indexType = types.indexOf(filter as any);
        if (levels[item.level].level == filter || item.type.includes(indexType)) {
          return filteredArray.push(item)
        }
      })
    })

    setCardsFiltered(Array.from(new Set(filteredArray)));
  }

  return (
    <div className={`container__main ${!!error ? 'error' : ''}`}>
      <Filters handleChange={handleChange} />
      {error
        ? <IfError error={error} setInnerData={setInnerData} />
        : <div className="container__cards container">
          <>{
            (cardsFiltered.length == 0) && !!(filters.length)
              ? <div>No match</div>
              : cardsFiltered.map(card => <Card card={card} key={card.id.toString()} />)
          }</>
        </div>
      }
    </div>
  )
}

