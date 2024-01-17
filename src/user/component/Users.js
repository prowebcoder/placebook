import React from "react";
import UserList from "./UserList";

function Users() {
  const USERS = [
    {
      id: "1",
      name: "Rahul",
      image:
        "https://prowebcoder.com/cdn/shop/files/60164383_1559842260826420_4387232960273711104_n.jpg?v=1656568099&width=550",
      placecount: "1",
    },
    {
      id: "2",
      name: "Pankaj",
      image:
        "https://prowebcoder.com/cdn/shop/files/IMG_3210z_caa46c62-dfc0-49c1-ba5b-289054d7f2d3.jpg?v=1656567815&width=550",
      placecount: "3",
    },
    {
      id: "3",
      name: "Puneet",
      image:
        "https://prowebcoder.com/cdn/shop/files/IMG_3210_fde067b1-1fc0-4f94-b568-94c1a164a86f.jpg?v=1656567603&width=550",
      placecount: "1",
    },
    {
      id: "4",
      name: "Goldi",
      image:
        "https://prowebcoder.com/cdn/shop/files/21617929_1715416011834217_8965152641470883333_n.jpg?v=1656567900&width=550",
      placecount: "4",
    },
    {
      id: "5",
      name: "Sangeeta",
      image:
        "https://prowebcoder.com/cdn/shop/files/50283401_2034335453313191_3839750296481824768_n.jpg?v=1656567946&width=550",
      placecount: "4",
    },
    {
      id: "6",
      name: "Neha",
      image:
        "https://prowebcoder.com/cdn/shop/files/WhatsApp_Image_2022-06-30_at_10.51.16_AM.jpg?v=1656566585&width=550",
      placecount: "3",
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
}

export default Users;
