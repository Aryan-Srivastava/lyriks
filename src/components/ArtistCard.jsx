import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm amimate-slidup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${artist?.artists[0].adamid}`)}
    >
      <img
        src={artist?.images?.background}
        alt={artist?.artist?.name}
        className="rounded-lg w-full h-56"
      />
      <p className="text-white font-semibold text-center mt-4 truncate">{artist?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
