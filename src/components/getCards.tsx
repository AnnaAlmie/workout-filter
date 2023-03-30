import { useState, useEffect, SetStateAction } from 'react'
import { supabase } from '../utils/supabaseClient';
import Card from './card'

interface IVideos {
    id: number;
    author: string;
    level: number;
    title: string;
    type: number;
    url: string;
};

export default function getCards() {
    let [cards, setCards] = useState<IVideos[]>([]);
    let [error, setError] = useState<string | null | undefined>(null);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        let { data, error } = await supabase
            .from('Workout')
            .select('*');

        if (data != null) {
            setCards(data);
        } else {
            setError(error?.message)
        }
    }

    if (error) {
        return (
            <div><b>Error type:</b> {error}</div>
        )
    }
    return (
        <div className="conteiner__cards">
            {
                cards.map(card => <Card card={card} key={card.id.toString()} />)
            }
        </div>
    )
}