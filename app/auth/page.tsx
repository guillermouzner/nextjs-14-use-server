import {revalidatePath, revalidateTag} from "next/cache";
import {cookies} from "next/headers";
import Link from "next/link";
import {redirect} from "next/navigation";

import {RefreshCache} from "@/components/refresh-cache";

export default async function PostPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const validateToken = !!token;

  if (!token) redirect("/");

  async function checkAuth() {
    "use server";
    const cookieStoreServer = cookies();

    const tokenServer = cookieStoreServer.get("token");

    const validateTokenServer = !!tokenServer;

    // console.log("prueba");

    const didChange = validateToken !== validateTokenServer;

    if (didChange) {
      return revalidatePath("/");
    }

    console.log("6 Token didChange?", didChange);
  }

  return (
    <main className="flex flex-col items-center justify-center gap-5 py-20">
      <h1 className="text-3xl font-bold tracking-tighter">Cookies Auth from server</h1>
      <p className="mt-3">2</p>

      <RefreshCache check={checkAuth} />

      <div className="mt-4">
        <Link className="text-blue-500 underline" href="/">
          Back Home
        </Link>
      </div>
    </main>
  );
}
