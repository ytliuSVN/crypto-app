import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    let ignore = false;
    const fetchMarketChart = async () => {
      setLoading(true);
      try {
        setError({});
        const res = await axios(initUrl);
        if (!ignore) setData(res.data.prices.map((x) => x[1]));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchMarketChart();
    return () => {
      ignore = true;
    };
  }, [initUrl]);

  return { data, loading, error };
};

export default useRequest;
