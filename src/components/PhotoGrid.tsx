// frontend/components/PhotoGrid.tsx
import React, { useEffect, useState } from "react";

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

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {photos.map((photo) => (
        <div
          key={photo.link}
          className="bg-white shadow rounded overflow-hidden flex flex-col"
        >
          <div className="h-64 overflow-hidden flex-shrink-0">
            <img
              src={photo.media.m}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-black">{photo.title}</h3>
            <p className="text-gray-600">Author: {photo.author}</p>
            <p className="text-gray-600">Date: {photo.date_taken}</p>
            <p className="text-gray-600">Tags: {photo.tags}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
