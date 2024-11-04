import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Database from '../../Database';

export default function AssignmentEditor({
    assignmentDetails,
    setAssignmentDetails,
    changeAssignment,
}: {
    assignmentDetails: { title: string, description: string, dueDate: string, points: number, availableFrom: string, availableTo: string };
    setAssignmentDetails: (details: { title: string, description: string, dueDate: string, points: number, availableFrom: string, availableTo: string }) => void;
    changeAssignment: () => void;
}) {
    const { cid, aid } = useParams();
    const navigate = useNavigate();

    // Check if we're creating a new assignment
    const isNewAssignment = aid === "new";
    const assignment = isNewAssignment ? null : Database.assignments.find(
        (assignment) => assignment._id === aid
    );

    // If editing an existing assignment, load its details into the state
    React.useEffect(() => {
        if (!isNewAssignment && assignment) {
            setAssignmentDetails({
                title: assignment.title,
                description: assignment.description,
                dueDate: assignment.dueDate,
                points: assignment.points,
                availableFrom: assignment.availableFrom,
                availableTo: assignment.availableTo
            });
        }
    }, [assignment, isNewAssignment, setAssignmentDetails]);

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h2 className="mb-4">{isNewAssignment ? "New Assignment" : "Assignment Editor"}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={assignmentDetails.title}
                        className="form-control"
                        placeholder='Assignment Title'
                        onChange={(e) => setAssignmentDetails({ ...assignmentDetails, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        value={assignmentDetails.description}
                        placeholder='Assignment Description'
                        onChange={(e) => setAssignmentDetails({ ...assignmentDetails, description: e.target.value })}
                    />
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="form-label fw-bold text-start">Points</label>
                        <input
                            id="wd-points"
                            value={assignmentDetails.points}
                            className="form-control"
                            onChange={(e) => setAssignmentDetails({ ...assignmentDetails, points: Number(e.target.value) })}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-group" className="form-label fw-bold text-start">Assignment Group</label>
                        <select
                            id="wd-group"
                            className="form-select"
                            defaultValue="ASSIGNMENTS"
                        >
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <fieldset className="border rounded p-3 mb-3">
                    <legend className="col-form-label fw-bold">Assign</legend>

                    <div className="mb-3">
                        <label htmlFor="wd-assign-to" className="form-label fw-bold text-start">Assign To</label>
                        <input
                            id="wd-assign-to"
                            value="Everyone"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="wd-due-date" className="form-label fw-bold text-start">Due</label>
                        <input
                            type="date"
                            id="wd-due-date"
                            value={assignmentDetails.dueDate}
                            className="form-control"
                            onChange={(e) => setAssignmentDetails({ ...assignmentDetails, dueDate: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label fw-bold text-start">Available from</label>
                            <input
                                type="date"
                                id="wd-available-from"
                                value={assignmentDetails.availableFrom}
                                className="form-control"
                                onChange={(e) => setAssignmentDetails({ ...assignmentDetails, availableFrom: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-to" className="form-label fw-bold text-start">Until</label>
                            <input
                                type="date"
                                id="wd-available-to"
                                value={assignmentDetails.availableTo}
                                className="form-control"
                                onChange={(e) => setAssignmentDetails({ ...assignmentDetails, availableTo: e.target.value })}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="border rounded p-3 mb-3">
                    <legend className="col-form-label fw-bold">Submission Type</legend>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-submission-type" className="form-label fw-bold text-start">Submission Type</label>
                            <select id="wd-submission-type" className="form-select" defaultValue="ONLINE">
                                <option value="ONLINE">ONLINE</option>
                                <option value="IN PERSON">IN PERSON</option>
                            </select>
                        </div>
                    </div>

                    <fieldset className="mb-3">
                        <legend className="col-form-label fw-bold">Online Entry Options</legend>
                        <div className="form-check">
                            <input type="checkbox" name="check-entry-options" id="wd-text-entry" className="form-check-input" />
                            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-entry-options" id="wd-website-url" className="form-check-input" />
                            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-entry-options" id="wd-media-recordings" className="form-check-input" />
                            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recording</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-entry-options" id="wd-student-annotation" className="form-check-input" />
                            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-entry-options" id="wd-file-upload" className="form-check-input" />
                            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                        </div>
                    </fieldset>
                </fieldset>


                <hr />

                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                    <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                            changeAssignment();
                            navigate(`/Kanbas/Courses/${cid}/Assignments`);
                        }}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
