'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BibleBottombar } from '@/components/shared/BibleBottombar';
import BibleHeaderbar from '@/components/shared/BibleHeaderbar';

const ChapterPage = () => {
  const params = useParams() as { book: string; chapter: string };
  const book = decodeURIComponent(params.book);
  const chapter = params.chapter;

  const [chapterContent, setChapterContent] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChapter = async () => {
      if (book && chapter) {
        try {
          const response = await fetch(`/api/books`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("Data fetched:", data);
          const selectedBook = data.find((b: any) => b.name === book);
          if (selectedBook) {
            const chapterNumber = parseInt(chapter, 10);
            if (selectedBook.chapters[chapterNumber - 1]) {
              setChapterContent(selectedBook.chapters[chapterNumber - 1]);
              console.log("Chapter content:", selectedBook.chapters[chapterNumber - 1]);
            } else {
              setError(`Chapter ${chapter} not found in ${book}`);
            }
          } else {
            setError(`Book ${book} not found`);
          }
        } catch (error) {
          console.error('Error fetching chapter:', error);
          setError('Error fetching chapter');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchChapter();
  }, [book, chapter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="bg-white">
        <BibleHeaderbar />
      </div>
      <h1>{book} Chapter {chapter}</h1>
      <div>
        {chapterContent.map((verse, index) => (
          <p key={index}>{verse}</p>
        ))}
      </div>

      <BibleBottombar />
    </div>
  );
};

export default ChapterPage;
