import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

let initialState: {
    loading: boolean,
    users: any,
    error: string|undefined
}

initialState  = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async()=>{
    return axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=RZx0MUg2zyOE0ijEGAHp5P2ctcVbgTFz')
    // axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)

})



// export const getMaskedEmailAddress = createAsyncThunk<
//   SendMaskedEmailResponse,
//   PasswordSendTokenUserPrincipal,
//   {rejectValue: string;}
// >("getEmail/GetMaskedEmailAddress", async (data, thunkApi) => {
//   const API_URL = configs.API_BASE_URL; //(thunkApi.getState() as RootState).configs.API_BASE_URL;
//   const url = ${API_URL}/v1.0/Password/GetMaskedEmailAddress;
//   const res = await callAPI<SendMaskedEmailResponse>(url, data, "POST", thunkApi, "application/json", "Bearer " + sessionGetData("Authentication"));
//   return res;
// });

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
            state.users = payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, (state, {payload}) => {
            state.loading = false;
            state.users = [];
            state.error = String(payload);
        });
    }
});

export default userSlice.reducer;
export const {} = userSlice.actions;
