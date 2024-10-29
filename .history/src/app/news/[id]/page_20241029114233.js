export default async function NewsPages({ params }) {
  const params = await params;
  return (
    <>
      <h1>Article number {params.id}</h1>
    </>
  );
}
