import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return <div className="w-screen h-screen flex items-center justify-center"><SignIn /></div>;
}