import "./styles.css";
import "./components/atoms/button/PrimaryButton";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
