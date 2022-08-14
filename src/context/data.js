import React, { useState, createContext, useEffect, useContext } from "react";

import { articles as articlesdb } from "./db";

const initialState = {
  user: null,
  data: null,
};

const MainContext = createContext();

export function useData() {
  return useContext(MainContext);
}

export const MainProvider = ({ children }) => {
  const [articles, setArticles] = useState(articlesdb);
  const [currentTab, setCurrentTab] = useState(true);

  const pressHomeTab = () => {
    setCurrentTab(true);
  };

  const pressConvTab = () => {
    setCurrentTab(false);
  };

  const value = {
    articles,
    currentTab,
    pressConvTab,
    pressHomeTab,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
