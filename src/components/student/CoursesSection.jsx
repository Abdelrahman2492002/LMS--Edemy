import { useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router";
import { AppContext } from "../../context/AppContext";
import SectionTitle from "../common/SectionTitle";
import SectionParagraph from "../common/SectionParagraph";
const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div>
      <SectionTitle title="Learn from the best" />
      <SectionParagraph
        text="  We bring together world-class instructors, interactive content, and a
    supportive community to help you achieve your personal and professional
    goals."
      />
      <div className="sm:px-15 lg:px-30 grid grid-cols-1 gap-x-3 gap-y-4 px-7 sm:grid-cols-2 md:px-20 lg:grid-cols-3 xl:grid-cols-4 xl:px-40">
        {allCourses.slice(0, 4).map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            image={course.courseThumbnail}
            courseTitle={course.courseTitle}
            educatorName={course.educator}
            courseRatings={course.courseRatings}
            price={course.coursePrice}
            discount={course.discount}
          />
        ))}
      </div>
      <Link
        className="mx-auto mt-11 block w-fit rounded border border-gray-500/20 px-6 py-2 text-sm text-gray-500 sm:px-10 sm:py-3 sm:text-base"
        to="/courses-list"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
