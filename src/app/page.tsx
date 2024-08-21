"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isInsured, setInsured] = useState(false);

  const toggleInsured = () => {
    setInsured(!isInsured);
  };

  return (
    <div className="h-auto">
      {/* container for checkout UI */}
      <div className="inline-flex w-full justify-items-stretch p-16 pt-32 bg-beachbg bg-cover h-auto">
        
        {/* trip info block */}
        <div className="basis-3/4 flex rounded-md bg-beachfg bg-cover h-auto mr-16">
          
          <div className="basis-1/3" />
          <div className="basis-2/3 flex flex-col bg-white/90 rounded-tr-md rounded-br-md text-black p-8 py-16 gap-8 text-xl">
            <div className="font-bold text-2xl"> Almost done... </div>
            <div className="text-xl"> Would you like to protect your trip? </div>
            <div>
              More than 684,000 bags were mishandled in the first quarter of 2022, 
              according to data from the Air Travel Consumer Reports published by the 
              Department of Transportation. That's roughly seven bags out of every 1,000 
              handled that are earmarked as lost baggage.
            </div>
            <div>
              With more travelers flying again after the worst of the pandemic, there's been a 60% increase 
              (from an average of 3.5 to 5.6 bags per one thousand enplaned) in mishandled baggage. 
              Some airlines struggled more with baggage operations than others. 
              Alaska had more than double the mishandled bag complaints compared to the previous 12 months, 
              while Delta nearly doubled the rate.
            </div>
            <div>
              I stole these stats from the net, we should probably source some legitimate ones...
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
            <div />

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={toggleInsured} />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
              <span className="ms-3 text-lg text-gray-900">Insure my trip!</span>
            </label>

          </div>

        </div>

        {/* pricing block */}
        <div className=" basis-1/4 rounded-md bg-white h-auto p-8 py-16 text-black flex flex-col gap-2">
          
          <div className="font-bold text-2xl"> Checkout </div>
          
          <table>

            <thead className="text-lg divide-y divide-solid">
              <tr>
                  <td className="text-left text-gray-700">Airline</td>
                  <td className="text-right text-gray-700">$2000.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Location 1</td>
                  <td className="text-right text-gray-700">$500.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Location 2</td>
                  <td className="text-right text-gray-700">$600.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Location 3</td>
                  <td className="text-right text-gray-700">$450.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Amenities</td>
                  <td className="text-right text-gray-700">$300.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Service</td>
                  <td className="text-right text-gray-700">$120.00</td>
              </tr>
              <tr>
                  <td className="text-left text-gray-700">Tax</td>
                  <td className="text-right text-gray-700">$200.00</td>
              </tr>
              <tr />
            </thead>
            
            <thead className="text-xl divide-y divide-solid">
              <tr>
                  <td className="text-left pt-4 font-bold">Total</td>
                  <td className="text-right pt-4 font-bold">basic math :(</td>
              </tr>
            </thead>

          </table>

        </div>

      </div>

    </div>
  );
}
