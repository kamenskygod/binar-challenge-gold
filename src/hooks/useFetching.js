import { useEffect, useState } from "react"
import { fetchApi } from "../config/services"

const useFetchingHooks = ({
    url,
    parameter,
}) => {
    const [params, setParams] = useState(parameter)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setloading] = useState("idle")
    useEffect(() => {
        setloading("fetching")
        fetchApi(url, params).then(result => {
            setData(result)
            setloading("resolve")
        }).catch(e => {
            setError(e.message)
            setloading("reject")
        })
    }, [params, url])

    return {
        data,
        setParams,
        params,
        error,
        loading
    }
}

export default useFetchingHooks