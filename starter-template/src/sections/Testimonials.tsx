//my services section
import webDesign from "@/assets/images/webDesign.png";
import uiDesign from "@/assets/images/uiDesign.png";
import softwareDev from "@/assets/images/softwareDev.png";
import mobileDevelopment from "@/assets/images/mobileDevelopment.png";
import APIDev from "@/assets/images/APIDev.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Web Design",
    position: "Creative & Responsive Solutions",
    text: "Craft visually stunning and user-friendly websites tailored to your brand identity and goals.",
    avatar: webDesign,
  },
  {
    name: "UI/UX Design",
    position: "Human-Centered Interfaces",
    text: "Design intuitive interfaces and experiences that ensure user satisfaction and engagement.",
    avatar: uiDesign,
  },
  {
    name: "Mobile App Development",
    position: "Secure & Scalable Apps",
    text: "Build responsive and feature-rich mobile applications.",
    avatar: mobileDevelopment,
  },
  {
    name: "Custom Software Development",
    position: "Tailored Business Solutions",
    text: "Develop bespoke software solutions tailored to meet your specific business needs.",
    avatar: softwareDev,
  },
  {
    name: "API Integration & Backend Development",
    position: "Scalable Backend Systems",
    text: "Implement seamless integrations and robust backend systems to power your applications.",
    avatar: APIDev,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Services"
          title="What I Offer"
          description="Discover the range of services I provide to help you achieve your goals and bring your vision to life!"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
