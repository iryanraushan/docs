import React, { useRef } from "react";
import Card from "./Card";
const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is a background color of the card will be displayed with never hello.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Dowload Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is a background color of the card will be displayed with never hello.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Dowload Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is a background color of the card will be displayed with never hello.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
