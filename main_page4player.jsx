// app/page.jsx
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';

export default function Home() {
  return (
    <main className="min-h-screen p-8 pb-32"> {/* Added padding bottom for player */}
      <h1 className="text-4xl font-bold mb-4">My Music App</h1>
      <p className="mb-4">Welcome to your music player!</p>
      
      {/* Music player will be fixed at the bottom of the page */}
      <MusicPlayer />
    </main>
  );
}