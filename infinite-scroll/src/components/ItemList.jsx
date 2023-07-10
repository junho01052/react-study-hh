import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadDogs } from "../api/dogs";
import { useQuery } from "react-query";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { current } from "@reduxjs/toolkit";

const ItemList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } = useInfiniteQuery(
    "dogs",
    ({ pageParam = 0 }) => loadDogs(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // console.log(allPages);
        return allPages.length;
      },
    }
  );

  // console.log(data);

  //리액트 쿼리
  if (isLoading) {
    return <h1>로딩중입니다</h1>;
  }
  if (isError) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    <>
      {isFetching && <h3>Loading...</h3>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.map((dog) => {
            return <Item key={dog.id} dog={dog} />;
          });
        })}
      </InfiniteScroll>
    </>
  );
};

export default ItemList;
