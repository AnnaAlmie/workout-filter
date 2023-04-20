import { useState, useEffect } from 'react'
import { supabase, TData } from '../utils/supabaseClient';
import cardsInner from "../helpers/cardsDataInner.json"

import Card from './card';
import { motion, AnimatePresence } from 'framer-motion';

export default function getCards() {
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
    function setInnerData() {
        setCards(cardsInner as TData[])
        setError('')
    }
    if (error) {
        {/* TODO: move to child component */ }
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
    return (
        <motion.div layout className="container__cards container">
            <AnimatePresence>{
                cards.map(card => <Card card={card} key={card.id.toString()} />)
            }</AnimatePresence>
        </motion.div>
    )
}