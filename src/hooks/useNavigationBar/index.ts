import { useStore } from "@nanostores/react";

import { navigationBar, toggleModal } from "@/stores/navigationBar";
import { ToggleModalParams } from "@/stores/navigationBar/types";

const useNavigationBar = () => {
  const $navigationBar = useStore(navigationBar);

  const handleToggleModal = (params: ToggleModalParams) => {
    toggleModal(params);
  };

  return { navigationBar: $navigationBar, handleToggleModal };
};

export default useNavigationBar;
