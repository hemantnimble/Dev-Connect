"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const signInAction = async (provider: string) => {
    await signIn(provider, { redirectTo: "/" });
    revalidatePath("/");
};

export const signOutAction = async () => {
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
};



