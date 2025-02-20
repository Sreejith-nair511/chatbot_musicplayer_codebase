// components/MusicPlayer/Playlist.jsx
const Playlist = ({ tracks, currentTrackIndex, onTrackSelect }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 max-h-96 overflow-y-auto">
        <h2 className="font-semibold mb-4">Playlist</h2>
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => onTrackSelect(index)}
              className={`w-full flex items-center p-2 rounded hover:bg-gray-100 ${
                currentTrackIndex === index ? 'bg-gray-100' : ''
              }`}
            >
              <img
                src={track.coverArt}
                alt={track.title}
                className="w-10 h-10 rounded mr-3"
              />
              <div className="text-left">
                <div className="font-medium">{track.title}</div>
                <div className="text-sm text-gray-600">{track.artist}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Playlist;