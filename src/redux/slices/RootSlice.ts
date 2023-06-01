import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        book_title: "Book Title",
        author_name: "Author Name",
        book_length: "Book Length",
        type_of_cover: "Type of Cover",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseBook_title: (state, action) => { state.book_title = action.payload }, //All we're doing is setting the input to the state.name
        chooseAuthor_name: (state, action) => { state.author_name = action.payload }, 
        chooseBook_length: (state, action) => { state.book_length = action.payload }, 
        chooseType_of_cover: (state, action) => { state.type_of_cover = action.payload }, 
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBook_title, chooseAuthor_name, chooseBook_length, chooseType_of_cover } = rootSlice.actions