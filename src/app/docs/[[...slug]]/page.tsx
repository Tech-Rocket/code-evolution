export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for <span className="font-bold uppercase">feature </span>
        {slug[0]} and <span className="font-bold uppercase">concept </span>
        {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return (
      <h1>
        Viewing docs for <span className="font-bold uppercase">feature </span>
        {slug[0]}
      </h1>
    );
  }
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}
