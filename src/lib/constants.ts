import { Feature, Route, Step } from "@/types/custom-types";

export const features: Feature[] = [
  {
    id: 1,
    icon: "📚",
    title: "Diverse Courses",
    subtitle:
      "Explore a vast library of subjects, from tech to personal growth, tailored for every learner.",
  },
  {
    id: 2,
    icon: "🎥",
    title: "Interactive Lessons",
    subtitle:
      "Learn through dynamic videos, detailed notes, and real-time discussions to stay engaged.",
  },
  {
    id: 3,
    icon: "📝",
    title: "Quizzes & Assignments",
    subtitle:
      "Reinforce your knowledge with hands-on tasks and self-paced quizzes designed to challenge you.",
  },
  {
    id: 4,
    icon: "🏅",
    title: "Recognized Certificates",
    subtitle:
      "Earn shareable, industry-recognized certificates to showcase your achievements and skills.",
  },
];

export const routes: Route[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Instructors",
    href: "/instructors",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const howItWorks: Step[] = [
  {
    id: 1,
    icon: "🔍",
    title: "Discover & Enroll",
    description:
      "Explore a wide variety of free and premium courses tailored to your goals, then enroll with a single click.",
  },
  {
    id: 2,
    icon: "📖",
    title: "Learn Your Way",
    description:
      "Watch high-quality video lessons, join community discussions, and complete interactive assignments at your own pace.",
  },
  {
    id: 3,
    icon: "🏆",
    title: "Earn Your Certificate",
    description:
      "Finish the course and receive a verifiable certificate to showcase your new skills on LinkedIn, your résumé, or portfolio.",
  },
];
