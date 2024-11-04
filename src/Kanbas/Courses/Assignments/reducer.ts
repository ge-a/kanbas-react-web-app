import { createSlice } from "@reduxjs/toolkit";
import assignments from "../../Database/assignments.json"; // Adjust path as necessary

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        dueDate: assignment.dueDate,
        points: assignment.points,
        availableFrom: assignment.availableFrom,
        availableTo: assignment.availableTo,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      console.log("ASSIGNMENTID")
      console.log(assignmentId)
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const { 
  addAssignment, 
  deleteAssignment, 
  updateAssignment, 
  editAssignment 
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
