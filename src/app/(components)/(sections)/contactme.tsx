import SectionHeading from "../(shared)/section-heading";

export default function ContactMe() {
  return (
    <section id="contact-me" className="pt-24">
      <div className="flex justify-center flex-col items-center">
        <SectionHeading name={"Contact Me"} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl p-5 my-5">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <p className="mt-4 text-lg text-gray-500">
            Have a question or want to work together? Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-500 py-2"
            >
              Full name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="name"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-[50px]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500  py-2"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-[50px]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-500  py-2"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
