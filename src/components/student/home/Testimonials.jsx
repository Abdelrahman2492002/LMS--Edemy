import { dummyTestimonial } from "../../../assets/assets";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "../../common/SectionTitle";
import SectionParagraph from "../../common/SectionParagraph";

const Testimonials = () => {
  return (
    <div className="pb-44">
      <SectionTitle title="Testimonials" />
      <SectionParagraph text="Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives." />
      <div className="sm:px-15 mx-auto grid grid-cols-1 gap-x-3 gap-y-4 px-6 sm:grid-cols-2 md:px-20 xl:grid-cols-3 xl:px-52">
        {dummyTestimonial.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            alt={testimonial.name}
            name={testimonial.name}
            role={testimonial.role}
            rating={testimonial.rating}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
