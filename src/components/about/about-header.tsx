import { Heading } from "../internals/heading";
import { Paragraph } from "../internals/paragraph";

export const AboutHeader = () => (
  <section className="mb-8 flex flex-col items-center">
    <Heading>About Soul Sanctuary Yoga</Heading>

    <div className="w-full max-w-3xl">
      <Paragraph direction="left_to_right" delay={0.3}>
        Welcome to Soul Sanctuary Yoga, the Dubai branch of the renowned Yoga
        Clinic. Under the guidance of Yogacharya Dr. Saurav Kumar, our studio is
        a haven for those seeking holistic health, inner peace, and mindful
        living through ancient Indian yoga traditions.
      </Paragraph>
    </div>
  </section>
);
