import Hello from "../components/Hello";

export default function Home() {
  console.log("I'm a server component");
  return (
    <>
      <h1 className="text-4xl font-bold tracking-wide">Welcome to the Home page</h1>
      <Hello/>
    </>
  );
}
