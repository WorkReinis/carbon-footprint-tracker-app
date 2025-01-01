import React, { createContext, useState } from "react";

// Creates context object. MyContext will be used to provide and consume the shared states.
const MyContext = createContext();

// Provider component to wrap the entire app. It will provide the shared states to all components.
function MyProvider({ children }) {
     // States to be shared via context
     const [page, setPage] = useState("home"); // Set page to render
     const [key, setKey] = useState(1); //Set avatar to render on home button click
     const [navBar, setNavBar] = useState("true"); // Set navbar to render
     const [activeButton, setActiveButton] = useState("home"); // Set active button on navbar
     
     //<MyContext.Provider> is the provider component created by createContext. It makes the context's value available to all child components.
     return (
          <MyContext.Provider value={{ page, setPage, key, setKey, navBar, setNavBar, activeButton, setActiveButton }}>
               {children}
          </MyContext.Provider>
     );
}

export { MyProvider, MyContext };