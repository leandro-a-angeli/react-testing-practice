import todoReducer, { createTodo, fetchTodos } from "../../store/todoSlice";

describe("todoSlice reducer", () => {
  const initialState = { items: [], status: "idle", savingId: null };

  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle fetchTodos.pending", () => {
    const action = { type: fetchTodos.pending.type };
    const state = todoReducer(initialState, action);
    expect(state.status).toEqual("loading");
  });

  it("should handle fetchTodos.fulfilled", () => {
    const mockTodos = [{ id: "1", title: "Test Todo" }];
    const action = { type: fetchTodos.fulfilled.type, payload: mockTodos };
    const state = todoReducer(initialState, action);

    expect(state.status).toEqual("succeeded");
    expect(state.items).toEqual(mockTodos);
  });
  it("should handle createTodo", () => {
    const action = {
      type: createTodo.fulfilled.type,
      payload: { id: "1", title: "Test Todo 2" },
    };

    const state = todoReducer(initialState, action);
    expect(state.items.length).toBe(1);
  });
  it("verify added el correctly", () => {
    const action = {
      type: createTodo.fulfilled.type,
      payload: { id: "1", title: "Test Todo 2" },
    };

    const state = todoReducer(initialState, action);
    expect(state.items[0].title).toBe('Test Todo 2');
  });
});
