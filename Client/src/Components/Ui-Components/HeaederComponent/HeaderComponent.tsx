import React from "react";
import { IHeaderComponent } from "../../../Helpers/interfaces";
import "./HeaderComponent.css";

export default function HeaderComponent(props: IHeaderComponent) {
  const { header, subHeader, btnText, btnEvent } = props;
  return (
      <div className="neato-header">
        <h2>{subHeader}</h2>
        <h1>{header}</h1>
    </div>
  );
}
