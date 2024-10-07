import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();
  const basePath = "/Kanbas/Courses/1234";

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to={`${basePath}/Home`} 
        id="wd-course-home-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Home` ? 'active' : 'text-danger'} border border-0`}
      >
        Home 
      </Link>
      <Link 
        to={`${basePath}/Modules`} 
        id="wd-course-modules-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Modules` ? 'active' : 'text-danger'} border border-0`}
      >
        Modules 
      </Link>
      <Link 
        to={`${basePath}/Piazza`} 
        id="wd-course-piazza-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Piazza` ? 'active' : 'text-danger'} border border-0`}
      >
        Piazza 
      </Link>
      <Link 
        to={`${basePath}/Zoom`} 
        id="wd-course-zoom-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Zoom` ? 'active' : 'text-danger'} border border-0`}
      >
        Zoom 
      </Link>
      <Link 
        to={`${basePath}/Assignments`} 
        id="wd-course-assignments-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Assignments` ? 'active' : 'text-danger'} border border-0`}
      >
        Assignments 
      </Link>
      <Link 
        to={`${basePath}/Quizzes`} 
        id="wd-course-quizzes-link" 
        className={`list-group-item ${location.pathname === `${basePath}/Quizzes` ? 'active' : 'text-danger'} border border-0`}
      >
        Quizzes 
      </Link>
      <Link 
        to={`${basePath}/People`} 
        id="wd-course-people-link" 
        className={`list-group-item ${location.pathname === `${basePath}/People` ? 'active' : 'text-danger'} border border-0`}
      >
        People 
      </Link>
    </div>
  );
}
