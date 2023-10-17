import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export let getData = createAsyncThunk('getDat/Data',async(_,thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        let data = (await fetch('http://localhost:3000/data')).json();
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})

let DataSlice = createSlice({
    name :'Data',
    initialState :{
        Data : [],
        categories :[],
        Loading:false,
        errors:false
    },
    extraReducers : {
        [getData.pending] : (state,action) => {
            state.Loading = true
        },
        [getData.fulfilled] : (state,action) => {
            state.Loading = false
            state.Data = action.payload
            state.categories = [...new Set(state.Data.map(ele => ele.category.name))]
        },
        [getData.rejected] : (state,action) => {
            state.Loading = false
            state.errors = action.payload
        }
    }
})

export default DataSlice.reducer