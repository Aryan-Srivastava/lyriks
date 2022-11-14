import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTracksQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="dlex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4 ">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
