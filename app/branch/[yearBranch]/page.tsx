"use client";

import AnimatedHeader from "@/components/AnimatedHeader";
import { FocusCards } from "@/components/ui/focus-cards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ yearBranch: string }>;
}) {
  const router = useRouter();
  const [yearBranch, setYearBranch] = useState("");

  useEffect(() => {
    async function fetchParams() {
      const { yearBranch } = await params;
      setYearBranch(yearBranch);
    }
    fetchParams();
  }, [params]);

  const cards1 = [
    {
      title: "Physics Cycle",
      src: "https://drive.google.com/uc?export=view&id=1H2c_ueMwgBdoORgUggJD_kbgCSZ0XxCf",
      href: "IT",
      onClick: () => router.push(`/branch/${yearBranch}/subjects/PhysicsCycle`),
    },
    {
      title: "Chemistry Cycle",
      src: "https://drive.google.com/uc?export=view&id=1QWwh5MgiwLI_iIg1bxpAgYipsR3HS71x",
      href: "DSE",
      onClick: () => router.push(`/branch/${yearBranch}/subjects/ChemistryCycle`),
    },
  ];

   const cards2 = [
     {
       title: "Information Technology",
       src: "https://drive.google.com/uc?export=view&id=18H9YEgSw1vi9JKHJSIg7SEP9qCKBXA-P",
       href: "IT",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/IT`),
     },
     {
       title: "Data Science",
       src: "https://drive.google.com/uc?export=view&id=1EQUzMXCaDwxXPhCB_VusYY7GvrUgz30Q",
       href: "DSE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/DSE`),
     },
     {
       title: "Computer Science",
       src: "https://drive.google.com/uc?export=view&id=1Vl8thA882nGhb6NH6SSr7YBWz_jeNrKf",
       href: "CSE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/CSE`),
     },
     {
       title: "Internet of Things",
       src: "https://drive.google.com/uc?export=view&id=1WcP9Qnol-K5xfBtQUOniRzrqsnBvKlj2",
       href: "IOT",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/IOT`),
     },
     {
       title: "Computer & Communication Engineering",
       src: "/CCE_Branch.png",
       href: "CCE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/CCE`),
     },
     {
       title: "Aritifical Intelligence & Machine Learning",
       src: "https://drive.google.com/uc?export=view&id=11NEW6knN3achQE6NWkjnXZAstWJwUW2S",
       href: "AIML",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/AIML`),
     },
   ];

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-y-6 mt-20 p-10">
        <AnimatedHeader title={yearBranch} />
        <FocusCards cards={yearBranch === "first"? cards1 : cards2} />
      </div>
    </div>
  );
}
