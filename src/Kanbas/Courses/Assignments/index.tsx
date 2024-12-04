import { FaSearch, FaPencilRuler, FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';
import AssignmentControlButtons from './AssignmentControlButtons';
import { useSelector } from 'react-redux';
import { deleteAssignment, setAssignments } from "./reducer";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ProtectedButton from '../../Account/ProtectedButton';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [a_Id, setA_Id] = useState("");

  const userRole = useSelector((state: any) => state.accountReducer.currentUser.role);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    console.log(assignments)
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async () => {
    await assignmentsClient.deleteAssignment(a_Id);
    dispatch(deleteAssignment(a_Id));
  }

  const handleAddAssignment = () => {
    navigate(`new`);
  };

  return (
    <div id="wd-assignments" className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control border-start-0"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-light me-2"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            + Group
          </button>
          <ProtectedButton>
            <button
              id="wd-add-assignment"
              className="btn btn-danger"
              onClick={handleAddAssignment}
            >
              + Assignment
            </button>
          </ProtectedButton>
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
            style={{ padding: '5px 10px', backgroundColor: '#f8f9fa', color: '#000' }}
          >
            40% of Total
          </span>
          <div className="ms-2 d-flex align-items-center">
            <FaPlus className="fs-5" />
            <IoEllipsisVertical className="fs-4 ms-2" />
          </div>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaPencilRuler style={{ color: 'green' }} className="me-2 fs-3" />
              <div className="ms-2">
                {userRole === "FACULTY" ? (
                  <a className="fw-bold" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a>
                ) : (
                  <span className="fw-bold">{assignment.title}</span>
                )}
                <div>
                  <a href="#/modules" style={{ color: 'red' }}>
                    Multiple Modules
                  </a>
                  {' '}| {assignment.description}
                </div>
                <div className="text-muted">{assignment.dueDate}</div>
              </div>
            </div>
            <div>
              <AssignmentControlButtons assignmentId={assignment._id}
                setAssignmentId={setA_Id}
                deleteAssignment={
                  removeAssignment
                } />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
