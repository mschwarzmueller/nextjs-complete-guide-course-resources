import db from './db';

export function getTrainings() {
  const stmt = db.prepare('SELECT * FROM trainings');
  return stmt.all();
}
