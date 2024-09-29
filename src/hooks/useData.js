import React, { useEffect, useState } from "react";
import apiClient from "../utils/api-client";
const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(
    () => {
      setisLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          setData(res.data);
          setisLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setisLoading(false);
        });
    },
    deps ? deps : []
  );
  return { data, error, isLoading };
};

export default useData;
