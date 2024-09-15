import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="../../images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1235/Home">
              <img src="../../images/cs1235.jpg" width={200} />
              <div>
                <h5>
                  CS1235 Fundamentals of Computer Science
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn how to code!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1236/Home">
              <img src="../../images/cs1236.jpeg" width={200} />
              <div>
                <h5>
                  CS1236 Fundamentals of Computer Science 2
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn how to code but better!!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1237/Home">
              <img src="../../images/cs1237.png" width={200} />
              <div>
                <h5>
                  CS1237 Object Oriented Design
                </h5>
                <p className="wd-dashboard-course-title">
                  We will learn object oriented programming!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1238/Home">
              <img src="../../images/cs1238.jpeg" width={200} />
              <div>
                <h5>
                  CS1238 Algorithms and Data Structures
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn about important algorithms and data structures for programming problem solving!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1239/Home">
              <img src="../../images/cs1239.png" width={200} />
              <div>
                <h5>
                  CS1239 Theory of Computation
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn about the theory behind how computational problems are formulated!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1240/Home">
              <img src="../../images/cs1240.webp" width={200} />
              <div>
                <h5>
                  CS1240 Software Engineering
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn about software engineering principles!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1241/Home">
              <img src="../../images/cs1241.jpeg" width={200} />
              <div>
                <h5>
                  CS1241 Web Development
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn to develop websites!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1242/Home">
              <img src="../../images/cs1242.jpeg" width={200} />
              <div>
                <h5>
                  CS1242 Mobile App Development
                </h5>
                <p className="wd-dashboard-course-title">
                  Learn about developing mobile applications!
                </p>
                <button> Go </button>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
