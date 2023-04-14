export default function FormBox() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white dark:shadow-md rounded p-4 max-w-md w-[400px]">
        <h2 className="text-3xl font-extrabold mb-2">Send us a message</h2>

        <form>
          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#D9D9D9]"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#D9D9D9]"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#D9D9D9]"
              id="subject"
              type="subject"
              placeholder="Subject"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="message"
            >
              Tell Us More About Your Website
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none dark:bg-[#D9D9D9]"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
