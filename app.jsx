// app/page.js
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="mb-4">This is the main content of your website.</p>
      
      {/* ChatBot will be rendered as a floating element */}
      <ChatBot />
    </main>
  );
}