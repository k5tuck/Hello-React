import React from "react";
import Card from "./PhotoCard";

const data = [
  {
    title: "Photos of 2036",
    description: "Photo 1 of 2036",
    url: "/future1.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 2 of 2036",
    url: "/future2.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 3 of 2036",
    url: "/future3.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 4 of 2036",
    url: "/future4.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 5 of 2036",
    url: "/future5.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 6 of 2036",
    url: "/future6.jpg",
  },
  {
    title: "Photos of 2036",
    description: "Photo 7 of 2036",
    url: "/future7.jpg",
  },
];

function Gallery() {
  return (
    <>
      <h1>The Photo Gallery</h1>
      <div className="gallery">
        {data.map((i) => (
          <Card title={i.title} url={i.url} description={i.description} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
