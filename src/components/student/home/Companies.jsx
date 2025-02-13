import { assets } from "../../../assets/assets";

const Companies = () => {
  return (
    <div className="mb-28 px-1 sm:mb-32">
      <h3 className="mb-3 mt-28 text-center text-sm font-medium text-gray-600 sm:mb-9 sm:text-base">
        Trusted by learners from
      </h3>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-9 gap-y-7">
        <img
          className="w-20 md:w-28"
          src={assets.microsoft_logo}
          alt="microsoft logo"
        />
        <img
          className="w-20 md:w-28"
          src={assets.walmart_logo}
          alt="walmart logo"
        />
        <img
          className="w-20 md:w-28"
          src={assets.accenture_logo}
          alt="accenture logo"
        />
        <img
          className="w-20 md:w-28"
          src={assets.adobe_logo}
          alt="adobe logo"
        />
        <img
          className="w-20 md:w-28"
          src={assets.paypal_logo}
          alt="paypal logo"
        />
      </div>
    </div>
  );
};

export default Companies;
