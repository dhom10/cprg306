"use client";

import { useState } from "react";

export default function NewItem(){
const [quantity, setQuantity] = useState(1);

function increment() {
    if (quantity < 20) 
        setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) 
        setQuantity(quantity - 1);
  }
  const atMin = quantity === 1;
  const atMax = quantity === 20;



return(
        <dev className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow">
            <h2>New Iteam</h2>
            <p>Quantity: {quantity}</p>
        <button
            onClick={decrement}
            disabled={quantity === 1}
            className={`h-6 w-6 rounded-md text-white text-sm leading-none flex items-center justify-center
        ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-500"}`}
        aria-label="decrement">-</button>

        <button  onClick={increment}
            disabled={quantity === 20}
            className={`h-6 w-6 rounded-md text-white text-sm leading-none flex items-center justify-center
            ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            aria-label="increment">+</button>
        </dev>
    );
}