import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router";

const CourseCard = ({
  id,
  image,
  courseTitle,
  educatorName,
  courseRatings,
  price,
  discount,
}) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link
      to={`/course/${id}`}
      className="flex max-w-full flex-col overflow-hidden rounded-lg border border-gray-500/30"
      onClick={() => scrollTo(0, 0)}
    >
      <img src={image} alt="course thumnails" className="max-w-full" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="font-semibold leading-5">{courseTitle}</h4>
        <div className="flex flex-1 flex-col justify-end gap-2">
          <p className="text-sm text-gray-600">{educatorName}</p>
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
            <p className="ml-1 text-gray-500">({courseRatings.length})</p>
          </div>
          <data className="font-semibold text-gray-800" value="10.99">
            {currency}
            {(price - (discount * price) / 100).toFixed(2)}
          </data>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
