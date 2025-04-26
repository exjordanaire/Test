'use client'; // make sure this is at the top if it's not already
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("home"); // State for active tab
  const [input, setInput] = useState(""); // State for calculator input
  const [hotDogVisible, setHotDogVisible] = useState(false); // State for showing the hot dog image
  const [currentHotDog, setCurrentHotDog] = useState(""); // State for the current hot dog image
  const fartSoundRef = useRef<HTMLAudioElement>(null);

  // Array of hot dog images/GIFs
  const hotDogImages = [
    "/hotdog.gif",
    "/hotdog2.gif",
    "/hotdog3.gif",
    "/hotdog4.gif",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const playFartSound = () => {
    if (fartSoundRef.current) {
      fartSoundRef.current.play();
    }
  };

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      // Always show a random hot dog image regardless of the calculation
      const randomHotDog = hotDogImages[Math.floor(Math.random() * hotDogImages.length)];
      setCurrentHotDog(randomHotDog);
      setHotDogVisible(true);
      setInput(""); // Clear the input
    } else if (value === "C") {
      setInput(""); // Clear the input
      setHotDogVisible(false); // Hide the hot dog image
    } else {
      setInput((prev) => prev + value); // Append the value to the input
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const validKeys = "0123456789+-*/.=C";
    if (e.key === "Enter") {
      handleButtonClick("="); // Map "Enter" to "="
    } else if (validKeys.includes(e.key)) {
      handleButtonClick(e.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Reset hot dog visibility when switching tabs
  useEffect(() => {
    if (activeTab !== "hotdogs") {
      setHotDogVisible(false);
    }
  }, [activeTab]);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, #00f0ff, #000)`,
        minHeight: '100vh',
        transition: 'background 0.1s ease',
      }}
      className="flex flex-col"
    >
      {/* Add the audio element */}
      <audio ref={fartSoundRef} src="/cooked.mp3" preload="auto"></audio>

      {/* Navigation Tabs */}
      <nav
        className="flex justify-center gap-4 p-4 bg-gray-800 text-white fixed top-0 left-0 w-full z-50"
      >
        <button
          onClick={() => setActiveTab("home")}
          className={`px-4 py-2 rounded ${activeTab === "home" ? "bg-blue-500" : "bg-gray-700"}`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab("hotdogs")}
          className={`px-4 py-2 rounded ${activeTab === "hotdogs" ? "bg-blue-500" : "bg-gray-700"}`}
        >
          Calculator
        </button>
      </nav>

      {/* Add padding to prevent content from being hidden behind the fixed nav */}
      <div className="pt-16">
        {/* Tab Content */}
        {activeTab === "home" && (
          <div>
            {/* Your existing page content */}
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold text-center sm:text-left text-white">
                    Welcome to my ass
                  </h1>
                  <Image
                    className="dark:invert"
                    src="/giphy.gif"
                    alt="Next.js logo"
                    width={360}
                    height={45}
                    priority
                  />
                </div>

                <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                  <li className="mb-2 tracking-[-.01em]">
                    Eat my ass{" "}
                    <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                      julie
                    </code>
                    .
                  </li>
                  <li className="tracking-[-.01em]">
                    Save and see my ass instantly.
                  </li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  {/* Updated "Deploy ass now" button */}
                  <button
                    onClick={playFartSound} // Trigger the fart sound
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  >
                    <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={20}
                      height={20}
                    />
                    Deploy ass now
                  </button>
                  <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                    href="https://www.youtube.com/watch?v=vR2HB-IavGc&ab_channel=NormcoreBoyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Ass
                  </a>
                </div>
              </main>
              <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://giphy.com/gifs/nicki-minaj-anaconda-iQ6yGuMhPGWhW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  Learn about ass
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://giphy.com/gifs/booty-twerk-spongebob-squarepants-DqhwoR9RHm3EA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  Examples of ass
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://giphy.com/gifs/dance-cartoons-random-k2EPtdfPkjIw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Go to ass town →
                </a>
              </footer>
            </div>
          </div>
        )}

{activeTab === "hotdogs" && (
          <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-3xl font-bold">Lol</h1>
            <p className="mt-4 text-lg">A calculator...but with a twist!</p>
            <div className="flex flex-col items-center gap-4 mt-4">
              {/* Calculator Display */}
              <div className="w-64 p-4 bg-gray-800 text-white text-right rounded">
                {input || "0"}
              </div>

              {/* Calculator Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map(
                  (button) => (
                    <button
                      key={button}
                      onClick={() => handleButtonClick(button)}
                      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                      {button}
                    </button>
                  )
                )}
              </div>

              {/* Hot Dog Image */}
              {hotDogVisible && (
                <Image
                  src={currentHotDog}
                  alt="Hot Dog"
                  width={300}
                  height={200}
                  className="mt-4"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}