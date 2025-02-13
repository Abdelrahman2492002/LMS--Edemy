import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router";
import CourseRating from "../common/CourseRating";

const CourseCard = ({
  id,
  image,
  courseTitle,
  educatorName,
  courseRatings,
  price,
  discount,
}) => {
  const { currency } = useContext(AppContext);

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
          <div className="flex items-center gap-1">
            <CourseRating courseRatings={courseRatings} />
            <p className="text-sm text-gray-500">
              ({courseRatings.length}{" "}
              {courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
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
