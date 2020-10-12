import React from "react";

export const H1 = ({ children }) => (
  <h1 className="is-size-1  is-size-2-mobile has-text-link has-text-weight-bold">
    {children}
  </h1>
);
export const H2 = ({ children }) => (
  <h2 className="is-size-2 is-size-3-mobile has-text-link">{children}</h2>
);
export const CatergoryTitle = ({ children }) => (
  <h2 className="is-size-1 is-size-2-mobile has-text-weight-bold has-text-link">
    {children}
  </h2>
);

export const P1 = ({ children }) => (
  <p className="is-size-4 is-size-5-mobile">{children}</p>
);
