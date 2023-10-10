import React from "react";

export default function Brush({ handleUstensil }) {
  return (
    <div>
      <select
        id='brushDetails'
        name='bucket'
        onClick={(e) => handleUstensil(e.target.value, "weight")}
      >
        <option >
          Thin
        </option>
        <option>
          Normal
        </option>
        <option>
          Thick
        </option>
      </select>
    </div>
  );
}
