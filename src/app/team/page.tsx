import React from "react";
import { TeamPage } from "@/components/team/teamPage";
import { SectionWrapper } from "@/components/section-wrapper";

const Page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26 min-h-screen">
      {/* Team Section */}
      <SectionWrapper>
        <TeamPage />
      </SectionWrapper>
    </main>
  );
};

export default Page;
