import { create } from 'zustand';

interface AuthState {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string) => boolean;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  users: [],
  signup: (email, password, name) => {
    const users = get().users;
    if (users.some(user => user.email === email)) {
      return false;
    }
    
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password,
      name
    };
    
    set(state => ({ users: [...state.users, newUser] }));
    set({ user: newUser });
    return true;
  },
  login: (email, password) => {
    const user = get().users.find(u => u.email === email && u.password === password);
    if (user) {
      set({ user });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null })
}));

export default useAuthStore;