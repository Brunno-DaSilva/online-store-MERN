import React from "react";
import styled from "styled-components";

export default function Title({ name, title }) {
  return (
    <div className="main-title">
      <div className="">
        <h1 className="app-text-title">
          {name} <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
}
