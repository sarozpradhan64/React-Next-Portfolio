import React, { useEffect, useState } from 'react';

const useWork = () => {
  const [works, setWorks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/works');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorks(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { works, isLoading, isError };
};

export default useWork;
