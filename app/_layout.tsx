import "global.css"
import { AuthProvider } from "contexts/authContext";
import { Slot} from "expo-router";
import { SettingsProvider } from "contexts/settingsContext";

// AuthProvider is a context we wrap the entire application in. This listens to firebase
// and lets us know if a user is logged in or not. This is used above to control routing
export default function RootLayout() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Slot />
      </SettingsProvider>
    </AuthProvider>
  );
}