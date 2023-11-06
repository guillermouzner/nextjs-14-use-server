export const dynamic = "force-dynamic";

export default async function RendersPage() {
  const loadTime = 9900;

  await sleep(loadTime);

  return (
    <div>
      <div>Renders Page loaded after {loadTime}ms</div>
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
