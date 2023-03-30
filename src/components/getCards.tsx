import { useState, useEffect, SetStateAction } from 'react'
import { supabase } from '../utils/supabaseClient';
import Card from './card'

type Videos = {
    id: number;
    author: string;
    level: number;
    title: string;
    type: number;
    url: string;
};

export default function gatCards() {
    let [cards, setCards] = useState<any[]>([]);
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
                cards.map(card => {
                    return <>
                        <Card card={card} key={card.id} />
                    </>
                })
            }
        </div>
    )
}