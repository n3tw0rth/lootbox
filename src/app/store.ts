import { create } from "zustand";

export const useMethod = create<{
  method: string;
}>((set) => ({
  method: "Method",
}));



export const useURLInput = create<{
  url: string;
}>((set) => ({
  url: "https://",
}));