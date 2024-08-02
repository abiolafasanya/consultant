import {useState, useEffect} from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
    const jsonValue = typeof window !== 'undefined' ? localStorage.getItem(key): null
    if(jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
        return (initialValue)()
    } else {
        return initialValue
    }
 })

 useEffect(() => {
    const controller = new AbortController()
        localStorage.setItem(key, JSON.stringify(value))
        return () => {
            controller.abort();
        }
 }, [key, value])

 return [value, setValue]
//  return [value, setValue] as [T, T]
}

