import { useEffect, useState } from "react";

const useProperty = () => {
    const [allProperties, setAllProperties] = useState([])
    // ToDo: get loading state from provider
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/property')
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

// Navbar Color: #e9f1ff
// Main color: #0b2c3d
// Sub color: #b39359
