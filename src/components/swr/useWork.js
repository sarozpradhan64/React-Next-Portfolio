import React from 'react'
import useSWR from 'swr';

const useWork = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, isLoading, error } = useSWR("/api/works", fetcher);
    return {
        works: data,
        isLoading,
        isError: error
      }
}

export default useWork