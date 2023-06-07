import React from "react";
import UpperFooter from "./UpperFooter";
import SocialFooter from "./SocialFooter";
import TermsNCondn from "./TermsNCondn";
function Footer() {
  return (
    <>
      <div className="border-b-[3px] mt-8"></div>
      <div className="mt-9 mx-5 md:mx-8 lg:mx-10 lg:flex lg:justify-between">
        <UpperFooter
          heading="About Us"
          item1="Our Company"
          item2="Stories and News"
          item3="Customer Service"
        />
        <UpperFooter
          heading="Careers"
          item1="Culture and Values"
          item2="Alumni Community"
          item3="International Careers"
        />
        <UpperFooter
          heading="Social Impact"
          item1="People"
          item2="Planet"
          item3="Environmental and Social Impact Reporting"
        />
        <UpperFooter
          heading="For Business Partners"
          item1="Landlord Support Center"
          item2="Suppliers"
          item3="Office"
        />
        <UpperFooter
          heading="Order and Pickup"
          item1="Order on the App"
          item2="Order on the Web"
          item3="Delivery"
        />
      </div>
      <div className="border-b-[2px] mt-6 mx-5 lg:mx-10 "></div>
      <SocialFooter />
      <TermsNCondn />
      <h3 className="mt-3 lg:mt-4 mb-10  lg:mb-10  text-slate-500 mx-5 md:mx-8 lg:mx-10 text-sm font-semibold">
        © 2023 Kofe Company. All rights reserved.
      </h3>
    </>
  );
}

export default Footer;
