"use client"

import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(1)

  return (
    <div className="flex items-center justify-center space-x-1.5 border-text-extra border text-2xl font-extralight h-full">
      <button
        className="text-black px-1  border-r border-text-extra"
        onClick={count > 1 ? () => setCount(count - 1) : () => setCount(1)}
      >
        -
      </button>
      <span className="text-black font-medium text-2xs">{count}</span>
      <button
        className="text-black px-1 border-text-extra border-l text-2xl font-extralight"
        onClick={count < 20 ? () => setCount(count + 1) : () => setCount(20)}
      >
        +
      </button>
    </div>
  )
}

export default Counter
