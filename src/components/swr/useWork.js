import React from 'react'
import useSWR from 'swr';

const useWork = (options = {}) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, isLoading, error } = useSWR("/api/works", fetcher, options);
    return {
        works: data,
        isLoading,
        isError: error
      }
}

export default useWork