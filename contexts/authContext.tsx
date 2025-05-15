// lib/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, FirebaseAuthTypes, onAuthStateChanged } from '@react-native-firebase/auth';

type AuthContextType = {
    auth: ReturnType<typeof getAuth>;
    user: FirebaseAuthTypes.User | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseAuthTypes.User | null) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe; // unsubscribe on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ auth, user, loading, }}>
            {children}
        </AuthContext.Provider>
    );
}