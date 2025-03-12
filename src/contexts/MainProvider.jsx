import React, { createContext, useContext, useEffect, useState } from 'react'

const context=createContext()
export default function MainProvider({children}) {
  const [isSheet,setIsSheet]=useState()
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value={
    isSheet,
    setIsSheet,
    windowSize
  }
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}
export const useMainContext=()=>useContext(context)
