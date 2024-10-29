export default async function NewsPages({ params }) {
  const myparams = await params;
  return (
    <>
      <h1>Article number {myparams.id}</h1>
    </>
  );
}
