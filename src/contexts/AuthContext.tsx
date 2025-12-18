import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('memorymax_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name: email.split('@')[0],
    };
    
    localStorage.setItem('memorymax_user', JSON.stringify(newUser));
    setUser(newUser);
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
    };
    
    localStorage.setItem('memorymax_user', JSON.stringify(newUser));
    setUser(newUser);
    setIsLoading(false);
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: crypto.randomUUID(),
      email: 'user@gmail.com',
      name: 'Google User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google',
    };
    
    localStorage.setItem('memorymax_user', JSON.stringify(newUser));
    setUser(newUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('memorymax_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
