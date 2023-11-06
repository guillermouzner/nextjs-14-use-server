import {UserAuthForm} from "@/components/user-auth-form";

export default function LoginPage() {
  console.log("se renderiza?");

  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <UserAuthForm />
    </div>
  );
}
