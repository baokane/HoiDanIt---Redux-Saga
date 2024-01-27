import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/backend"

export interface UserState {
    isPending: boolean;
    isError: boolean;
    data: IUser[];
    errors: any;

    isCreating: boolean;
    isCreateSuccess: boolean;

    isUpdating: boolean;
    isUpdateSuccess: boolean;

    isDeleting: boolean,
    isDeleteSuccess: boolean,
}

const initialState: UserState = {
    isPending: false,
    isError: false,
    data: [],
    errors: [],

    isCreating: false,
    isCreateSuccess: false,

    isUpdating: false,
    isUpdateSuccess: false,

    isDeleting: false,
    isDeleteSuccess: false,
}

export const fetchUserPending = createAction('fetchUserPending')
export const fetchUserSuccess = createAction<IUser[]>('fetchUserSuccess')
export const fetchUserFailed = createAction('fetchUserFailed')

export const createUserPending = createAction<{ name: string; email: string }>('createUserPending')
export const createUserSuccess = createAction('createUserSuccess')
export const createUserFailed = createAction('createUserFailed')

export const updateUserPending = createAction<{ id: number; name: string; email: string }>('updateUserPending')
export const updateUserSuccess = createAction('updateUserSuccess')
export const updateUserFailed = createAction('updateUserFailed')

export const deleteUserPending = createAction<{ id: number }>('deleteUserPending')
export const deleteUserSuccess = createAction('deleteUserSuccess')
export const deleteUserFailed = createAction('deleteUserFailed')

export const userSlide = createSlice({
    name: "user",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPending, (state, action) => {
                state.isPending = true
                state.isError = false
            })
            .addCase(fetchUserSuccess, (state, action) => {
                state.isPending = false
                state.isError = false
                state.data = action.payload
                console.log('>>> action:', action)
            })
            .addCase(fetchUserFailed, (state, action) => {
                state.isPending = false
                state.isError = true
            })

            .addCase(createUserPending, (state, action) => {
                state.isCreating = true
                state.isCreateSuccess = false
            })
            .addCase(createUserSuccess, (state, action) => {
                state.isCreating = false
                state.isCreateSuccess = true
            })

            .addCase(updateUserPending, (state, action) => {
                state.isUpdating = true
                state.isUpdateSuccess = false
            })
            .addCase(updateUserSuccess, (state, action) => {
                state.isUpdating = false
                state.isUpdateSuccess = true
            })

            .addCase(deleteUserPending, (state, action) => {
                state.isDeleting = true
                state.isDeleteSuccess = false
            })
            .addCase(deleteUserSuccess, (state, action) => {
                state.isDeleting = false
                state.isDeleteSuccess = true
            })
        //   .addCase(incrementAsync.fulfilled, (state, action) => {
        //     state.status = "idle"
        //     state.value += action.payload
        //   })
        //   .addCase(incrementAsync.rejected, (state) => {
        //     state.status = "failed"
        //   })
    },
})

export const { } = userSlide.actions



export default userSlide.reducer
