import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedIn = false;
  return (
    <main>
      <h1>Collect user feedback to make a better product</h1>
      <div>
        Create a feedback board in minutes to be able to prioritize what
        features users love
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn}></ButtonLogin>
    </main>
  );
}
