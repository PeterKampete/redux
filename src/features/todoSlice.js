import { createSlice } from "@reduxjs/toolkit";

// const [todoList, setTodoList] = useState([])

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo } = todoSlice.actions;

export default todoSlice.reducer;
