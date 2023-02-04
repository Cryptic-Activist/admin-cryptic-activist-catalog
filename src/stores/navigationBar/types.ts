export type NavigationBarState = {
  drawers: {
    user: boolean;
  };
  tooltips: {
    user: boolean;
  };
  modals: {
    login: boolean;
    register: boolean;
  };
  status: "idle";
};

export type ToggleModalParams = {
  modal: "login" | "register";
};
