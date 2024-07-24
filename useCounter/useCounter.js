/* eslint-disable no-unused-vars */
import { useState } from "react"

export const useCounter = (initialValue = 0, minValue = 0) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter(counter + value)
  }

  const decrement = (value = 1) => {
    const nextValue = counter - value

    if (nextValue < minValue) {
      return
    }

    setCounter(nextValue)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
