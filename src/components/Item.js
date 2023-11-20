import React, { useState } from "react";

function Item({ name, category }) {
  // Use state to track whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // Function to handle adding or removing item from the cart
  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Change button text based on whether the item is in the cart or not */}
      <button className="add" onClick={handleToggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
