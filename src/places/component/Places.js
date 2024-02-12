import React, { useState, useEffect } from "react";
import PlaceList from "../pages/PlaceList";
import { useHttpClient } from "../../common/UIComponents/http-hook";
import ErrorModal from "../../common/UIComponents/ErrorModal";
import LoadingSpinner from "../../common/UIComponents/LoadingSpinner";
export const DUMMY_PLACES = [
  {
    id: "1",
    title: "Dharamshala",
    address: "Dharamshala",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "1",
  },
  {
    id: "2",
    title: "Sidhpur",
    address: "Sidhpur",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "2",
  },
  {
    id: "3",
    title: "Dari",
    address: "Dari",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 28.679079,
      lng: 77.06971,
    },
    creator: "3",
  },
  {
    id: "4",
    title: "Delhi",
    address: "Delhi",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 28.679079,
      lng: 77.06971,
    },
    creator: "1",
  },
  {
    id: "5",
    title: "Kangra",
    address: "Kangra",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    description:
      "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    location: {
      lat: 32.216778,
      lng: 76.3191652,
    },
    creator: "4",
  },
];
function Places() {
  const { isLoading, error, sendRequest, errorHandler } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();
  useEffect(() => {
    const sendDataRequest = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:4000/api/places"
        );
        console.log(responseData);
        setLoadedPlaces(responseData);
      } catch (err) {}
    };
    sendDataRequest();
  }, [sendRequest]);
  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </>
  );
}

export default Places;
