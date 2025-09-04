"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem, faqItems } from "@/lib/data/faqs";
import Link from "next/link";
import { Heading } from "./internals/heading";
import { Subheading } from "./internals/subheading";

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <Heading>Frequently Asked Questions</Heading>
          <Subheading>
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </Subheading>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item: FaqItem) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer hover:no-underline tracking-tight font-bold text-neutral-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="tracking-tight text-neutral-500">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can&apos;t find what you are looking for? Contact our{" "}
            <Link
              href="#"
              className="font-medium hover:underline text-emerald-700"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
