import IntroAnimation from "../components/IntroAnimation";

export default function About() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 
          Using the IntroAnimation in persistent mode. 
          This replaces the previous About page content with 
          the full-screen cinematic celebration.
      */}
      <IntroAnimation isPersistent={true} />
    </div>
  );
}
