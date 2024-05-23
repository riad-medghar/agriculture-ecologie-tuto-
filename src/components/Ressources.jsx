import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { resources } from "../constants";

const Resources = () => (
  <Section className="overflow-hidden" id="resources">
    <div className="container md:pb-10">
      <Heading
        tag="En savoir plus !"
        title="Documents et tutoriels sur l'agriculture écologique"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {resources.map((item) => {
          return (
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6"
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4 mb-8">{item.description}</p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {item.type === "document"
                      ? "Voir le document"
                      : "Voir le tutoriel"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20"></div>
    </div>
  </Section>
);

export default Resources;
