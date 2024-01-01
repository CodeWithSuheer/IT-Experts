import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//API URL
const loginUrl = "http://localhost:5000/AdminAuth";
const logoutUrl = "http://localhost:3000/api/logout";
const validateTokenUrl = "http://localhost:3000/api/validateToken";

// lOGIN ASYNC THUNK
export const loginuserAsync = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    try {
      const response = await axios.post(loginUrl, { username, password });
      //   const token = response.data.accessToken;
      //   console.log(response.data.accessToken);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

// lOGOUT ASYNC THUNK
export const logoutuserAsync = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.post(logoutUrl);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.msg);
  }
});

// Token Validation Async Thunk
// export const validateTokenAsync = createAsyncThunk(
//   "user/validateToken",
//   async (accessToken) => {
//     try {
//       const response = await axios.post(validateTokenUrl, accessToken);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       toast.error(error.response.data.msg);
//     }
//   }
// );

// INITIAL STATE
const initialState = {
  // user: savedUser || null,
  loading: false,
  logoutUser: null,
  clearUser: null,
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // loginuserAsync
      .addCase(loginuserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;

        const token = action.payload.token;
        if (token) {
          localStorage.setItem("token", token);
          state.token = token;
        }
      });

    // validateTokenAsync
    //   .addCase(validateTokenAsync.pending, (state, action) => {
    //     state.loading = true;
    //   })
    //   .addCase(validateTokenAsync.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.validateToken = action.payload;
    //   });
  },
});

export const { clearUser } = authSlice.actions;

export default authSlice.reducer;
