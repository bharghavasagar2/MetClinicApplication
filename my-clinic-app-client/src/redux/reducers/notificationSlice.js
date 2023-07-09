
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteById, getAllData, create_Update_ById } from '../commonSlice/commonSlice';

const fetchAllRecords = getAllData('notifications/fetchAllRecords', '/notifications');
const getRecordById = getAllData('notifications/getRecordById', '/notifications');
const deleteRecordById = deleteById('notifications/deleteRecordById', '/notifications');
const create_UpdateById = create_Update_ById('notifications/create_UpdateById', '/notifications');


const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    allnotifications: [],
    getnotificationById: null,
    deleteRecordById: null,
    create_UpdateById: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecords.fulfilled, (state, action) => {
        console.log(action.payload);
        state.allnotifications = action.payload;
      })
      .addCase(getRecordById.fulfilled, (state, action) => {
        state.getnotificationById = action.payload;
      })
      .addCase(deleteRecordById.fulfilled, (state, action) => {
        state.deleteRecordById = action.payload;
      })
      .addCase(create_UpdateById.fulfilled, (state, action) => {
        state.create_UpdateById = action.payload;
      });
  },
});

export { fetchAllRecords, getRecordById, deleteRecordById, create_UpdateById };
export default notificationsSlice.reducer;
