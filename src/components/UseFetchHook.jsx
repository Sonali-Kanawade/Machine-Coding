import { useEffect, useState } from "react"


const USeFetchHook = (apiUrl) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})

    useEffect(() => {
        const getData = async () => {
            try{
                setLoading(true)
                const response = await fetch(apiUrl);
                const responseData = await response.json();
    
                setData(responseData)
            }catch(err) {
                setError(err)
            }finally{
                setLoading(false)
            }
            
        }
        getData();
    }, [apiUrl])

    return {data, loading, error}
}

export default USeFetchHook;