import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client"
import * as assignmentsClient from "./client"

export default function AssignmentEditor() {
    const [_id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [course, setCourse] = useState("");
    const [description, setDescription] = useState("");
    const [points, setAssignmentPoints] = useState(0);
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableTo, setAvailableTo] = useState("")
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isNewAssignment = aid === "new";
    const { assignments } = useSelector((state: any) => state.assignmentReducer);


    const notNewAssignment = assignments.find((assignment: any) => assignment._id === aid);
    if (notNewAssignment && _id === "") {
        setId(notNewAssignment._id);
        setTitle(notNewAssignment.title);
        setCourse(notNewAssignment.course);
        setDescription(notNewAssignment.description);
        setAssignmentPoints(notNewAssignment.points);
        setDueDate(notNewAssignment.dueDate);
        setAvailableFrom(notNewAssignment.availableFrom);
        setAvailableTo(notNewAssignment.availableTo)
    }

    async function handleSubmit() {
        debugger;
        const assignment = {
            _id,
            title,
            course,
            description,
            points,
            dueDate,
            availableFrom,
            availableTo
        };

        if (!isNewAssignment) {
            await assignmentsClient.updateAssignment(assignment)
            dispatch(updateAssignment(assignment));
        } else {
            assignment.course = cid!;
            const newAssignment = await coursesClient.createAssignmentForCourse(cid!, assignment);
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h2 className="mb-4">{isNewAssignment ? "New Assignment" : "Assignment Editor"}</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={title}
                        className="form-control"
                        placeholder='Assignment Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        value={description}
                        placeholder='Assignment Description'
                        onChange={(e) => (setDescription(e.target.value))}
                    />
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="form-label fw-bold text-start">Points</label>
                        <input
                            id="wd-points"
                            value={points}
                            className="form-control"
                            onChange={(e) => setAssignmentPoints(Number(e.target.value))}
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
                            value={dueDate}
                            className="form-control"
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label fw-bold text-start">Available from</label>
                            <input
                                type="date"
                                id="wd-available-from"
                                value={availableFrom}
                                className="form-control"
                                onChange={(e) => setAvailableFrom(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-to" className="form-label fw-bold text-start">Until</label>
                            <input
                                type="date"
                                id="wd-available-to"
                                value={availableTo}
                                className="form-control"
                                onChange={(e) => setAvailableTo(e.target.value)}
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
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
