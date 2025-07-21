export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="NavBar"
      >
        <div className="flex"></div>
        <div className="flex justify-end">
          <a
            href="#intro"
            className="text-sm font-semibold leading-6 tracking-widest mr-5"
          >
            Intro
          </a>
          <a
            href="#about-me"
            className="text-sm font-semibold leading-6 tracking-widest mx-5"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-sm font-semibold leading-6 tracking-widest mx-5"
          >
            Skills
          </a>
          <a
            href="#work"
            className="text-sm font-semibold leading-6 tracking-widest mx-5"
          >
            Work
          </a>
          <a
            href="#blogs"
            className="text-sm font-semibold leading-6 tracking-widest mx-5"
          >
            Blogs
          </a>
          <a
            href="#contact-me"
            className="text-sm font-semibold leading-6 tracking-widest ml-5"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
