import Hello from "../components/Hello";

export default function Home() {
  console.log("I'm a server component");
  return (
    <>
      <h1>Welcome to next.js</h1>
      <Hello/>
    </>
  );
}
