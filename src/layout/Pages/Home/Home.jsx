import Advertisement from "./HomeComponents/Adevertisement/Advertisement";
import Banner from "./HomeComponents/Banner/Banner";
import HomeReview from "./HomeComponents/HomeReview/HomeReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;