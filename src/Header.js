import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className="search-engine">
          <form action="">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city here"
                autoComplete="off"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
