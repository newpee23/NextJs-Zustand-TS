import { create } from 'zustand'
import { todoType } from "../types/todo";

export const useTodoList = create<todoType>((set) => ({
    todos: [],
    addTodo(todo: string) {
        set(state => ({ todos: [...state.todos, todo] }))
    },
    clearList() {
        set({ todos: [] });
    },
    deleteItem: (todo: string) => {
        set((state) => ({ todos: state.todos.filter(item => item !== todo) }));
    }
}));
