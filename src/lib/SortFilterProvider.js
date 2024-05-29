"use client"
import { createContext, useEffect, useState } from "react";

const SortFilterContext = createContext({});

export const SortFilterProvider = ({children}) =>{
  const [sort, setSort] = useState(0);
  const [filter, setFilter] = useState(0);

  return(
    <SortFilterContext.Provider value={{ sort, setSort }}>
      {children}
    </SortFilterContext.Provider>
  )
}

export default SortFilterContext;