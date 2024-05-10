import Banner from "../components/Home/Banner";
import MapSection from "../components/Home/MapSection";
import NewsLetter from "../components/Home/NewsLetter";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <MapSection></MapSection>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;