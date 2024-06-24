// pages/api/books.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const getBookData = async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'books.json');
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      throw new Error(`File not found: ${filePath}`);
    }

    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    console.log("File contents read successfully:", fileContents.slice(0, 200)); // Log first 200 chars

    try {
      const jsonData = JSON.parse(fileContents);
      console.log("JSON parsed successfully");
      return jsonData;
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      throw new Error(`Error parsing JSON: ${parseError}`);
    }

  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    throw new Error('Error reading or parsing JSON file');
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const booksData = await getBookData();
    res.status(200).json(booksData);
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: error });
  }
};
