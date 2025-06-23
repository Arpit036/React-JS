 import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (!currency) return

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        const json = await res.json()
        setData(json[currency])
      } catch (error) {
        console.error("Error fetching currency data:", error)
        setData({})
      }
    }

    fetchData()
  }, [currency])

  return data
}

export default useCurrencyInfo
