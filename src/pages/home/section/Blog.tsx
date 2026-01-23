import blogimg from "../../../img/blog1.png";
import blogimg1 from "../../../img/blog2.png";
import blogimg2 from "../../../img/blog3.png";
import blogimg3 from "../../../img/blog4.png";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto">
        <div className="w-full flex items-center justify-center flex-col pb-10 text-center">
          <h1 className="text-[24px] md:text-[30px] font-[700]">
            Our Blog Posts
          </h1>
          <p className="text-[#727272] pt-1 text-[14px] md:text-[16px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          <div className="w-full">
            <div className="w-full">
              <img
                src={blogimg}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="p-3 bg-[#FBFBFB] flex flex-col gap-2 items-start">
              <p className="text-[#46A358] text-[14px]">
                September 12 I Read in 6 minutes
              </p>
              <h1 className="text-[20px] font-[700] text-[#3D3D3D]">
                Cactus & Succulent <br className="hidden sm:block" />
                Care Tips
              </h1>
              <p className="text-[14px] font-[400] text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="text-[15px] font-[500] hover:text-[#46A358] transition-colors">
                Read More →
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <img
                src={blogimg1}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="p-3 bg-[#FBFBFB] flex flex-col gap-2 items-start">
              <p className="text-[#46A358] text-[14px]">
                September 13 I Read in 2 minutes
              </p>
              <h1 className="text-[20px] font-[700] text-[#3D3D3D]">
                Top 10 Succulents for <br className="hidden sm:block" />
                Your Home
              </h1>
              <p className="text-[14px] font-[400] text-[#727272]">
                Best in hanging baskets. Prefers medium to high light.
              </p>
              <button className="text-[15px] font-[500] hover:text-[#46A358] transition-colors">
                Read More →
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <img
                src={blogimg2}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="p-3 bg-[#FBFBFB] flex flex-col gap-2 items-start">
              <p className="text-[#46A358] text-[14px]">
                September 15 I Read in 3 minutes
              </p>
              <h1 className="text-[20px] font-[700] text-[#3D3D3D]">
                Cacti & Succulent <br className="hidden sm:block" /> Care Tips
              </h1>
              <p className="text-[14px] font-[400] text-[#727272]">
                Cacti and succulents thrive in containers and because most are..
              </p>
              <button className="text-[15px] font-[500] hover:text-[#46A358] transition-colors">
                Read More →
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <img
                src={blogimg3}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="p-3 bg-[#FBFBFB] flex flex-col gap-2 items-start">
              <p className="text-[#46A358] text-[14px]">
                September 15 I Read in 2 minutes
              </p>
              <h1 className="text-[20px] font-[700] text-[#3D3D3D]">
                Best Houseplants <br className="hidden sm:block" />
                Room by Room
              </h1>
              <p className="text-[14px] font-[400] text-[#727272]">
                The benefits of houseplants are endless. In addition to..
              </p>
              <button className="text-[15px] font-[500] hover:text-[#46A358] transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
