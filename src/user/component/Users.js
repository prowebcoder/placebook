import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import ErrorModal from "../../common/UIComponents/ErrorModal";
import LoadingSpinner from "../../common/UIComponents/LoadingSpinner";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/users");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.messsage);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </React.Fragment>
  );
}

export default Users;
