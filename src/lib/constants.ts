import { Feature, Route } from "@/types/custom-types";

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
