import Blog from "./section/Blog";
import Infor from "./section/Infor";
import Shop from "./section/Shop";
import Showcase from "./section/Showcase";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Shop />
      <Infor />
      <Blog />
    </div>
  );
};

export default Home;
