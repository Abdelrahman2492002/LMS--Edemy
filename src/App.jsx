import NavBar from "./components/student/NavBar";
import Home from "./pages/student/Home";
import { Routes, Route, useMatch } from "react-router";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentsEnrolled";
import AddCourse from "./pages/educator/AddCourse";
const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="font-outFit">
      {!isEducatorRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />

        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
          <Route path="add-course" element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
