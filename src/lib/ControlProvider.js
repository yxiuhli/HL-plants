"use client"
import { createContext, useEffect, useState } from "react";

const ControlContext = createContext({});

export const ControlProvider = ({children}) =>{
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState(0);

  return(
    <ControlContext.Provider value={{ sort, setSort}}>
      {children}
    </ControlContext.Provider>
  )
}

export default ControlContext;