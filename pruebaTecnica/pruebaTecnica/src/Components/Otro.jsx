import { useCatImage } from '/src/services/hooks/useCatImage.js';
import { useRandomFact } from '/src/services/hooks/useRandomFact.js';

export function Otro() {
    const { fact, handleClick } = useRandomFact();
    const { image } = useCatImage({ fact });

    return (
        <>
            <button onClick={handleClick}>Get random fact</button>
            {image && <img src={image} alt="Image extracted using the three first words from Random fact about cats" />}
        </>
    );
}