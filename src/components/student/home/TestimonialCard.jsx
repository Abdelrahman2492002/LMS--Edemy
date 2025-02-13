import { assets } from "../../../assets/assets";
import CourseRating from "../../common/CourseRating";

const TestimonialCard = ({ ...props }) => {
  return (
    <article className="shadow-testimonialCard overflow-hidden rounded-lg border border-gray-200">
      <div className="flex gap-6 bg-lightGray px-4 pb-2 pt-4">
        <img src={props.image} alt={props.alt} className="w-12" />
        <div>
          <h4 className="text-lg text-gray-700">{props.name}</h4>
          <p className="text-xs text-gray-500">{props.role}</p>
        </div>
      </div>
      <div className="p-5 pb-7">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={i < props.rating ? assets.star : assets.star_blank}
            />
          ))}
        </div>
        <p className="pb-8 pt-3 text-sm text-gray-500">{props.feedback}</p>
        <button className="text-blue-600 underline">Read more</button>
      </div>
    </article>
  );
};

export default TestimonialCard;
