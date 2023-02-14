import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './componets/Header';
import React from 'react';
import Login from './componets/Login';
import Blogs from './componets/Bloods';
import UserBlogs from './componets/UserBloods'
import AddBloods from './componets/AddBloods'
import BloodDetail from './componets/BloodDetail'

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/myBlogs" element={<UserBlogs/>}></Route>
      <Route path="/myBlogs/:id" element={<BloodDetail/>}></Route>
      <Route path="/blogs/add" element={<AddBloods />} />
    </Routes>
    </main>

  </React.Fragment>;
}

export default App;
