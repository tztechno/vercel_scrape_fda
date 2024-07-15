import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const url = 'https://www.fda.gov/drugs/guidances-drugs/newly-added-guidance-documents';
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            const data = $('table.table-striped tr').slice(1).map((index, element) => {
                const cells = $(element).find('th, td');
                return {
                    topic: $(cells[0]).text().trim(),
                    guidance: $(cells[1]).text().trim(),
                    status: $(cells[2]).text().trim(),
                    date: $(cells[3]).text().trim(),
                };
            }).get();

            res.status(200).json(data);
        } catch (error) {
            console.error('Error scraping data:', error);
            res.status(500).json({ error: 'Error scraping data' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}