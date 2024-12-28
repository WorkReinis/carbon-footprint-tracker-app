import React, { createContext, useState } from "react";

const MyContext = createContext();

function MyProvider({ children }) {
     // States to be shared via context
     const [page, setPage] = useState("home"); // Set page to render
     const [key, setKey] = useState(1); //Set avatar to render on home button click

     return (
          <MyContext.Provider value={{ page, setPage, key, setKey }}>
               {children}
          </MyContext.Provider>
     );
}

export { MyProvider, MyContext };