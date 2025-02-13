import { assets } from "../../../assets/assets";

const CallToAction = () => {
  return (
    <div className="px-4 pb-36">
      <h1 className="mb-0 text-center text-xl font-semibold leading-[48px] text-gray-800 sm:mb-3 sm:text-3xl md:text-4xl">
        Learn anything, anytime, anywhere
      </h1>
      <p className="mx-auto max-w-[555px] text-center text-[13px] text-gray-800 sm:text-base">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-4">
        <button className="rounded-md bg-blue-600 px-3 py-2 text-xs text-white sm:px-7 sm:py-3 sm:text-sm">
          Get started
        </button>
        <button className="text-xs sm:text-sm">
          Learn more{" "}
          <img
            src={assets.arrow_icon}
            alt="arrow icon"
            className="ml-1 inline"
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
