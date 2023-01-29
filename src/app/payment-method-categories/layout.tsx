"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";

import Button from "@/components/Buttons/Button";
import Breadcrumb from "@/components/Breadcrumb";

import { PaymentMethodCategoriesLayoutProps } from "./types";

import layout from "./layout.module.scss";

const PaymentMethodCategoriesLayout: FC<PaymentMethodCategoriesLayoutProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const isCreatePage = pathname?.includes("create");

  return (
    <div className={layout.container}>
      <Breadcrumb>
        {!isCreatePage && (
          <Button href="/payment-method-categories/create" icon={<FaPlus />} />
        )}
      </Breadcrumb>
      {children}
    </div>
  );
};

export default PaymentMethodCategoriesLayout;
