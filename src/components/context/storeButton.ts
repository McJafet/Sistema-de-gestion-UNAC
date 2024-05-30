import { create } from "zustand";

type State = {
  show: boolean;
};

type Action = {
  toggleShowButton: (show: State["show"]) => void;
};

export const useToggleButton = create<State & Action>((set) => ({
  show: false,
  toggleShowButton: (show) => set(() => ({ show: show })),
}));
