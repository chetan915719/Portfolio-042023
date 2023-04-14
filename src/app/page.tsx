import Header from "./(components)/header";
import Introduction from "./(components)/intro";
import About from "./(components)/about";
import Skills from "./(components)/skills";
import Work from "./(components)/work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="px-24">
        <Introduction />
        <About />
        <Skills />
        <Work />
      </div>
    </main>
  );
}
