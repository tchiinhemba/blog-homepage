import { Route, Router, Routes, BrowserRouter } from "react-router-dom";


import { Home, About } from "../Pages";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}
