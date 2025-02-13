import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const navigate = useNavigate();

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  const calculateRating = (courseRatings) => {
    if (!courseRatings.length) {
      return 0;
    }
    const sum = courseRatings.reduce((acc, rating) => acc + rating.rating, 0);

    return sum / courseRatings.length;
  };

  const calculateChapterTime = (chapter) => {
    let sum = chapter.chapterContent.reduce(
      (acc, lecture) => acc + lecture.lectureDuration * 60 * 1000,
      0,
    );
    return humanizeDuration(sum, { units: ["h", "m"] });
  };

  const calculateCourseTime = (course) => {
    let sum = course.courseContent.map((chapter) =>
      chapter.chapterContent.reduce(
        (acc, lecture) => acc + lecture * 60 * 1000,
        0,
      ),
    );
    return humanizeDuration(sum, { units: ["h", "m"] });
  };

  const calculateLecturesCount = (course) => {
    if (!Array.isArray(course.courseContent)) return 0;

    const totalLectures = course.courseContent.reduce((acc, chapter) => {
      if (Array.isArray(chapter.chapterContent.length)) {
        return acc + chapter.chapterContent.length;
      } else {
        return acc;
      }
    }, 0);
    return totalLectures;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    calculateRating,
    isEducator,
    setIsEducator,
    navigate,
    calculateChapterTime,
    calculateCourseTime,
    calculateLecturesCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
