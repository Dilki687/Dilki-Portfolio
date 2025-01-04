import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s collaborate to create something extraordinary!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Excited to turn your vision into reality? Let’s connect and
                explore how I can support you in reaching your goals.
              </p>
            </div>
            <div>
              <a
                href="mailto:chamodidilki44@gmail.com"
                className="inline-block text-white bg-gray-900 px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <button className="inline-flex items-center gap-2 w-full h-full">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
