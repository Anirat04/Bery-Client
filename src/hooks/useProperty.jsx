import { useEffect, useState } from "react";

const useProperty = () => {
    const [allProperties, setAllProperties] = useState([])
    // ToDo: get loading state from provider
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => {
                setAllProperties(data)
                // setLoading(false)
            })
    }, [])
    // toDO: return loading here
    return [allProperties]
};

export default useProperty;