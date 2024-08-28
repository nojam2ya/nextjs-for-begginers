import Link from 'next/link';
import styles from '../../styles/home.module.css';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

async function getMovies(): Promise<
  {
    adult: false;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
  }[]
> {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
