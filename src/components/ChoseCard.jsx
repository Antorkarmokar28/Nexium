import { BsQrCode } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { PiArrowBendDownRightLight } from "react-icons/pi";

function ChoseCard() {
  return (
    <>
      <div className="bg-[#C60A83] py-6">
        <div className="container mx-auto">
          <div className="flex gap-4 text-slate-300">
            <p>Ba...</p>
            <p>Overlay</p>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <div className="bg-white p-6 rounded-full"></div>
            <div className="bg-white p-3 rounded-xl">
              <h3 className="text-2xl text-slate-600">CHOOSE YOUR CARD</h3>
            </div>
          </div>
          <h2 className="text-3xl text-white hover:underline my-10">
            YOUR CARD WITH PREMIUM LIMITS
          </h2>
          {/* card details */}
          <div className="grid grid-cols-3 gap-4">
            {/* card-1 */}
            <div className="flex justify-between items-center bg-gradient-to-tl from-[#7928CA] to-[#FF0080] rounded-2xl text-slate-200">
              {/* Left Side */}
              <div className="p-6">
                <div className="flex gap-3 items-center">
                  <LuSquareArrowOutUpRight className="text-2xl" />
                  <p className="font-semibold text-lg">NEXIUM</p>
                </div>
                <div className="text-sm flex text-center mt-4">
                  <p>THE CARD YOU WANT</p>
                  <PiArrowBendDownRightLight className="text-5xl" />
                </div>
              </div>

              {/* Right Side */}
              <div className="bg-black p-6 h-full rounded-tr-xl text-center">
                <div className="flex justify-center mt-4">
                  <BsQrCode className="text-3xl text-white" />
                </div>
                <p>0000</p>
                <h4>VISA</h4>
                <p>Platinum Business</p>
              </div>
            </div>
            {/* card details */}
            <div>
              <h3 className="text-2xl text-slate-200 mb-4">
                PLATINUM BUSINESS VISA
              </h3>
              <ul className="list-disc ml-5 text-slate-200 space-y-3">
                <li>Limit per transaction: $20,000</li>
                <li>Daily limit: $250,000</li>
                <li>Monthly limit: $1,000,000</li>
                <li>ATM cash limit: $300 per day</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoseCard;
