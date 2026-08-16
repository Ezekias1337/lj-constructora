// Library Imports
import { FC } from "react";
// CSS
import "./dependents/css/page-header.scss";

interface PageHeaderProps {
  title: string;
  includeBanner?: boolean;
  additionalClassNames?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  includeBanner,
  additionalClassNames,
}) => {
  return (
    <h1
      className={`page-title ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      } ${includeBanner === true ? "banner-title" : ""}`}
    >
      {title}
    </h1>
  );
};
