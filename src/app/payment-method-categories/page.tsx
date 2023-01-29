import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Buttons/Button";
import { FaPlus } from "react-icons/fa";

import page from "./page.module.scss";

const PaymentMethodCategories = () => {
  return (
    <div className={page.container}>
      <header className={page.header}>
        <Breadcrumb pathnameArray={["Payment Method Categories"]} />
        <Button href="/payment-method-categories/create" icon={<FaPlus />} />
      </header>
    </div>
  );
};

export default PaymentMethodCategories;
