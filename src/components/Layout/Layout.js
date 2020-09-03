import React, { useState } from "react";
import { Page } from "@patternfly/react-core";
import { Header, NavSidebar } from "./";

import "@patternfly/patternfly/patternfly.css";
import "./Layout.scss";

export const Layout = ({ location, title, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Page
      header={<Header isNavOpen={isNavOpen} onNavToggle={onNavToggle} />}
      sidebar={<NavSidebar isNavOpen={isNavOpen} />}
      isManagedSidebar
      className="layout"
    >
      {children}
    </Page>
  );
};

export default Layout;