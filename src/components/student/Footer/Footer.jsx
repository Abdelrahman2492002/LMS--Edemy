import FooterAboutUs from "./FooterAboutUs";
import FooterCopyRights from "./FooterCopyRights";
import FooterLinks from "./FooterLinks";
import SubscribeFooter from "./SubscribeFooter";
const Footer = () => {
  return (
    <footer className="font-inter bg-gray-900 sm:px-8 lg:px-32">
      <div className="grid grid-cols-1 gap-x-48 border-b border-white/30 pb-6 pt-11 font-light sm:grid-cols-2 sm:pb-10 lg:grid-cols-[1fr_143px_1fr] lg:gap-x-32">
        <FooterAboutUs />
        <FooterLinks />
        <SubscribeFooter />
      </div>
      <FooterCopyRights />
    </footer>
  );
};

export default Footer;
