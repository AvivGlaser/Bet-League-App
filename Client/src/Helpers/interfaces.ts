import React, {
    MouseEventHandler,
    ReactComponentElement,
    ReactNode,
  } from "react";
  import { AlertColor } from "@mui/material";

    export interface IFooterAnchor {
        tooltip: string;
        href: string;
        icon?: ReactNode;
      }
      export interface IHeaderComponent {
        header: string;
        subHeader?: string;
        btnText?: string;
        btnEvent?: string;
      }

      export interface IRoute {
        path?: string | any;
        element: ReactComponentElement<any> | any;
        linkText: string | any;
        visibility?: boolean;
        icon?: ReactNode;
        key?: string | any;
      }