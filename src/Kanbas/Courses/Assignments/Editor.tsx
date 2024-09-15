export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on 
          Netlify. The landing page should include the following: Your full name and section, Links to each of the 
          lab assignments, Link to the Kanbas application, Links to all relevant source code repositories, The Kanbas
          application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr> <br />
            <label htmlFor="wd-group"> Assignment Group </label>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
            </select> <br /> <br />
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
            <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">PERCENTAGE</option>
                <option value="POINTS">POINTS</option>
                <option value="FRACTION">FRACTION</option>
            </select> <br /> <br />
            <label htmlFor="wd-submission-type"> Submission Type </label>
            <select id="wd-submission-type">
                <option selected value="ONLINE">ONLINE</option>
                <option value="IN PERSON">IN PERSON</option>
            </select> <br /> <br />
            <tr>
                <label>Online Entry Options</label><br/>

                <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-entry-options" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>

                <input type="checkbox" name="check-entry-options" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </tr><br/>
            
            <label htmlFor="wd-assign-to">Assign To</label><br/>
            <input id="wd-assign-to" value="Everyone" /><br /><br />

            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/> <br/>

            <label htmlFor="wd-available-from">Available from</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-to">Until</label><br/>
            <input type="date"
                id="wd-available-from"
                value="2024-05-06"/>
            &nbsp;
            <input type="date"
                id="wd-available-to"
                value="2024-05-20"/><br/>
            <hr /> <br/>
            <td align="right" valign="bottom">
                <button type="button">Cancel</button>
                <button type="button">Save</button>
            </td>
        </table>
      </div>
  );}
  