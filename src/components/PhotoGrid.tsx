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
  //   useEffect(() => {
  //     // Fetch photos on component mount if initialPhotos is empty
  //     if (initialPhotos.length === 0) {
  //       fetch("http://localhost:8000/api/photos")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setPhotos(data.items);
  //           console.log("Photos fetched:", data.items);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching photos:", error);
  //         });
  //     }
  //   }, [initialPhotos]);

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
