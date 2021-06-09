import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  // const [arrayHolder, setArrayHolder] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchMarketChart = async () => {
      setLoading(true);
      try {
        setError({});
        const res = await axios(initUrl);
        if (!ignore) {
          // setArrayHolder(res.data.prices);
          // let obj = {};
          // let newData = [];
          // arrayHolder.forEach((item) => {
          //   obj['timestamp'] = item[0];
          //   obj['value'] = item[1];
          //   newData.push(obj);
          // });
          // setData(newData);
          setData(res.data.prices.map((x) => x[1]))
        }
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
