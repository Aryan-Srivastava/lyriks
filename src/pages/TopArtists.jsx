import { ArtistCard, Error, Loader } from '../components';
import { useGetTracksQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTracksQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  const topArtists = data?.slice(0, 30);

  return (
    <div className="dlex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4 ">
        Top Aritst
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {topArtists?.map((artist) => (
          <ArtistCard
            key={artist.key}
            track={artist}
            artist={artist}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
