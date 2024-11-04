import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";
import { useState } from "react";
import ProtectedButton from "../../Account/ProtectedButton";

export default function AssignmentControlButtons({ assignmentId, setAssignmentId, deleteAssignment }: {
  assignmentId: string; setAssignmentId: (name: string) => void; deleteAssignment: (assignmentId: string) => void
}) {

  return (
    <div className="float-end">
      <ProtectedButton>
        <FaTrash
          className="text-danger me-2 mb-1"
          data-bs-toggle="modal"
          data-bs-target="#wd-delete-assignment-modal"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setAssignmentId(assignmentId);
            console.log("AT FATRASH assignment ID:", assignmentId);
          }
          }
        />
      </ProtectedButton>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignment assignmentId={assignmentId} setAssignmentId={setAssignmentId} deleteAssignment={deleteAssignment} />
    </div>
  );
}