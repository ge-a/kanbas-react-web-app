import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Database from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    
    const assignment = Database.assignments.find(
        (assignment) => assignment._id === aid
    );

    if (!assignment) {
        return <div>Assignment not found.</div>;
    }

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h2 className="mb-4">Assignment Editor</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={assignment.title}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        defaultValue={assignment.description}
                    />
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="form-label fw-bold text-start">Points</label>
                        <input
                            id="wd-points"
                            value={assignment.points}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-group" className="form-label fw-bold text-start">Assignment Group</label>
                        <select id="wd-group" className="form-select" defaultValue="ASSIGNMENTS">
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
                            defaultValue={assignment.dueDate}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label fw-bold text-start">Available from</label>
                            <input
                                type="date"
                                id="wd-available-from"
                                defaultValue={assignment.availableFrom}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-to" className="form-label fw-bold text-start">Until</label>
                            <input
                                type="date"
                                id="wd-available-to"
                                defaultValue={assignment.availableTo}
                                className="form-control"
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
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger me-2">Save</Link>
                </div>
            </form>
        </div>
    );
}
