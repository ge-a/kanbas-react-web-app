import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex flex-column flex-md-row" id="wd-home">
      <div className="flex-fill pe-3 mb-3 mb-md-0">
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
      <div className="d-block d-md-none">
        <CourseStatus />
      </div>
    </div>
  );
}
