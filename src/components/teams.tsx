import { TeamMember, teamMemberData } from "@/lib/data/teams";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMemberData.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl transition-all duration-300"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="rounded-t-xl object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Instagram className="text-emerald-600"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
