const SubscribeFooter = () => {
  return (
    <div className="hidden lg:block">
      <h2 className="mb-8 font-medium text-white">
        Subscribe to our newsletter
      </h2>
      <p className="text-sm text-white/80">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="mt-8 flex max-w-full flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-[38px] rounded border border-gray-500/30 bg-[#1F2937] px-3 text-sm text-gray-500 placeholder-gray-500"
        />
        <button className="h-[38px] rounded-[4px] bg-blue-700 px-3 text-sm text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeFooter;
