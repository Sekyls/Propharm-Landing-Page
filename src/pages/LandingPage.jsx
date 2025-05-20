import Banner from "../components/Banner";
import BestSellingProducts from "../components/BestSellingProducts";
import CarouselSlide from "../components/Carousel";
import Filter from "../components/Filter";
import FollowUS from "../components/FollowUS";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import MoreToLove from "../components/MoreToLove";
import NewProducts from "../components/NewProducts";
import Shelf from "../components/Shelf";
import SpecialOffers from "../components/SpecialOffers";
import WeekDeal from "../components/WeekDeal";

const LandingPage = () => {
  return (
    <>
      <nav>
        <Header1 />
        <Header2 />
        <Header3 />
      </nav>
      <main>
        <CarouselSlide />
        <Filter />
        <Shelf />
        <BestSellingProducts />
        <WeekDeal />
        <SpecialOffers />
        <NewProducts />
        <Banner />
        <MoreToLove />
        <FollowUS />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
