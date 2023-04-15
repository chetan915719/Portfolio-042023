import Header from "./(components)/(sections)/header";
import Introduction from "./(components)/(sections)/intro";
import About from "./(components)/(sections)/about";
import Skills from "./(components)/(sections)/skills";
import Work from "./(components)/(sections)/work";
import Blogs from "./(components)/(sections)/blogs";
import ContactMe from "./(components)/(sections)/contactme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="hidden md:block md:fixed md:w-full">
        <Header />
      </div>
      <div className="px-10 md:px-24">
        <Introduction />
        <About />
        <Skills />
        <Work />
        {/* <Blogs /> */}
        <ContactMe />
      </div>
    </main>
  );
}
