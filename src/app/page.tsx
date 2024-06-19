"use client";
import React, { useState, useEffect } from "react";
import PhotoGrid from "@/components/PhotoGrid";

interface Photo {
  title: string;
  link: string;
  media: { m: string };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("http://localhost:8000/api/photos");
      const data = await response.json();
      setPhotos(data.items);
      console.log("Photos fetched:", data.items);
    };
    fetchPhotos();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:8000/api/photos?tags=${query}`
    );
    const data = await response.json();
    setPhotos(data.items);
    console.log("Photos fetched:", data.items);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Flicker feed viewer
        </p>
      </div>

      <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-center lg:text-left lg:text-5xl">
            Welcome to the Flicker feed viewer
          </h1>
          <p className="mt-4 text-lg text-center lg:text-left lg:text-xl">
            This is a simple web application that fetches photos from the
            Flicker API and displays them in a grid.
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 rounded-l text-white w-full md:w-1/2 lg:w-1/3 bg-black/10"
            placeholder="Search by tags..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Search
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-1">
          <PhotoGrid photos={photos} />
        </div>
      </div>
    </main>
  );
}
