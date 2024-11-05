import { createSlice } from "@reduxjs/toolkit";

const estadoIni = {
    
    ver: false,
    infoRM: [],
    pagAct: 1,
};
const reducers = createSlice({
    name: "holaAPP",
    initialState: estadoIni,
    reducers: {

        setRM: (state, action) => {
            state.infoRM = action.payload;
        },
        setPagAct: (state, action) => {
            state.pagAct = action.payload;
        }

    }

});

export const { setRM, setPagAct } = reducers.actions;
export default reducers.reducer;