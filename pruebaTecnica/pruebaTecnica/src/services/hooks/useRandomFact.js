import { useState, useEffect } from 'react';
import { getRandomFact } from '/src/services/fact.js';

export function useRandomFact() {
    const [fact, setFact] = useState('');
    const [factError, setFactError] = useState();

    useEffect(() => {
        getRandomFact().then(newFact => {
            setFact(newFact);
        }).catch(err => {
            setFactError(err);
        });
    }, []);

    const handleClick = async () => {
        try {
            const newFact = await getRandomFact();
            setFact(newFact);
        } catch (err) {
            setFactError(err);
        }
    }

    return { fact, factError, handleClick };
}