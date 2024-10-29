export default async function NewsPages({ params }) {
  const myParams = await params;
  return (
    <>
      <h1>Article number {myParams.id}</h1>
    </>
  );
}
