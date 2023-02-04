import { map } from "nanostores";

import { NavigationBarState, ToggleModalParams } from "./types";

export const navigationBar = map<NavigationBarState>({
  drawers: {
    user: false,
  },
  tooltips: {
    user: false,
  },
  modals: {
    login: false,
    register: false,
  },
  status: "idle",
});

export const toggleModal = ({ modal }: ToggleModalParams) => {
  const current = navigationBar.get();
  current.modals[modal] = !current.modals[modal];

  navigationBar.set({
    modals: current.modals,
    drawers: current.drawers,
    tooltips: current.tooltips,
    status: current.status,
  });
};
