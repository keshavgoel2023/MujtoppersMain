"use client";
import React, { useMemo } from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {

  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Diksha Dwivedi",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044056/10gpa/bztez12yuzbskczhfghj.png",
  },
  {
    title: "Chetanya Jolly",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/dzxvsvcgqd5diymorlke.png",
  },
  {
    title: "Chandra T.Pandey",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044059/10gpa/gcossxpzsu4gguokyd9r.png",
  },
  {
    title: "Sanya Dureja",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/pzzrnps4kwpppcjg7yt0.png",
  },
  {
    title: "Chanchal Agarwal",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/hbigvf1dhaz08ewvlxdo.png",
  },
  {
    title: "Bhoomika Gupta",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/uvlsx8thddpn3mqaa4l8.png",
  },
  {
    title: "Maldev Singh Chouhan",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/kc8agi42mi4clc1mi9ao.png",
  },
  {
    title: "Shivam Kumar",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044058/10gpa/jawliv1tuifhjkxnpjpq.png",
  },
  {
    title: "Harsh Shishodia",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/g88bmzwyjuibx9b1dsu3.png",
  },
  {
    title: "Jyotiraditya",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044058/10gpa/bexetscn1cmlrxhrrix4.png",
  },
  {
    title: "Swatantra choudhary",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044058/10gpa/rrztnf50oj1illajrh2q.png",
  },
  {
    title: "Anish Deep Gulde",
    link: "https://algochurn.com",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/dkeep8gd35szdxni34ld.png",
  },
  {
    title: "Swatantra choudhary",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044058/10gpa/rrztnf50oj1illajrh2q.png",
  },
  {
    title: "Chanchal Agarwal",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044057/10gpa/hbigvf1dhaz08ewvlxdo.png",
  },
  {
    title: "Diksha Dwivedi",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742044056/10gpa/bztez12yuzbskczhfghj.png",
  },
];


