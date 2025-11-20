import Navbar from "./navbar";

function Hero() {
  const items = [
    "Cursus Integer",
    "Integer Consequat",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];
  return (
    <div className="w-full bg-[#FEEDBC] [clip-path:polygon(0%_0%,100%_0,100%_90%,0_100%)]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="pt-10">
            <Navbar />
          </div>

          <div className="flex justify-between items-center lg:flex-row flex-col py-6">
            <div className="lg:w-[50%] w-full flex flex-col gap-6">
              <div>
                <h1 className="text-[#F9B800] text-[22px] font-bold ">
                  RISUS PRAESENT VULPUTATE
                </h1>
                <h1 className="text-[60px] font-bold leading-[80px]">
                  Cursus Integer Consequat Tristique.
                </h1>
              </div>
              <div className="flex gap-4 flex-wrap w-full">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-fit rounded-3xl bg-white text-black flex items-center justify-between gap-2 py-2 px-4 "
                  >
                    <img
                      src="/tick.png"
                      alt=""
                      className="h-7 w-7 object-cover"
                    />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#F9B800] font-semibold flex items-center gap-2 w-fit px-6 py-3 rounded-3xl cursor-pointer">
                Lorem ipsum
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="lg:w-[50%] w-full">
              <img
                src="/hero-vector.png"
                alt="hero"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
          <div className="w-full [clip-path:polygon(0_10%,100%_0,100%_90%,0_100%)] md:[clip-path:polygon(0_20%,100%_0,100%_80%,0_100%)] bg-[#f7ad07] ">
            <div className="max-w-[1480px] mx-auto">
              <div className="w-[90%] mx-auto">
                <div className=" py-24 flex justify-between items-center h-auto lg:h-screen lg:flex-row flex-col-reverse ">
                  <div className="w-full lg:w-[50%] text-center">
                    <div className="lg:max-w-[500px] pb-10 md:pt-10">
                      <h4 className="text-[40px] font-bold leading-[50px]">
                        Phasellus a vitae iaculis magna eleifend pulvinar velit
                        odio.
                      </h4>
                      <h2 className="text-[20px] underline leading-[34px] mt-6">
                        Vulputate et vulputate suspendisse natoque!
                      </h2>
                      <p className="text-[16px] mt-1">
                        Euismod magna id purus eget nunc ligula suspendisse dui
                        netus. Condimentum blandit rutrum at mauris enim
                        pulvinar duis etiam duis vulputate et vulputate
                        suspendisse natoque id tellus consectetur pulvinar et.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%] flex lg:justify-end">
                    <img
                      src="/about-image.png"
                      alt=""
                      className="w-full lg:w-[80%] h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
