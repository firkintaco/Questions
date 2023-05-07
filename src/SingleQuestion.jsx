import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

const SingleQuestion = ({
  question: { id, title, info },
  activeId,
  toggleQuestion,
}) => {
  const isActive = id === activeId;

  return (
    <article className="question" key={id}>
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <HiXMark /> : <FaPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
