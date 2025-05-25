import { useEffect } from 'react';
import { Dimensions, Pressable, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useAuth } from 'contexts/authContext';
import { signOut } from '@react-native-firebase/auth';

const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;

type PasswordInputProps = {
    isOpen: boolean
    closeDrawer: () => void;
};

export default function SideDrawer({ isOpen, closeDrawer }: PasswordInputProps) {
    // const [isOpen, setIsOpen] = useState(sideDrawerState);
    const router = useRouter();
    const translateX = useSharedValue(-DRAWER_WIDTH);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    // Animate drawer open/close based on isOpen prop
    useEffect(() => {
        translateX.value = withTiming(isOpen ? 0 : -DRAWER_WIDTH, { duration: 300 });
    }, [isOpen]);

    const navigate = (path: string) => {
        closeDrawer();
        router.push(path);
    };

    const { auth } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <>
            {/* Closes drawer when clicking outside of it */}
            {isOpen && (
                <Pressable onPress={closeDrawer} className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
            )}

            <Animated.View
                style={[animatedStyle, { width: DRAWER_WIDTH }]}
                className="absolute top-0 left-0 bottom-0 bg-white z-20 px-6 pt-28 shadow-lg"
            >
                <Text className="text-xl font-bold mb-6">Menu</Text>

                <TouchableOpacity onPress={() => navigate('/')} className="mb-4">
                    <Text className="text-lg">Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('/settings')} className="mb-4">
                    <Text className="text-lg">Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout} className="mb-4">
                    <Text className="text-lg">Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={closeDrawer}>
                    <Text className="text-lg text-red-500">Close</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
}