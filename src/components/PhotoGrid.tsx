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
          className="bg-white shadow rounded overflow-hidden"
        >
          <img src={photo.media.m} alt={photo.title} className="w-full" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{photo.title}</h3>
            <p className="text-gray-600">{photo.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
