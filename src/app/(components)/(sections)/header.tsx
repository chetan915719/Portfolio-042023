export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="NavBar"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Hello"
              className="h-8 w-auto"
            />
          </a>
        </div>
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
