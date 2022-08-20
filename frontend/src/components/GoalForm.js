import { useState } from "react";
import { useDispatch } from "react-redux";

import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="text">Enter a Goal</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="text"
            id="text"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
