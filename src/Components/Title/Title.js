import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="">
        <h1 className="app-text-title">
          {name} <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
}
