export default function HomeLayout({
  form,
  renders,
}: {
  form: React.ReactNode;
  renders: React.ReactNode;
}) {
  return (
    <section className="lg:overflow-y-hidden">
      <section className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[400px,1fr]">
        <aside className="overflow-y-auto overflow-x-hidden bg-red-400">{form}</aside>
        <article className="h-full overflow-y-auto bg-blue-300">{renders}</article>
      </section>
    </section>
  );
}
