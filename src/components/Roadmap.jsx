import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets/assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading
        tag="Ready to start Learning!"
        title="The Road you should Follow"
      />

      <div className="grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden">
                <div className="mb-6">
                  <Tagline>{item.date}</Tagline>
                  <div className="flex items-center mt-4">
                    <img
                      className="mr-2.5"
                      src={item.status === "done" ? check2 : loading1}
                      width={16}
                      height={16}
                      alt={status}
                    />
                    <div className="tagline">{status}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    className="w-full"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>

                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4 mb-6">{item.text}</p>

                {item.subpoints && (
                  <div className="space-y-4">
                    {item.subpoints.map((subpoint, index) => (
                      <div
                        key={index}
                        className="pl-4 border-l-4 border-gray-300"
                      >
                        <h5 className="text-xl font-medium mb-2">
                          {subpoint.title}
                        </h5>
                        <p className="text-gray-600">{subpoint.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#">View More</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
