import Card from "@/components/Card";
import LoginForm from "@/ui/auth/LoginForm";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";

export default function Page() {
  return (
    <Card>
      <h1>Auth</h1>
      <LoginForm />
    </Card>
  );
}
