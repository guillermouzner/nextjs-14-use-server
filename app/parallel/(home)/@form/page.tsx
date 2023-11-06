export default async function FormPage() {
  const loadTime = 10000;

  await sleep(loadTime);

  return (
    <div>
      <div>Form Page loaded after {loadTime}ms</div>
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
