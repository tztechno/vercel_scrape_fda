import { useState } from 'react';

const Home = () => {
    const [number, setNumber] = useState<number | undefined>(undefined);
    const [result, setResult] = useState<string>('');

    const checkNumber = async () => {
        if (number !== undefined) {
            const response = await fetch('/api/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value: number })
            });
            const data = await response.json();
            setResult(`Lucas Number: ${data.result}, Calculation Time: ${data.duration.toFixed(6)} seconds`);
        }
    };

    return (
        <div>
            <h1>Lucas Number</h1>
            <input
                type="number"
                value={number !== undefined ? number : ''}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                placeholder="Enter a number"
            />
            <button onClick={checkNumber}>Check</button>
            <p id="result">{result}</p>
        </div>
    );
};

export default Home;
