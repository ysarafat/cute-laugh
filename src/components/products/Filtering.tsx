"use Client";

import { useState } from "react";

const Filtering = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <aside>
      <div>
        <h1>Price Range</h1>
        <div>
          <label htmlFor="">
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filtering;
