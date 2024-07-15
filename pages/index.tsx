import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

interface GuidanceData {
    topic: string;
    guidance: string;
    status: string;
    date: string;
}

export default function Home() {
    const [guidanceData, setGuidanceData] = useState<GuidanceData[]>([]);

    const scrapeData = async () => {
        try {
            const response = await fetch('/api/scrape');
            const data = await response.json();
            setGuidanceData(data);
        } catch (error) {
            console.error('Error fetching scraped data:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>FDA Guidance Documents</h1>
            <button className={styles.scrapeButton} onClick={scrapeData}>Scrape Data</button>           
            <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Guidance</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {guidanceData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.topic}</td>
                            <td>{row.guidance}</td>
                            <td>{row.status}</td>
                            <td>{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}