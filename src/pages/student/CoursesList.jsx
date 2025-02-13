import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/common/SearchBar";
import { useParams } from "react-router";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer/Footer";

const CoursesList = () => {
  const [filterdCourses, setFilterdCourses] = useState([]);

  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      if (input) {
        const filterdCourses = allCourses.filter((course) =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase()),
        );
        setFilterdCourses(filterdCourses);
      } else {
        setFilterdCourses(allCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="px-8 pb-20 lg:px-36">
        <div className="mb-5 mt-20 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:gap-6">
          <div className="lg:self-end">
            <h1 className="mb-1 w-52 text-2xl font-semibold leading-10 text-gray-800 sm:text-4xl">
              Courses List
            </h1>
            <p className="text-gray-500">
              <span
                className="cursor-pointer text-sm text-blue-700"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              / Course List
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        {input && (
          <div className="mb-8 flex w-32 items-center justify-between rounded-sm border border-gray-500/30 px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-default">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt="cross icon"
              onClick={() => navigate("/courses-list")}
              className="cursor-pointer"
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-3 gap-y-8 px-8 sm:grid-cols-2 sm:px-0 md:grid-cols-3 xl:grid-cols-4">
          {filterdCourses.map((course) => (
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
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
