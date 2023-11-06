export default async function RendersPage() {
  const loadTime = 15000;

  await sleep(loadTime);

  return (
    <div>
      <div>Renders Page loaded after {loadTime}ms</div>
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
