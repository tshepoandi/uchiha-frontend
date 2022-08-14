import React from "react";
import { Carousel } from "@mantine/carousel";
import { useData } from "../../context/data";

const Slide = ({ text, illustration }) => {
  return (
    <article className="space-y-4 px-8">
      <div className="">
        <img
          className="w-full block object-cover rounded-lg"
          src={illustration}
          alt={text}
        />
      </div>

      <p>{text}</p>
    </article>
  );
};

function Article({ title, slides }) {
  const { pressConvTab } = useData();

  return (
    <article className="space-y-4 py-6 rounded-2xl border">
      <h3 className="text-xl px-6">{title}</h3>

      <Carousel
        className="w-full border-none"
        mx="0"
        //withIndicators
      >
        {slides.map((slide, id) => (
          <Carousel.Slide slidesize="100%" slidegap={0} key={id}>
            <Slide {...slide} />
          </Carousel.Slide>
        ))}

        <Carousel.Slide slidesize="100%" slidegap={0}>
          <article className="flex flex-col items-center justify-center h-full space-y-10 px-8">
            <div className="">
              <a
                className="mx-auto bg-blue-500 group hover:border-blue-500 hover:border-2 hover:bg-white w-36 h-36 flex justify-center items-center rounded-full "
                href="https://registertovote.elections.org.za/Welcome"
              >
                <button className="text-white group-hover:text-blue-600">
                  Take Action
                </button>
              </a>
            </div>

            <p>Visit IEC website to learn more about and register to vote.</p>
          </article>
        </Carousel.Slide>
      </Carousel>

      <div className="flex pt-2 justify-center gap-4">
        <button
          onClick={pressConvTab}
          className="text-xs px-2 py-1 border rounded"
        >
          Join Conversation
        </button>
      </div>
    </article>
  );
}

export default Article;

export const MiniArticle = ({ title, slides }) => {
  return (
    <article className="space-y-4 py-6 rounded-2xl">
      <h3 className="text-xl px-6">{title}</h3>

      <Carousel
        className="w-full border-none"
        mx="0"
        //withIndicators
      >
        {slides.map((slide, id) => (
          <Carousel.Slide slidesize="100%" slidegap={0} key={id}>
            <Slide {...slide} />
          </Carousel.Slide>
        ))}

        <Carousel.Slide slidesize="100%" slidegap={0}>
          <article className="flex flex-col items-center justify-center h-full space-y-10 px-8">
            <div className="">
              <a
                className="mx-auto bg-blue-500 group hover:border-blue-500 hover:border-2 hover:bg-white w-36 h-36 flex justify-center items-center rounded-full "
                href="https://registertovote.elections.org.za/Welcome"
              >
                <button className="text-white group-hover:text-blue-600">
                  Take Action
                </button>
              </a>
            </div>

            <p>Visit IEC website to learn more about and register to vote.</p>
          </article>
        </Carousel.Slide>
      </Carousel>
    </article>
  );
};
