import React from "react";

const Form = ({ loadWeather }) => (
  <>
    <div className="container">
      <div className="row">
        <div className="column align-center">
          <form className="search-form" onSubmit={loadWeather}>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              className="search-field"
            />
            {/* <input type="text" name="country" placeholder="Enter country" /> */}
            <button type="submit" value="search" className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Form;
