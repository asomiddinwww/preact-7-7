import Products from "../../components/dashboard";
import Blog from "./section/Blog";
import Infor from "./section/Infor";
import Showcase from "./section/Showcase";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Products />
      <Infor />
      <Blog />
    </div>
  );
};

export default Home;
