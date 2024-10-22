import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  // Move the reducer function inside the component
  const workoutsReducer = (state, action) => {
    switch (action.type) {
      case "SET_WORKOUTS":
        return {
          workouts: action.payload,
        };
      case "CREATE_WORKOUT":
        return {
          workouts: [action.payload, ...state.workouts],
        };
      case "DELETE_WORKOUT":
        return {
          workouts: state.workouts.filter((w)=>w._id !== action.payload._id)
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

// Add prop validation for children
WorkoutsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
