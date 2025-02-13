import { useNavigate } from "react-router";
import { assets } from "../../assets/assets";
import { useState } from "react";

const SearchBar = (data) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data || "");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/courses-list/${input}`);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex h-10 w-full items-center gap-2 rounded-md border border-gray-500/20 p-1 sm:h-14 sm:max-w-xl"
    >
      <img
        src={assets.search_icon}
        alt="Search icon"
        className="ml-3 w-4 sm:ml-4 sm:w-6"
      />
      <input
        className="h-full flex-1 text-xs outline-none placeholder:text-default sm:text-default"
        type="text"
        placeholder="Search for courses"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="h-full rounded-md bg-blue-600 px-5 text-xs text-white sm:text-default md:w-36">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
