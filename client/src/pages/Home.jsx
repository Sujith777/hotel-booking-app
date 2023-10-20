import EmailList from "../components/EmailList";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <div className="flex flex-col gap-8">
        <Featured />
        <h1 className="p-4 md:mt-4 font-bold text-2xl">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="md:mt-16 p-4 font-bold text-2xl">Homes guests love</h1>
        <FeaturedProperties />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
