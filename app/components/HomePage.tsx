'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function HomePage() {
    const { data: session } = useSession();

    return (
        <>
            <h1>PhyGital.!</h1>
            <p>{session?.user?.name || "not logged in"}</p>
            <p>{session?.user?.email || "not logged in"}</p>

            {!session ? (
                <Link href='/login'>Login</Link>
            ) : (
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    Sign Out
                </button>
            )}
        </>
    );
}

export default HomePage;
