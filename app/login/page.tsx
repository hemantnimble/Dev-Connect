'use client'
import { signInAction } from "@/actions/authActions";
import { useSession } from "next-auth/react";
import Link from "next/link"
import { redirect } from "next/navigation";

export default  function SignIn() {
  const session = useSession();
  if (session.data) {
    return redirect("/")
  }
  return (
    <>
      <Link href='/'>
        <button>-back</button>
      </Link>
      <form
        action={signInAction}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  )
} 