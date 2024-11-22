import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentUser: null,
  enrollments: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setEnrollments: (state, actions) => {
      state.enrollments = actions.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: enrollment._id,
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

export const { setCurrentUser, addEnrollment, removeEnrollment, setEnrollments } = accountSlice.actions;
export default accountSlice.reducer;
