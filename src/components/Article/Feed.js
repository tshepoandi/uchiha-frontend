import React, { useContext } from "react";
import Article from ".";

import { MainContext, useData } from "../../context/data";

function Feed() {
  //const useData = useContext(MainContext);
  const { articles } = useData();

  console.log(articles);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-6">
      {articles.map((art) => (
        <Article key={art.id} {...art} />
      ))}
    </div>
  );
}

export default Feed;
