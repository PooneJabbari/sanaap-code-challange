import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegistrationData {
  phone_number: string;
  first_name: string;
  last_name: string;
}

export const useRegistrationStore = create<
  RegistrationData & {
    set: (data: Partial<RegistrationData>) => void;
    clear: () => void;
  }
>()(
  persist(
    (set) => ({
      phone_number: "",
      first_name: "",
      last_name: "",
      set: (data) => set(data),
      clear: () =>
        set({
          phone_number: "",
          first_name: "",
          last_name: "",
        }),
    }),
    { name: "registration-storage" },
  ),
);
