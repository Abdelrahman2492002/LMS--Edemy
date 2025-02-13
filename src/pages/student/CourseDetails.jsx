import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../../context/AppContext";
import LoadingState from "../../components/common/LoadingState";
import DOMPurify from "dompurify";
import Introduction from "../../components/student/course-details/left-side-course-dtails/Introduction";
import LeftSide from "../../components/student/course-details/left-side-course-dtails/leftSideCourseDetail";
import CourseStructure from "../../components/student/course-details/left-side-course-dtails/CourseStructure";
import CourseDescription from "../../components/student/course-details/left-side-course-dtails/CourseDescription";
import RightSide from "../../components/student/course-details/RightSide";
function CourseDetails() {
  const { allCourses } = useContext(AppContext);
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openLecture, setOpenLecture] = useState({});

  useEffect(() => {
    const foundCourse = allCourses.find((course) => course._id === id);
    if (foundCourse) {
      setCourseData(foundCourse);
    }
  }, [allCourses, id]);

  const toggleOpenlecture = (index) => {
    setOpenLecture((prev) => ({ ...prev, [index]: !openLecture[index] }));
  };

  if (!courseData) {
    return <LoadingState />;
  }

  const cleanDescription = DOMPurify.sanitize(
    courseData.courseDescription || "",
  );

  return (
    <div className="relative flex items-start justify-between px-36 pb-96 pt-32">
      <div className="absolute left-0 right-0 top-0 h-[500px] w-full bg-gradient-to-b from-cyan-100/70"></div>
      {/* Left Side */}
      <LeftSide>
        <Introduction
          courseData={courseData}
          cleanDescription={cleanDescription}
        />
        <CourseStructure
          courseData={courseData}
          openLecture={openLecture}
          toggleOpenlecture={toggleOpenlecture}
        />
        <CourseDescription cleanDescription={cleanDescription} />
      </LeftSide>
      {/* Right Side */}
      <RightSide />
      <div></div>
    </div>
  );
}

export default CourseDetails;
