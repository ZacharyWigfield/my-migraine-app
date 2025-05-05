// lib/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const AuthContext = createContext<{ user: FirebaseAuthTypes.User | null; loading: boolean;}>({
    user: null,
    loading: true,
  });

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((firebaseUser: FirebaseAuthTypes.User | null) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe; // unsubscribe on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);