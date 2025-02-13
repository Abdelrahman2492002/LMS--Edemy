import humanizeDuration from "humanize-duration";
import { assets } from "../../../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const CourseStructure = ({ courseData, openLecture, toggleOpenlecture }) => {
  const { calculateLecturesCount, calculateChapterTime, calculateCourseTime } =
    useContext(AppContext);

  return (
    <div className="pt-14">
      <h2 className="text-xl font-semibold text-gray-800">Course Structure</h2>

      <div>
        {courseData.courseContent.map((chapter, index) => (
          <div
            key={index}
            className="border border-b-0 border-t-2 border-gray-300 text-sm text-gray-800 first:border-t last:border-b"
          >
            <div
              onClick={() => toggleOpenlecture(index)}
              className="flex cursor-pointer justify-between border-b border-gray-300 bg-gray-100 px-6 py-4"
            >
              <div className="flex gap-3">
                <img
                  src={assets.down_arrow_icon}
                  alt="down arrow icon"
                  className={`transition-transform duration-300 ${openLecture[index] ? "rotate-180" : "rotate-0"}`}
                />
                <h3 className="text-base font-medium">
                  {chapter.chapterTitle}
                </h3>
              </div>
              <div>
                <p>
                  {chapter.chapterContent.length} lectures -{" "}
                  {calculateChapterTime(chapter)}
                </p>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${openLecture[index] ? "max-h-96" : "max-h-0"}`}
            >
              <ul className="p-5">
                {chapter.chapterContent.map((lecture, index) => (
                  <li key={index} className="mb-4 flex justify-between">
                    <div className="flex flex-1 gap-3">
                      <img src={assets.play_icon} alt="play icon" />
                      <h4 className="text-default">{lecture.lectureTitle}</h4>
                    </div>
                    <div className="flex gap-2">
                      {lecture.isPreviewFree && (
                        <p className="cursor-pointer text-blue-600">Preview</p>
                      )}
                      {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                        units: ["h", "m"],
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
