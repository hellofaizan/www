import { Metadata } from "next";

const RESUME_PATH = "/Resume.pdf";

export const metadata: Metadata = {
  title: "Resume | Mohammad Faizan",
  description: "Mohammad Faizan's resume.",
  alternates: {
    canonical: "https://mohammadfaizan.com/resume",
  },
};

export default function ResumePage() {
  return (
    <iframe
      src={RESUME_PATH}
      title="Mohammad Faizan resume"
      className="h-svh w-full border-0"
    />
  );
}
