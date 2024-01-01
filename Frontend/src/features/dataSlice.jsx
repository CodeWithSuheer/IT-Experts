import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

//API URL
const formDataUrl = "http://localhost:5000/contact/allFormData";
const deleteMailUrl = "http://localhost:5000/contact/delete";

// GET ALL DATA ASYNC THUNK
export const allFormDataAsync = createAsyncThunk(
  "admin/formData",
  async (_, { getState }) => {
    const dbtoken = localStorage.getItem("token");
    // console.log('dbtoken',dbtoken)

    try {
      const response = await axios.get(formDataUrl, {
        headers: {
          Authorization: `Bearer ${dbtoken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      throw error;
    }
  }
);


export const deleteEmailAsync = createAsyncThunk("admin/deleteMail", async (userId) => {
  try {
    const dbtoken = localStorage.getItem("token");
    console.log('check', userId)
    const url = `${deleteMailUrl}/${userId}`;
    console.log('url', url)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${dbtoken}`,
      },
    });
    console.log('datare', response.data);
    toast.success("Email Deleted Successfully");
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
  }
}
);



// INITIAL STATE
const initialState = {
  loading: false,
  data: [],
  deleteMail: null,
  token: null,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // allFormDataAsync
      .addCase(allFormDataAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(allFormDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // allFormDataAsync
      .addCase(deleteEmailAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteEmailAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteMail = action.payload.message;
      })
  },
});

export default dataSlice.reducer;