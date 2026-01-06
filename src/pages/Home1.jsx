
import Header from "../components/Header";
import HeroSection from "../components/HeroSection2";
import Footer from "../components/Footer";
import DietinExecutive from "../components/DietInExeccutive";
import DietinSolution from "../components/DietinSolution";
import DietinPromise from "../components/DietinPromise";
import DietinHowItWorks from "../components/DietinHowItWorks";
import DietinCxoLove from "../components/DietinCxoLove";
import './Home.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <HeroSection image="./images/back1.png" tittle="DIETIN ON THE GO"/>
      <DietinExecutive/>
      <DietinSolution/>
      <DietinPromise/>
      {/* <DietinHowItWorks/>
      <DietinCxoLove/> */}
      <Footer />

    </div>
  );
};

export default Index;
