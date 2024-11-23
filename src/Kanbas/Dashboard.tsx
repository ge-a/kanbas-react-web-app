import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedButton from "./Account/ProtectedButton";
import ProtectedStudents from "./Account/ProtectStudents";
import * as enrollmentsClient from "./Dashboard/client";
import { addEnrollment, removeEnrollment, setEnrollments } from "./Account/reducer"; // Import actions

type DashboardProps = {
  courses: any[];
  course: any;
  allCourses: any[];
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
};

export default function Dashboard({
  courses: initialCourses,
  course,
  allCourses: initialAllCourses,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState(initialCourses);
  const [allCourses, setAllCourses] = useState(initialAllCourses);
  const [showEnrollments, setShowEnrollments] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const dispatch = useDispatch();

  const fetchEnrollments = async () => {
    const enrollments = await enrollmentsClient.getEnrollmentsForUser(currentUser?._id);
    dispatch(setEnrollments(enrollments));
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    const enrolledCourseIds = enrollments.map((enrollment: any) => enrollment.course);
    setCourses(initialAllCourses.filter((course) => enrolledCourseIds.includes(course._id)));
    setAllCourses(initialAllCourses);
  }, [enrollments, initialAllCourses]);

  const handleEnroll = async (courseId: string) => {
    const enrollment = {
      user: currentUser?._id,
      course: courseId,
    };
    const newEnrollment = await enrollmentsClient.enrollUserInCourse(enrollment);
    dispatch(addEnrollment(newEnrollment));
  };

  const handleUnenroll = async (courseId: string) => {
    const enrollmentId = enrollments.find(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    )?._id;
    if (!enrollmentId) return;
    await enrollmentsClient.deleteEnrollment(enrollmentId);
    dispatch(removeEnrollment(enrollmentId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <div className="d-flex flex-column">
        <ProtectedButton>
          <h5>New Course</h5>
        </ProtectedButton>
        <ProtectedButton>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <div className="d-flex justify-content-end mb-2">
            <button
              className="btn btn-warning me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <button
              className="btn btn-primary"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
          </div>
          <hr />
        </ProtectedButton>
        <ProtectedStudents>
          <div style={{ marginLeft: "auto", marginTop: "10px" }}>
            <button
              className="btn btn-info"
              onClick={() => {
                setShowEnrollments(!showEnrollments);
                setShowAllCourses(false);
              }}
            >
              Enrollments
            </button>
          </div>
        </ProtectedStudents>
      </div>

      {/* Enrollments Modal */}
      {showEnrollments && (
        <div className="wd-dashboard-courses">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{showAllCourses ? "All Courses" : "Enrolled Courses"}</h2>
            {/* Show All Courses / Show Enrolled Only Button */}
            <button
              className="btn btn-info"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
            </button>
          </div>
          <hr />
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {(showAllCourses ? allCourses : courses).map((course) => {
              const isEnrolled = enrollments.find(
                (enrollment: any) =>
                  enrollment.user === currentUser?._id && enrollment.course === course._id
              );

              return (
                <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <button className="btn btn-primary">Go</button>
                      </Link>
                      {isEnrolled ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Display the number of enrolled courses */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    <ProtectedButton>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </ProtectedButton>
                    <ProtectedButton>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </ProtectedButton>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
