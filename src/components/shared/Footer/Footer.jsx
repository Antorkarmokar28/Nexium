import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlinePhoneEnabled } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="bg-[#08162E] py-12">
        <div className="container mx-auto md:flex justify-between p-4">
          {/* logo inner */}
          <div>
            <div className="flex items-center">
              <div className="text-slate-200 text-6xl font-bold">
                <LuSquareArrowOutUpRight />
              </div>
              <div className="space-y-4">
                <h3 className="text-5xl text-slate-200">NEX</h3>
                <h3 className="text-5xl text-slate-200">IUM</h3>
              </div>
            </div>
            <p className="text-slate-200">More info about NEXIUM:</p>
            <a href="#" className="text-slate-200 border-b-2">
              www.nexium.vip
            </a>
          </div>
          {/* contact inner */}
          <div>
            <h3 className="text-white text-3xl mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-[#9E0098] text-white rounded-md font-bold text-xl">
                  <MdOutlinePhoneEnabled />
                </div>
                <p className="text-slate-200">(406) 555-0120</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-[#9E0098] text-white rounded-md font-bold text-xl">
                  <CgMail />
                </div>
                <p className="text-slate-200">example@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-[#9E0098] text-white rounded-md font-bold text-xl">
                  <IoLocationOutline />
                </div>
                <p className="text-slate-200">
                  Westheimer Rd. Santa Ana, Illinois
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* bottom footer */}
        <div className="container p-4 mx-auto md:flex justify-between mt-20">
          <p className="text-slate-200">
            &copy; 2025 Bellver Markets LLC. Nexium is a product of Bellver
            Markets LLC. All rights reserved.
          </p>
          <p>
            <ul className="md:flex gap-4 text-slate-200">
              <li>
                <a href="#">Supports</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
            </ul>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
