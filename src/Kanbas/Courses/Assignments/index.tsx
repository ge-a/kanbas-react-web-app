import { FaSearch, FaPencilRuler, FaPlus } from 'react-icons/fa'; // Import the FaPlus icon
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5'; // Ensure to install react-icons if not already done
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control border-start-0" // Remove left border to blend with icon
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-light me-2"
            style={{ backgroundColor: '#f8f9fa' }} // Light gray background
          >
            + Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-danger" // Bootstrap class for red button
          >
            + Assignment
          </button>
        </div>
      </div>
      <div id="wd-title" className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <span className="fw-bold">ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center">
          <span
            className="rounded-pill border border-light text-center d-flex align-items-center justify-content-center"
            style={{ padding: '5px 10px', backgroundColor: '#f8f9fa', color: '#000' }} // Oval styling
          >
            40% of Total
          </span>
          <div className="ms-2 d-flex align-items-center">
            <FaPlus className="fs-5" /> {/* Using the FaPlus icon */}
            <IoEllipsisVertical className="fs-4 ms-2" />
          </div>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {[{
          id: '123', name: 'A1', description: 'Not available until May 6 at 12:00am |', due: 'Due May 13 at 11:59pm | 100pts',
        }, {
          id: '1234', name: 'A2', description: 'Not available until May 13 at 12:00am |', due: 'Due May 20 at 11:59pm | 100pts',
        }, {
          id: '12345', name: 'A3', description: 'Not available until May 20 at 12:00am |', due: 'Due May 27 at 11:59pm | 100pts',
        }].map((assignment) => (
          <li key={assignment.id} className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaPencilRuler style={{ color: 'green' }} className="me-2 fs-3" />
              <div className="ms-2">
                <a className="fw-bold" href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}>
                  {assignment.name}
                </a>
                <div>
                  <a href="#/modules" style={{ color: 'red' }}>
                    Multiple Modules
                  </a>
                  {' '}| {assignment.description}
                </div>
                <div className="text-muted">{assignment.due}</div>
              </div>
            </div>
            <div>
              <AssignmentControlButtons />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
