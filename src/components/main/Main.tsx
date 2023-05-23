import { useState, useEffect } from 'react'
import { supabase, TData } from '~/utils/supabaseClient';
import cardsInner from "~/helpers/cardsDataInner.json";

import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

export default function Main() {
    let [cards, setCards] = useState<TData[]>([]);
    let [error, setError] = useState<string>('');

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        let { data, error } = await supabase
            .from('Workout12')
            .select('*');

        if (error) {
            setError(error.message)
        } else if (data) {
            setCards(data as TData[])
        }
    }
    const setInnerData = () => {
        setCards(cardsInner as TData[])
        setError('')
    }
    if (error) {
        return (
            <IfError error={error} setInnerData={setInnerData} />
        )
    }
    return (
        <motion.div layout className="container__cards container">
            <AnimatePresence>{
                cards.map(card => <Card card={card} key={card.id.toString()} />)
            }</AnimatePresence>
        </motion.div>
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