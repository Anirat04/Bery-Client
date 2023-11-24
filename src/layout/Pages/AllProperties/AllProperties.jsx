
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import CommonHeading from "../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../hooks/useProperty";

const AllProperties = () => {
    const [allProperties] = useProperty()
    // const [allProperties, setAllProperties] = useState([])
    // const advertisementProperties = allProperties.slice(0, 6)
    // useEffect(() => {
    //     fetch('property.json')
    //         .then(res => res.json())
    //         .then(data => setAllProperties(data))
    // }, [])
    return (
        <>
            <CommonHeading
                subHeading={'Best Choice'}
                heading={'Popular Properties'}
            ></CommonHeading>
            <div className="max-w-[1320px] mx-auto grid grid-cols-3 justify-between gap-10">
                {
                    allProperties.map(property => (
                        <PropertyCard
                            key={property._id}
                            PropertyInfo={property}
                        ></PropertyCard>
                    ))
                }
            </div>
        </>
    );
};

export default AllProperties;