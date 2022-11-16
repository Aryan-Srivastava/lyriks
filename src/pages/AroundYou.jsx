import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  // console.log(country);

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_DKbYQjYuCgDnIuFVfwS4e8C6z8FoX&ipAddress=8.8.8.8')
      .then((res) => setCountry(res?.data?.location?.country))
      // .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) {
    return <Loader />;
  }

  if (error && country) {
    return <Error />;
  }
  return (
    <div className="dlex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4 ">
        Around You
        {/* <span className="text-black"> {country}</span> */}
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
