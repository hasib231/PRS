import React from "react";
import Header from "./Components/Header";
import { Outlet, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      
      <Outlet />
      {/* <Routes>
        <Route element={<WithoutNav />}>
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route element={<Header />}>
          <Route path="/=example" element={<Example />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
