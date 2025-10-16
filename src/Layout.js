import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/Layout.css"; // Import CSS riêng

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt60ml07dLuPpCJpShu6C6g10kOUfVVx_7Jcz52Yk-WPAZupSalBX-Xx4&s" />
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        © 2025 My Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
