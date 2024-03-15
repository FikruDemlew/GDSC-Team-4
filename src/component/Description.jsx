import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';

const Description = () => {
  const { id } = useParams();
  const [allMovies, setAllMovies] =useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const api_key = "api_key=73b58a9360afb9413bd12ff78914ed79";
  const all_movie_api_reference = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&${api_key}`; 
  const popular_api_reference = `https://api.themoviedb.org/3/movie/popular?${api_key}&language=en-US`;
  const top_Rated_api_reference = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=en-US`;
  
  useEffect(() => {
    fetch(all_movie_api_reference)
    .then((res) => res.json())
    .then((data) => {
      setAllMovies(data.results);
    })
    .catch((error) => {
      console.error("Failed to fetch data:", error);
    });
    fetch(popular_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });

    fetch(top_Rated_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);
  const mergedMovies = [...allMovies, ...popular,...topRated];
  const uniqueMovies = mergedMovies.reduce((unique, movie) => {
    if (!unique.find(item => item.id === movie.id)) {
      unique.push(movie);
    }
    return unique;
  }, []);
  return (
    <div className='h-screen'>
      <div >
        {uniqueMovies.map((movieResult) => (
          movieResult.id.toString() === id ? <Card key={movieResult.id} movie={movieResult} showDescription={true} /> : null
        ))}
      </div>
    </div>
  );
};

export default Description;
