import { Link} from "react-router-dom";
import {useLocation, useParams } from "react-router"

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  const links = [
    "Home", 
    "Modules", 
    "Piazza", 
    "Zoom", 
    "Assignments", 
    "Quizzes", 
    "Grades", 
    "People"
  ];

  const basePath = `/Kanbas/Courses/${cid}`;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link} 
          to={`${basePath}/${link}`} 
          id={`wd-course-${link.toLowerCase()}-link`} 
          className={`list-group-item ${location.pathname === `${basePath}/${link}` ? 'active' : 'text-danger'} border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
