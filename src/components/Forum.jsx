import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { forumTopics } from "../constants";

const Forum = () => (
  <Section className="overflow-hidden" id="forum">
    <div className="container md:pb-10">
      <Heading
        tag="Join the Discussion!"
        title="Ecological Agriculture Forum"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {forumTopics.map((topic) => (
          <div
            className="md:flex p-0.25 rounded-[2.5rem] bg-n-6"
            key={topic.id}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="relative z-1">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="h4 mb-4">{topic.title}</h4>
                  <span className="text-n-4">{topic.date}</span>
                </div>
                <div className="mb-4">
                  <p className="body-2 text-n-4">By {topic.author}</p>
                  <p className="body-2 text-n-4">{topic.content}</p>
                </div>
                <div className="mt-4">
                  <h5 className="h5 mb-4">Replies</h5>
                  {topic.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="mb-4 p-4 bg-n-6 rounded-[1.5rem]"
                    >
                      <p className="body-2 text-n-4 mb-2">
                        <strong>{reply.author}</strong> - {reply.date}
                      </p>
                      <p className="body-2 text-n-4">{reply.content}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-8" href="/forum">
                  Rejoindre la discussion
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-8" href="/forum">
        cree un discussion
      </Button>
    </div>
  </Section>
);

export default Forum;
