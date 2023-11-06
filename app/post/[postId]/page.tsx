import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {db} from "@/lib/db";
import {RefreshCache} from "@/components/refresh-cache";

async function getPost(postId: string) {
  const post = await db.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  return post;
}

export default async function PostPage({params}: {params: {postId: string}}) {
  const post = await getPost(params.postId);
  const postLastUpdated = post?.updatedAt.getTime();

  async function checkIfPostChanged() {
    "use server";
    const checkPost = await getPost(params.postId);
    const checkIfPostLastUpdated = checkPost?.updatedAt.getTime();

    const didChange = postLastUpdated !== checkIfPostLastUpdated;

    if (didChange) {
      revalidatePath("/login");

      return redirect("login");
    }

    console.log("didChange?", didChange);
  }

  return (
    <main className="flex flex-col items-center justify-center gap-5 py-20">
      <h1 className="text-3xl font-bold tracking-tighter">{post?.title}</h1>
      <p className="mt-3">{post?.content}</p>

      <RefreshCache check={checkIfPostChanged} />
      <div className="mt-4">
        <Link className="text-blue-500 underline" href="/">
          Back Home
        </Link>
      </div>
    </main>
  );
}

/*
a pesar de que vuelva a home y entre nuevamente al post/1 voy a seguir viendo data vieja
eso es porque se esta guardando la data en el cache del lado del client
para ver la nueva data hay que hacer un refresh (f5)

solucion: use-server
import Link from "next/link";
import {revalidatePath} from "next/cache";

import {db} from "@/lib/db";

async function getPost(postId: string) {
  const post = await db.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  return post;
}

export default async function PostPage({params}: {params: {postId: string}}) {
  const post = await getPost(params.postId);
  const postLastUpdated = post?.updatedAt.getTime();

  async function checkIfPostChanged() {
    "use server";
    const checkPost = await getPost(params.postId);
    const checkIfPostLastUpdated = checkPost?.updatedAt.getTime();

    const didChange = postLastUpdated !== checkIfPostLastUpdated;

    if (didChange) {
      revalidatePath("/");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center gap-5 py-20">
      <h1 className="text-3xl font-bold tracking-tighter">{post?.title}</h1>
      <p className="mt-3">{post?.content}</p>

      <form action={checkIfPostChanged}>
        <button type="submit">Check if post changed</button>
      </form>
      <div className="mt-4">
        <Link className="text-blue-500 underline" href="/">
          Back Home
        </Link>
      </div>
    </main>
  );
}
*/
/*
Refresh component automaticamente con un client component

creo: RefreshCache que recibe un check que sera una funcion que devuelve una promesa vacia

con esto ya no necesito el <form action={checkIfPostChanged}>
*/
