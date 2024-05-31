import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ZustandHookSelectors, createSelectorHooks } from "./selectorHooks";

interface IAuthState {
  token: string;
  expiresIn: number;
  updateAuth: ({
    token,
    expiresIn,
  }: {
    token: string;
    expiresIn: number;
  }) => void;
}

const store = create<IAuthState>()(
  persist(
    (set) => ({
      token: "",
      expiresIn: 0,
      updateAuth: ({ token, expiresIn }) =>
        set((state) => ({
          token: token ? token : state.token,
          expiresIn: expiresIn ? expiresIn : state.expiresIn,
        })),
    }),
    {
      name: process.env.REACT_APP_AUTH_KEY as string,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        expiresIn: state.expiresIn,
      }),
    },
  ),
);

const useAuthStore = createSelectorHooks(store) as typeof store &
  ZustandHookSelectors<IAuthState>;

export default useAuthStore;
