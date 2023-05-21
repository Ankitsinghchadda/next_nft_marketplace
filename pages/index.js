import HeroBanner from "../components/heroBanner/HeroBanner";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import { useQuery } from "@apollo/client";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries/activeItems";

const Home = () => {
  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);
  console.log(listedNfts);
  return (
    <>
      <HeroBanner />
      <Carousel />
      <Carousel />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
