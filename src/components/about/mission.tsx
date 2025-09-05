import { Heading } from "../internals/heading";
import { Paragraph } from "../internals/paragraph";

export const MissionSection = () => (
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 sm:p-12">
      <Heading className="font-sans leading-tight text-xl text-neutral-600">
        More Than a Practice — A Path
      </Heading>
      <section className="text-left">
        <Paragraph direction="left_to_right" delay={0.5}>
          At Soul Sanctuary Yoga, we offer more than a practice — we offer a
          path. Led by Yogacharya Dr. Saurav Kumar and backed by the legacy of
          Yoga Clinic, we invite you to discover healing, strength, and soulful
          transformation through our comprehensive approach to wellness and
          spiritual growth.
        </Paragraph>
      </section>
    </div>
  </div>
);
