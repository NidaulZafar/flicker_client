"use client";
import React, { useState, useEffect } from "react";
import PhotoGrid from "@/components/PhotoGrid";
import { Photo } from "@/components/Photo";

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        "https://mysterious-shelf-66312-061caa01dc2c.herokuapp.com/api/photos"
      );
      const data = await response.json();
      setPhotos(data.items);
      console.log("Photos fetched:", data.items);
    };
    fetchPhotos();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(
      `https://mysterious-shelf-66312-061caa01dc2c.herokuapp.com/api/photos?tags=${query}`
    );
    const data = await response.json();
    setPhotos(data.items);
    console.log("Photos fetched:", data.items);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
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
