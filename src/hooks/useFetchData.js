import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData"

export const useFetchData = ({url}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const {data, loading} = await fetchData(url)
        setData(data)
        setLoading(loading)
    }
    useEffect(() => {
        getData()
    }, [url])

    return{
        data,
        loading
    }
}