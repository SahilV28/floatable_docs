import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      filesize: "0.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download...", tagColor: "green" },
    },
    {
      desc: "You have within you the strength, the patience, and the passion to reach for the stars to change the world.",
      filesize: "0.5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Life is what happens when you’re busy making other plans.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download...", tagColor: "green" },
    },
    {
      desc: "Dream big and dare to fail.",
      filesize: "1.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Share", tagColor: "blue" },
    }
  ];

  return (
    <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap">
      {data.map((elem, index) => (
        <Card key={index} data={elem} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
