import { create } from "zustand";

export const useMethod = create<{
  method: string;
}>((set) => ({
  method: "Method",
}));



export const useURLInput = create<{
  url: string;
}>((set) => ({
  url: "",
}));


export const useFetchResult = create<{
  res: any;
}>((set) => ({
  res: {},
}));




export const useError = create<{
  error: string,
  visibility : boolean
}>((set) => ({
  error: "",
  visibility: false
}));