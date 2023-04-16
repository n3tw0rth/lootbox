import { create } from "zustand";

export const useMethod = create<{
  method: string;
}>((set) => ({
  method: "Select",
}));