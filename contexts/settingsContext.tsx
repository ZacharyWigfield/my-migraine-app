import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserSettings = {
    theme: 'light' | 'dark' | 'system',
    userLocationPerm: boolean,
    userPhoneDataPerm: boolean,
    userOtherAppDataPerm: boolean,
    autoCreateEntryPerm: boolean
};

const defaultSettings: UserSettings = {
    theme: 'dark',
    userLocationPerm: false,
    userPhoneDataPerm: false,
    userOtherAppDataPerm: false,
    autoCreateEntryPerm: false
}

type SettingsContextType = {
    settings: UserSettings;
    // function lets you update any key in userSettings
    // uses generic type Key which is a key from user settings
    // arguments for function are a key of type Key, and a value of type 'that key's type'
    setUserSettings: <Key extends keyof UserSettings>(key: Key, value: UserSettings[Key]) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettingsState] = useState<UserSettings>(defaultSettings)

    useEffect(() => {
        (async () => {
            const savedSettingsStr: string | null = await AsyncStorage.getItem('settings');
            if (savedSettingsStr) {
                const savedSettings: UserSettings = JSON.parse(savedSettingsStr);
                setSettingsState(savedSettings);
            }
        })();
    }, []);

    const setUserSettings = async <Key extends keyof UserSettings>(
        key: Key,
        value: UserSettings[Key]
    ) => {
        const updated = { ...settings, [key]: value };
        setSettingsState(updated);
        await AsyncStorage.setItem("settings", JSON.stringify(updated));
    };

    return (
        <SettingsContext.Provider value={{ settings, setUserSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};