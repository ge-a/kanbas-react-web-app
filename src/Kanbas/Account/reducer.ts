import { createSlice } from "@reduxjs/toolkit";
import enrollments from "../Database/enrollments.json"


const initialState = {
  currentUser: null,
  enrollments: enrollments, // Array to store enrollments for the current user
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addEnrollment: (state, {payload : enrollment}) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    removeEnrollment: (state, { payload: enrollmentId }) => {

      state.enrollments = state.enrollments.filter(
        (a: any) => a._id !== enrollmentId
      );
    },
  },
});

export const { setCurrentUser, addEnrollment, removeEnrollment } = accountSlice.actions;
export default accountSlice.reducer;
