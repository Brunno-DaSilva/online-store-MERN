import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1 className="app-text-title">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
