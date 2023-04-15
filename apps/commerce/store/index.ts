import { StateCreator } from 'zustand';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentUser } from '../api';

type StoreType = {
  count: number;
  inc: () => void;
  user: object;
  getCurrentUser: (id: string) => void;
};

const createProductSlice: StateCreator<StoreType> = (set) => ({
  count: 1,
  user: {},
  inc: () => set((state) => ({ count: state.count + 1 })),
  getCurrentUser: async (id: string) => {
    const result = await getCurrentUser({ id });
    set(() => ({ user: result.data }));
  },
});

export const useAppStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...createProductSlice(...a),
    }),
    {
      name: 'store',
    },
  ),
);
