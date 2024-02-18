export default function Pricing() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center">
        <div>
          <label className="inline-flex items-center me-5 cursor-pointer">
            <span className=" text-md md:text-xl mr-2">Monthly</span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#473BF0]"></div>
            <span className="text-md md:text-xl ml-2">Yearly</span>
          </label>
          <span className="py-2 px-5 shadow-md no-underline rounded-full bg-[#473bf025] text-[#473bf0] font-bold">
            Save 25%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:w-3/4">
          <div className="border border-[#E7E9ED] p-8 rounded-lg">
            <p className="text-[#473BF0] gilroy-bold text-sm">STARTER</p>
            <div className="my-5">
              <span className="flex items-end">
                <p className="font-bold text-2xl">$</p>{' '}
                <p className="font-bold text-6xl">19</p>/month
              </span>
              <p className="text-[#161C2D]">billed Monthly</p>
            </div>
            <ul className="">
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Commercial License
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                100+ HTML UI Elements
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                01 Domain Support
              </li>
              <li className="flex py-3">
                <svg
                  fill="#D5D7DD"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
                6 Month Premium Support
              </li>
              <li className="flex py-3">
                <svg
                  fill="#D5D7DD"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
                Lifetime Updates
              </li>
            </ul>
            <button className="bg-[#473bf025] text-[#473bf0] font-bold w-full my-5 px-3 py-4 rounded-lg flex justify-between">
              <p> Start Free Trial</p>
              <svg
                width="24px"
                height="24px"
                fill="#473bf0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
              </svg>
            </button>

            <p className="text-[#161C2D] text-sm">No credit card required</p>
          </div>
          <div className="border border-[#E7E9ED] p-8 rounded-lg">
            <p className="text-[#473BF0] gilroy-bold text-sm">STANDARD</p>
            <div className="my-5">
              <span className="flex items-end">
                <p className="font-bold text-2xl">$</p>{' '}
                <p className="font-bold text-6xl">49</p>/month
              </span>
              <p className="text-[#161C2D]">billed Monthly</p>
            </div>
            <ul className="">
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Commercial License
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                100+ HTML UI Elements
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Unlimited Domain Support
              </li>
              <li className="flex py-3">
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                6 Month Premium Support
              </li>
              <li className="flex py-3">
                <svg
                  fill="#D5D7DD"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
                Lifetime Updates
              </li>
            </ul>
            <button className="bg-[#473bf0] text-white font-bold w-full my-5 px-3 py-4 rounded-lg flex justify-between">
              <p> Start Free Trial</p>
              <svg
                width="24px"
                height="24px"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
              </svg>
            </button>

            <p className="text-[#161C2D] text-sm">No credit card required</p>
          </div>
          <div className="border border-[#E7E9ED] p-8 rounded-lg">
            <p className="text-[#473BF0] gilroy-bold text-sm">STANDARD</p>
            <div className="my-5">
              <span className="flex items-end">
                <p className="font-bold text-2xl">$</p>{' '}
                <p className="font-bold text-6xl">99</p>/month
              </span>
              <p className="text-[#161C2D]">billed Monthly</p>
            </div>
            <ul className="">
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Commercial License
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                100+ HTML UI Elements
              </li>
              <li className="flex py-3">
                {' '}
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Unlimited Domain Support
              </li>
              <li className="flex py-3">
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                6 Month Premium Support
              </li>
              <li className="flex py-3">
                <svg
                  width="24"
                  height="24"
                  fill="#68D585"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                </svg>
                Lifetime Updates
              </li>
            </ul>
            <button className="bg-[#473bf025] text-[#473bf0] font-bold w-full my-5 px-3 py-4 rounded-lg flex justify-between">
              <p> Start Free Trial</p>
              <svg
                width="24px"
                height="24px"
                fill="#473bf0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
              </svg>
            </button>

            <p className="text-[#161C2D] text-sm">No credit card required</p>
          </div>{' '}
        </div>
      </div>
    </section>
  )
}
