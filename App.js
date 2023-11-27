
import { UserProvider } from "./src/context/userContext";
import { NotifiProvider } from './src/context/notifiContext';
import 'react-native-gesture-handler';

import AppNav from "./src/navigation/index";

export default function App() {
  return (
    <UserProvider>
      <NotifiProvider>
        <AppNav />
      </NotifiProvider>
    </UserProvider>
  );
}

