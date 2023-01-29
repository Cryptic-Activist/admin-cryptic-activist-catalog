import { FC } from "react";

import styles from "./styles.module.scss";
import { BreadcrumbProps } from "./types";

const Breadcrumb: FC<BreadcrumbProps> = ({ pathnameArray }) => {
  const breadcrumbs = pathnameArray.join(" | ");

  return <h1 className={styles.breadcrumb}>{breadcrumbs}</h1>;
};

export default Breadcrumb;
