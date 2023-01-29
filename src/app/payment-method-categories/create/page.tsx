import Breadcrumb from "@/components/Breadcrumb";
import Back from "@/components/Buttons/Back";

import page from "./page.module.scss";

const PaymentMethodCategoriesPage = () => {
  return (
    <div className={page.container}>
      <header className={page.header}>
        <div className={page.pageBackHeading}>
          <Back />
          <Breadcrumb pathnameArray={["Payment Method Categories", "Create"]} />
        </div>
      </header>
    </div>
  );
};

export default PaymentMethodCategoriesPage;
