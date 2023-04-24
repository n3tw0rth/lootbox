import { create } from "zustand";

export const useMethod = create<{
  method: string;
}>((set) => ({
  method: "Method",
}));



export const useURLInput = create<{
  url: string;
}>((set) => ({
  url: "https://catfact.ninja/fact",
}));


export const useFetchResult = create<{
  res: any;
}>((set) => ({
  res: "null",
}));