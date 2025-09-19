import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    errors: null,
    success: false
};

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (_, { rejectWithValue }) => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

            const users = await response.json();

            return users;

        } catch (err) {
            return rejectWithValue('Request failed!');
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearError: (state) => {
            state.errors = null;
        },
        clearSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.success = true;
        })
        builder.addCase(getUsers.rejected, (state) => {
            state.errors = action.payload;
            state.loading = false;
            state.success = false;
        })
    }
});

export const { clearError, clearSuccess } = userSlice.actions;
export default userSlice.reducer;