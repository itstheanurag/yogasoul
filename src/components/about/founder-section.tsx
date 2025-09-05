import { Heading } from "../internals/heading";
import { Paragraph } from "../internals/paragraph";

export const FounderSection = () => (
  <div className="mt-12 mx-auto w-full max-w-xl sm:max-w-4xl px-4 sm:px-0 flex flex-col text-center">
    <Heading className="font-sans text-neutral-600 leading-tight text-xl hover:text-emerald-600 animation duration-200 ease-in-out font-base">
      ( By Yogacharya Dr. Saurav Kumar )
    </Heading>
    <Paragraph direction="left_to_right" delay={0.3}>
      An initiative by Yoga Clinic, Soul Sanctuary Yoga brings decades of
      expertise in therapeutic and transformational yoga to Dubai. Our practice
      is rooted in ancient wisdom yet adapted for modern wellness needs.
    </Paragraph>
  </div>
);
