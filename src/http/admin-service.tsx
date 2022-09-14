import { AppDispatch } from "../Redux/store";
import { api } from "./api";
import { setExamData } from "../Redux/examSlice";
import { setActiveUser } from "../Redux/userSlice";

export const adminService = {
  setExamData: async (dispatch: AppDispatch) => {
    try {
      const response = await api.get(`/web`);
      // console.log("result is", response);
      if (response) {
        dispatch(setExamData(response));
        return Promise.resolve(response);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
  setActiveUser: async (dispatch: AppDispatch) => {
    try {
      const response = await api.get(`/web/profile`);
      if (response) {
        dispatch(setActiveUser(response.data));
        return Promise.resolve(response.data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },

  submitExam: async (resultId: string) => {
    try {
      const response = await api.patch(`/web/result/${resultId}`, {
        isCompleted: true,
      });
      if (response) {
        return Promise.resolve(response);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
