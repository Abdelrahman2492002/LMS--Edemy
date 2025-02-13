import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const CourseRating = ({ courseRatings }) => {
  const { calculateRating } = useContext(AppContext);
  return (
    <div className="flex items-center text-sm">
      <p className="mr-1 font-medium">{calculateRating(courseRatings)}</p>
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={
            i < Math.floor(calculateRating(courseRatings))
              ? assets.star
              : assets.star_blank
          }
          alt="star icon"
          className="h-3.5 w-3.5"
        />
      ))}
   
    </div>
  );
};

export default CourseRating;
