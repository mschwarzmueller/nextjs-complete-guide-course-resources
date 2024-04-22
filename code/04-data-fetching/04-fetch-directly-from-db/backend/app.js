import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';

const DUMMY_NEWS = [
  {
    id: 'n1',
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    id: 'n2',
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content:
      'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    id: 'n3',
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content:
      'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    id: 'n4',
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content:
      'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    id: 'n5',
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content:
      'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
];

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

initDb();

app.listen(8080);
