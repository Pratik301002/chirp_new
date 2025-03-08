import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.getAll();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div>{data?.map((post) => <p key={post.id}>{post.content}</p>)}</div>
      </main>
    </HydrateClient>
  );
}
