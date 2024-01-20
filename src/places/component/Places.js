import React from "react";
import PlaceList from "../pages/PlaceList";

function Places() {
  const DUMMY_PLACES = [
    {
      id: "1",
      title: "Dharamshala",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
      description:
        "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
      location: {
        lat: "32.216778",
        long: "76.3191652",
      },
      creator: "1",
    },
    {
      id: "2",
      title: "Dharamshala",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
      description:
        "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
      location: {
        lat: "32.216778",
        long: "76.3191652",
      },
      creator: "2",
    },
    {
      id: "3",
      title: "Dharamshala",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
      description:
        "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
      location: {
        lat: "32.216778",
        long: "76.3191652",
      },
      creator: "3",
    },
    {
      id: "4",
      title: "Dharamshala",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
      description:
        "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
      location: {
        lat: "32.216778",
        long: "76.3191652",
      },
      creator: "1",
    },
    {
      id: "5",
      title: "Dharamshala",
      image:
        "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
      description:
        "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
      location: {
        lat: "32.216778",
        long: "76.3191652",
      },
      creator: "4",
    },
  ];

  return (
    <>
      <PlaceList items={DUMMY_PLACES} />
    </>
  );
}

export default Places;
