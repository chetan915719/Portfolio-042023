import SectionHeading from "../(shared)/section-heading";

export default function Blogs() {
  return (
    <section id="blogs" className="pt-24">
      <div className="flex justify-center flex-col items-center">
        <SectionHeading name={"Blogs"} />
      </div>
      <div className="flex justify-center items-center py-10 min-h-[500px]">
        <p className="text-lg tracking-wider">
          Stay tuned for exciting content coming soon! We are working on some
          great blog posts that we can&apos;t wait to share with you.
        </p>
      </div>
    </section>
  );
}
