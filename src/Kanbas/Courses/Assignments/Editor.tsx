import React from 'react';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h2 className="mb-4">Assignment Editor</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value="A1 - ENV + HTML"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                    >
                        The assignment is available online Submit a link to the landing page of your Web application running on 
                        Netlify. The landing page should include the following: Your full name and section, Links to each of the 
                        lab assignments, Link to the Kanbas application, Links to all relevant source code repositories, The Kanbas
                        application should include a link to navigate back to the landing page.
                    </textarea>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input
                            id="wd-points"
                            value={100}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <fieldset className="border rounded p-3 mb-3">
                    <legend className="col-form-label fw-bold">Submission Type</legend>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                            <select id="wd-submission-type" className="form-select">
                                <option selected value="ONLINE">ONLINE</option>
                                <option value="IN PERSON">IN PERSON</option>
                            </select>
                        </div>
                    </div>

                    <fieldset className="mb-3">
                        <legend className="col-form-label">Online Entry Options</legend>
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

                <fieldset className="border rounded p-3 mb-3">
                    <legend className="col-form-label fw-bold">Assign</legend>

                    <div className="mb-3">
                        <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                        <input
                            id="wd-assign-to"
                            value="Everyone"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                        <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                    </div>

                    <div className="mb-3 row">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                            <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-to" className="form-label">Until</label>
                            <input type="date" id="wd-available-to" value="2024-05-20" className="form-control" />
                        </div>
                    </div>
                </fieldset>

                <hr />
                
                <div className="float-end">
                    <button type="button" className="btn btn-secondary me-2">Cancel</button>
                    <button type="button" className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}
