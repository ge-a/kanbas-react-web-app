export default function DeleteAssignment({ assignmentId, setAssignmentId, deleteAssignment } : {
    assignmentId: string; setAssignmentId: (name: string) => void; deleteAssignment: (assignmentId: string) => void 
}) {
    return (
        <div id="wd-delete-assignment-modal" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Are you sure you would like to remove the assignment? 
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                            onClick={() => console.log("Cancelled deletion of assignment ID:", assignmentId)} 
                        >
                            Cancel 
                        </button>
                        <button 
                            onClick={() => {
                                console.log("Deleting assignment ID:", assignmentId); // Log the assignment ID
                                deleteAssignment(assignmentId);
                            }}
                            type="button" 
                            data-bs-dismiss="modal" 
                            className="btn btn-danger"
                        >
                            Yes 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
