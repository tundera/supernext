import { useState, useEffect } from 'react'

export function useRandomNumber() {
  const [number, setNumber] = useState<number>()

  useEffect(() => {
    fetch('/api/nest/randomNumber')
      .then((response) => response.text())
      .then((text) => setNumber(+text))
  }, [])

  return number
}
