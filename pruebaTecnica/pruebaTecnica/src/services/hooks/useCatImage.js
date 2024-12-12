import { useState, useEffect } from 'react';

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat';

export function useCatImage({fact}) {
    const [image, setImageUrl] = useState('');
    useEffect(() => {
        if (!fact) return;
        
        const threeFirstWord = fact.split(' ', 3).join(' ');
        const encodedFact = encodeURIComponent(threeFirstWord);
        fetch(`${CAT_ENDPOINT_IMAGE_URL}/says/${encodedFact}?fontSize=50&fontColor=white`)
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            });
    }, [fact]);
    return { image };
}