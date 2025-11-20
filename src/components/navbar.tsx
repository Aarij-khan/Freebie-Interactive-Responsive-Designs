function Navbar() {
  return (
    <div className="h-[66px] bg-white relative rounded-4xl flex items-center justify-end px-4">
      <img
        src="/logo.png"
        alt="logo"
        className="w-22 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex items-center gap-2">
        <img src="/flag.png" alt="flag" className="w-8 cursor-pointer" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
