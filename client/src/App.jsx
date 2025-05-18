import Default from "./layouts/Default";
import { MantineProvider } from '@mantine/core';
import ToastProvider from "./contexts/ToastContext/ToastProvider";

import '@mantine/core/styles.css';
import AuthProvider from "./contexts/AuthContext/AuthProvider";

export default function App() {
  return (
    <MantineProvider>
      <ToastProvider>
        <AuthProvider>
          <Default />
        </AuthProvider>
      </ToastProvider>
    </MantineProvider>
  )
}

