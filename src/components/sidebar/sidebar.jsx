import React from "react";
import "./sidebar.css";

const Sidebar = () => (
  <aside className="site-sidebar">
    <div className="sidebar-content">
      <div className="sidebar-header">
        <img
          src="/android-chrome-512x512.png"
          alt="Hackathon Logo"
          className="sidebar-logo"
        />
        <h2 className="sidebar-title">NaN</h2>
      </div>
      <nav>
        <a href="/about">The Team</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy</a>
        <a href="/membership">Become a Member</a>
      </nav>
    </div>
  </aside>
);

export default Sidebar;