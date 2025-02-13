const FooterLinks = () => {
  return (
    <div className="mt-14 sm:mt-0 sm:w-36">
      <h2 className="mb-2 text-center font-medium text-white sm:mb-8 sm:text-start">
        Company
      </h2>
      <ul className="flex items-center justify-center gap-3 text-sm leading-7 text-white/80 sm:block">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> About</a> us
        </li>
        <li>
          <a href="#"> Contact</a> us
        </li>
        <li>
          <a href="#"> Privacy</a> policy
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
