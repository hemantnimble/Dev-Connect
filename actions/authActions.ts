"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");

};


export const signInAction = async () => {
  "use server";
  await signIn("google");
};