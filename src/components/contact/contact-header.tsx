import { Heading } from "@/components/internals/heading";
import { Paragraph } from "../internals/paragraph";

export const ContactHeader = () => (
  <section className="mb-16 sm:mb-20 flex flex-col items-center text-center">
    <Heading className="text-center">Contact Us</Heading>

    <div className="w-full max-w-3xl">
      <Paragraph direction="left_to_right" delay={0.5}>
        Have questions about our classes or want to book a session? We&apos;d
        love to hear from you! Reach out to discuss your goals, schedule a
        private consultation, or learn more about our yoga programs designed for
        every level and lifestyle.
      </Paragraph>
    </div>
  </section>
);
