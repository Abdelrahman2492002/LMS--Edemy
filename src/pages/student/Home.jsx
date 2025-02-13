import Footer from "../../components/student/Footer/Footer";
import CallToAction from "../../components/student/home/CallToAction";
import Companies from "../../components/student/home/Companies";
import CoursesSection from "../../components/student/home/CoursesSection";
import Hero from "../../components/student/home/Hero";
import Testimonials from "../../components/student/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
