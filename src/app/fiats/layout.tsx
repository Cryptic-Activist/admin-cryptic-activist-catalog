"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";

import Button from "@/components/Buttons/Button";
import Breadcrumb from "@/components/Breadcrumb";

import { FiatsLayoutProps } from "./types";

import layout from "./layout.module.scss";

const FiatsLayout: FC<FiatsLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isCreatePage = pathname?.includes("create");

  return (
    <div className={layout.container}>
      <Breadcrumb>
        {!isCreatePage && <Button href="/fiats/create" icon={<FaPlus />} />}
      </Breadcrumb>
      {children}
    </div>
  );
};

export default FiatsLayout;
