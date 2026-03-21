import React, { useReducer } from "react";

const initialState = {
  status: "idle",
  users: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case "FETCH_SUCCESS": {
      return {
        ...state,
        status: "success",
        users: action.payload,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

function Btap06() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: "Loi khi fetch",
      });
    }
  };

  return (
    <div>
      <h1>Fetch Users</h1>
      {state.status === "idle" && <p>Chua load</p>}
      {state.status === "loading" && <p>Loading....</p>}
      {state.status === "error" && (
        <>
          <p>{state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}
      {state.status === "success" && (
        <ul>
          {state.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchUsers}>Fetch</button>
    </div>
  );
}

export default Btap06;
