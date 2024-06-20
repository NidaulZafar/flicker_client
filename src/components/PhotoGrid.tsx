import React from "react";
import Image from "next/image";

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
  const formatDate = (date: string | number | Date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {photos.map((photo) => (
        <div
          key={photo.link}
          className="bg-white shadow rounded overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
        >
          <div className="relative h-64 overflow-hidden flex-shrink-0">
            <Image
              src={photo.media.m}
              alt={photo.title}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-black">{photo.title}</h3>
            <p className="text-gray-600">
              <strong>Author:</strong> {photo.author}
            </p>
            <p className="text-gray-600">
              <strong>Date:</strong> {formatDate(photo.date_taken)}
            </p>
            <p className="text-gray-600">
              <strong>Tags:</strong> {photo.tags || "No Tags Listed"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
