import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    "index": 0,
    FUN_FACTS: [
        "Honey never spoils",
        "Octopuses have three hearts",
        "The Eiffel Tower can be 6 inches taller during the summer",
        "The world's largest desert is not the Sahara; it's Antarctica",
        "Wombat feces are cube-shaped",
        "Bananas are berries, but strawberries are not",
        "Sloths only poop once a week",
        "The world's oldest known recipe is for beer",
        "A day on Venus is longer than its year",
        "Honeybees can recognize human faces",
        "Armadillos always give birth to identical quadruplets",
        "The unicorn is Scotland's national animal",
        "There's a basketball court on the fifth floor of the U.S. Supreme Court building",
        "The Guinness World Record for the most T-shirts worn at once is 260",
        "The Mantis shrimp has the most complex eyes in the animal kingdom"
    ]
}

const indexSlice = createSlice({
    name: "index",
    initialState: DEFAULT_STATE,
    reducers: {
        SET_INDEX: (state, action) => {
            state.index = action.payload;
        }
    }
});

export const { SET_INDEX } = indexSlice.actions;
export default indexSlice.reducer;
