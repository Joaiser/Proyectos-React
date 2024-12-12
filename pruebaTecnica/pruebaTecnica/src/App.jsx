import { useRandomFact } from '/src/services/hooks/useRandomFact.js';
import { useCatImage } from '/src/services/hooks/useCatImage.js';
import '/App.css';
import { Otro } from '/src/Components/Otro.jsx';

export function App() {
    const { fact, factError, handleClick } = useRandomFact();
    const { image: factImage } = useCatImage({ fact });

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get random fact</button>
            {factError && <p>Error: {factError.message}</p>}
            {fact && <p>{fact}</p>}
            {factImage && <img src={factImage} alt="Image extracted using the three first words from Random fact about cats" />}
            <Otro fact={fact} />
        </main>
    );
}
     /* useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);

                const threeFirstWord = fact.split(' ', 3).join(' ');

                fetch(`${CAT_ENDPOINT_IMAGE_URL}/cat/says/${threeFirstWord}?fontSize=50&fontColor=white`)
                    .then(res => res.blob())
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        setImageUrl(url);
                    });
            });
}, []);*/   //ASI ES SOLO CON UN USEEFFECT