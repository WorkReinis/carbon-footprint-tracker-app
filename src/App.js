import React, { useState, useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home page/HomePage";
import AnalyticsPage from "./pages/analytics page/AnalyticsPage";
import InputPage from "./pages/input page/InputPage";
import InputConfirmationPage from "./pages/input confirmation page/InputConfirmationPage";
import ReducePage from "./pages/reduce page/ReducePage";
import SettingsPage from "./pages/settings page/SettingsPage";
import { MyProvider, MyContext } from './context/pages';

function App() {
     const { page } = useContext(MyContext)


     
     const renderPage = () => {
          switch (page) {
               case "home":
                    const randomNumber = Math.floor(Math.random() * 6) + 1; // For random avatar generation
                    return <HomePage avatarNumber={randomNumber}/>;
               case "analytics":
                    return <AnalyticsPage />;
               case "input":
                    return <InputPage />;
               case "reduce":
                    return <ReducePage />;
               case "settings":
                    return <SettingsPage />;
               case "input-success":
                    return <InputConfirmationPage/>;
               default:
                    return <HomePage />;
          }
     };

     return (
          <>
               <div className='page-div'>
                    {renderPage()}
               </div>
               <NavBar />
          </>
     );
}

export default function AppWrapper() {
     // Wrap the entire app in the PageProvider to make context available
     return (
       <MyProvider>
         <App />
       </MyProvider>
     );
   }
