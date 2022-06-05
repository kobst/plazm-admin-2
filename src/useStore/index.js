import create from "zustand";

const useStore = create((set) => ({
  existingBusinessInfo: null,
  matchingBusinessInfo: [],
  photoImage: null,
  setExistingBusinessInfo: (existingBusinessInfo) =>
    set((state) => ({
      ...state,
      existingBusinessInfo,
    })),
  setMatchingBusinessInfo: (matchingBusinessInfo) =>
    set((state) => ({
      ...state,
      matchingBusinessInfo,
    })),
  setPhotoImage: (photoImage) =>
    set((state) => ({
      ...state,
      photoImage,
    })),
}));


export default useStore
