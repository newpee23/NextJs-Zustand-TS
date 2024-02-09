export interface todoType{
    todos: Array<string>,
    addTodo: (todo: string) => void,
    clearList: () => void,
    deleteItem: (todo: string) => void,
}