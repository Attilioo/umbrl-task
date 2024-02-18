export default function Navbar() {
  return (
    <section className="w-full">
      <nav className=" w-3/4 flex justify-between items-center mx-auto mt-6">
        <h1 className="rubik text-2xl md:block hidden">Brainwave.io</h1>
        <ul className="flex text-[15px] gilroy-bold items-center w-full md:flex-row md:justify-end flex-wrap">
          <li className="px-3">
            <a href="">Demos</a>
          </li>
          <li className="px-3">
            <a href="">Pages</a>
          </li>
          <li className="px-3">
            <a href="">Support</a>
          </li>
          <li className="px-3">
            <a href="">Contact</a>
          </li>
          <li className="px-3 border-l-2 border-l-[#D5D7DD]">
            <a href="">Sign-In</a>
          </li>
          <li className="px-3">
            <button className="bg-[#473BF0] text-white px-4 py-2 rounded-md hover:bg-[#3f35d0]">
              Sign-Up
            </button>
          </li>
        </ul>
      </nav>
    </section>
  )
}
