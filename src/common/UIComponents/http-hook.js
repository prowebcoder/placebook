import { useState, useEffect, useCallback } from "react";
export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || responseData);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "something went wrong please try again");
        throw err;
      }
    },
    []
  );

  const errorHandler = () => {
    setError(null);
  };

  useEffect(() => {}, []);

  return { isLoading, error, sendRequest, errorHandler };
};
