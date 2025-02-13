import { assets } from "../../../assets/assets";

const FooterAboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-7 sm:items-start">
        <img src={assets.logo_dark} alt="logo icon" className="w-28" />
        <p className="max-w-[347px] text-center text-sm leading-[30px] text-white/80 sm:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
    </div>
  );
};

export default FooterAboutUs;
