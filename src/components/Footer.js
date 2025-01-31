import React, { Component } from "react";

export default function Footer() {
  return (
    <div>
      <>
        <footer className="bg-dark text-white text-center mb-3">
          <div className="container">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
            <p>
              <a href="/privacy-policy" className="text-white">
                Privacy Policy
              </a>{" "}
              |
              <a href="/terms-of-service" className="text-white">
                {" "}
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </>
    </div>
  );
}
