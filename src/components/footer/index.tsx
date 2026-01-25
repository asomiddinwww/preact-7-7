import { Button, Input } from "antd";
import fotimg from "../../img/fotimg1.png";
import logo from "../../img/Logo.svg";
import location from "../../img/Location.svg";
import fotimg2 from "../../img/footimg2.svg";
import fotimg3 from "../../img/fotimg3.svg";
import face from "../../img/Facebook.svg";
import pay from "../../img/payplay.png";

const Footer = () => {
  return (
    <div className="w-full pt-20 max-sm:pt-10 max-[280px]:pt-5">
      <div className="w-[90%] max-sm:w-[95%] m-auto bg-[#fafafa]">
        <div className="flex max-lg:flex-wrap max-[280px]:flex-col items-center gap-6 max-sm:gap-4 max-[280px]:gap-3 p-5 max-sm:p-3 max-[280px]:p-2">
          <div className="p-5 max-sm:p-3 max-[280px]:p-2 border-r-1 max-lg:border-r-0 max-[280px]:border-b-1 border-r-[#46A3581A] max-[280px]:border-b-[#46A3581A] pr-23 max-lg:pr-5 max-[280px]:pr-2 max-[280px]:w-full">
            <img
              className="w-[123px] max-sm:w-[90px] max-[280px]:w-[70px]"
              src={fotimg}
              alt=""
            />
            <h1 className="text-[19px] max-sm:text-[17px] max-[280px]:text-[14px] pb-2 pt-2 max-[280px]:pb-1 max-[280px]:pt-1 font-[600]">
              Garden Care
            </h1>
            <p className="text-[#727272] text-[15px] max-sm:text-[13px] max-[280px]:text-[10px]">
              We are an online plant shop <br /> offering a wide range of cheap
              <br /> and trendy plants.
            </p>
          </div>
          <div className="p-5 max-sm:p-3 max-[280px]:p-2 border-r-1 max-lg:border-r-0 max-[280px]:border-b-1 border-r-[#46A3581A] max-[280px]:border-b-[#46A3581A] pr-23 max-lg:pr-5 max-[280px]:pr-2 max-[280px]:w-full">
            <img
              className="w-[123px] max-sm:w-[90px] max-[280px]:w-[70px]"
              src={fotimg}
              alt=""
            />
            <h1 className="text-[19px] max-sm:text-[17px] max-[280px]:text-[14px] pb-2 pt-2 max-[280px]:pb-1 max-[280px]:pt-1 font-[600]">
              Garden Care
            </h1>
            <p className="text-[#727272] text-[15px] max-sm:text-[13px] max-[280px]:text-[10px]">
              We are an online plant shop <br /> offering a wide range of cheap{" "}
              <br /> and trendy plants.
            </p>
          </div>
          <div className="p-5 max-sm:p-3 max-[280px]:p-2 max-[280px]:border-b-1 max-[280px]:border-b-[#46A3581A] max-[280px]:w-full">
            <img
              className="w-[123px] max-sm:w-[90px] max-[280px]:w-[70px]"
              src={fotimg}
              alt=""
            />
            <h1 className="text-[19px] max-sm:text-[17px] max-[280px]:text-[14px] pb-2 pt-2 max-[280px]:pb-1 max-[280px]:pt-1 font-[600]">
              Garden Care
            </h1>
            <p className="text-[#727272] text-[15px] max-sm:text-[13px] max-[280px]:text-[10px]">
              We are an online plant shop <br /> offering a wide range of cheap
              <br /> and trendy plants.
            </p>
          </div>
          <div className="w-[300px] max-lg:w-full flex items-start flex-col gap-5 max-sm:gap-3 max-[280px]:gap-2">
            <h1 className="text-[#3D3D3D] font-[600] text-[20px] max-sm:text-[17px] max-[280px]:text-[14px]">
              Would you like to join newsletters?
            </h1>
            <div className="flex items-center w-full">
              <Input
                placeholder="enter your email address..."
                size="large"
                className="!rounded-r-[0px] !border-r-0 !outline-0 max-sm:!text-[12px] max-[280px]:!text-[9px] max-[280px]:!h-[32px]"
              />
              <Button className="text-[15px]! max-sm:text-[13px]! max-[280px]:text-[10px]! rounded-l-[0px]! bg-[#46a359]! text-white! p-[20px]! max-sm:p-[15px]! max-[280px]:p-[8px]! text-wwhite! h-10! max-[280px]:h-[32px]! rounded-r-[10px]!">
                Join
              </Button>
            </div>
            <p className="text-[14px] max-sm:text-[12px] max-[280px]:text-[9px] font-[400] text-[#727272]">
              We usually post offers and challenges in newsletter. We're your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className="w-full flex max-lg:flex-wrap max-[280px]:flex-col items-center justify-between pl-10 max-sm:pl-5 max-[280px]:pl-3 pr-40 max-lg:pr-10 max-sm:pr-5 max-[280px]:pr-3 p-3 max-[280px]:p-2 max-[280px]:gap-2 bg-[#46A3581A]">
          <div className="max-[280px]:w-full max-[280px]:flex max-[280px]:justify-center">
            <img
              className="max-sm:w-[120px] max-[280px]:w-[90px]"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex items-center gap-3 max-sm:gap-2 max-[280px]:gap-1 max-[280px]:w-full">
            <div>
              <img
                className="max-sm:w-[18px] max-[280px]:w-[14px]"
                src={location}
                alt=""
              />
            </div>
            <div>
              <p className="text-[#3D3D3D] text-[14px] max-sm:text-[12px] max-[280px]:text-[9px] font-[400]">
                70 West Buckingham Ave. <br /> Farmingdale, NY 11735
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 max-sm:gap-2 max-[280px]:gap-1 max-[280px]:w-full">
            <div>
              <img
                className="max-sm:w-[18px] max-[280px]:w-[14px]"
                src={fotimg2}
                alt=""
              />
            </div>
            <p className="text-[#3D3D3D] text-[14px] max-sm:text-[12px] max-[280px]:text-[9px] font-[400]">
              contact@greenshop.com
            </p>
          </div>
          <div className="flex items-center gap-3 max-sm:gap-2 max-[280px]:gap-1 max-[280px]:w-full">
            <div>
              <img
                className="max-sm:w-[18px] max-[280px]:w-[14px]"
                src={fotimg3}
                alt=""
              />
            </div>
            <p className="text-[#3D3D3D] text-[14px] max-sm:text-[12px] max-[280px]:text-[9px] font-[400]">
              +88 01911 717 490
            </p>
          </div>
        </div>
        <div className="w-[94%] flex max-lg:flex-wrap max-[280px]:flex-col justify-between p-10 max-sm:p-5 max-[280px]:p-3 max-[280px]:gap-5">
          <div className="max-[280px]:w-full">
            <ul className="flex flex-col gap-2 max-[280px]:gap-1">
              <li className="font-[600] text-[19px] max-sm:text-[16px] max-[280px]:text-[13px]">
                My Account
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                My Account
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Our stores
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Contact us
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Career
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Specials
              </li>
            </ul>
          </div>
          <div className="max-[280px]:w-full">
            <ul className="flex flex-col gap-2 max-[280px]:gap-1">
              <li className="font-[600] text-[19px] max-sm:text-[16px] max-[280px]:text-[13px]">
                Help & Guide
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Help Center
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                How to Buy
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:border-b-2 hover:border-[#46a359] transition-all">
                Shipping & Delivery
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Product Policy
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                How to Return
              </li>
            </ul>
          </div>
          <div className="max-[280px]:w-full">
            <ul className="flex flex-col gap-2 max-[280px]:gap-1 w-28 max-[280px]:w-full">
              <li className="font-[600] text-[19px] max-sm:text-[16px] max-[280px]:text-[13px]">
                Categories
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                House Plants
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Potter Plants
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Seeds
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Small Plantss
              </li>
              <li className="font-[400] border-b-2 border-[#ffffff00] cursor-pointer text-[15px] max-sm:text-[13px] max-[280px]:text-[10px] hover:ml-4 hover:border-b-2 hover:border-[#46a359] transition-all">
                Accessories
              </li>
            </ul>
          </div>
          <div className="max-[280px]:w-full">
            <h1 className="font-[600] text-[19px] max-sm:text-[16px] max-[280px]:text-[13px]">
              Social Media
            </h1>
            <ul className="flex items-center gap-2 max-[280px]:gap-1 pb-7 max-sm:pb-4 max-[280px]:pb-3 pt-3 max-[280px]:pt-2">
              <li className="p-2 rounded-[10px] border-1 border-[#46a359] pl-3.5 pr-3.5 max-sm:p-1.5 max-sm:pl-2.5 max-sm:pr-2.5 max-[280px]:p-1 max-[280px]:pl-2 max-[280px]:pr-2">
                <img
                  className="max-sm:w-[16px] max-[280px]:w-[12px]"
                  src={face}
                  alt=""
                />
              </li>
              <li className="p-2 rounded-[10px] border-1 border-[#46a359] pl-3.5 pr-3.5 max-sm:p-1.5 max-sm:pl-2.5 max-sm:pr-2.5 max-[280px]:p-1 max-[280px]:pl-2 max-[280px]:pr-2">
                <img
                  className="max-sm:w-[16px] max-[280px]:w-[12px]"
                  src={face}
                  alt=""
                />
              </li>
              <li className="p-2 rounded-[10px] border-1 border-[#46a359] pl-3.5 pr-3.5 max-sm:p-1.5 max-sm:pl-2.5 max-sm:pr-2.5 max-[280px]:p-1 max-[280px]:pl-2 max-[280px]:pr-2">
                <img
                  className="max-sm:w-[16px] max-[280px]:w-[12px]"
                  src={face}
                  alt=""
                />
              </li>
              <li className="p-2 rounded-[10px] border-1 border-[#46a359] pl-3.5 pr-3.5 max-sm:p-1.5 max-sm:pl-2.5 max-sm:pr-2.5 max-[280px]:p-1 max-[280px]:pl-2 max-[280px]:pr-2">
                <img
                  className="max-sm:w-[16px] max-[280px]:w-[12px]"
                  src={face}
                  alt=""
                />
              </li>
            </ul>
            <h1 className="font-[600] text-[19px] max-sm:text-[16px] max-[280px]:text-[13px] pb-2 max-[280px]:pb-1">
              We accept
            </h1>
            <ul>
              <li>
                <img
                  className="max-sm:w-[200px] max-[280px]:w-[150px]"
                  src={pay}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-[90%] max-sm:w-[95%] m-auto pb-2 max-[280px]:pb-1 flex items-center justify-center border-t-1 pt-2 max-[280px]:pt-1 border-[#46A35833]">
          <p className="text-[14px] max-sm:text-[12px] max-[280px]:text-[9px] font-[400] text-[#3D3D3D] max-[280px]:text-center">
            © 2026 GreenShop. All Rights Reserved..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
