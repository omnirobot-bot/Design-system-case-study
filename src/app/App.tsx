import React from "react";
import { Badge } from "@/app/components/Badge";
import { GlassCard } from "@/app/components/GlassCard";
import { DSButton } from "@/app/components/DSButton";
import { ThemeComparison } from "@/app/components/ThemeComparison";
import {
  Target,
  AlertCircle,
  Lock,
  Layers,
  Zap,
  Database,
  Box,
  Image,
  FileCode,
} from "lucide-react";
import { getPlaceholderImage } from "@/app/config/placeholders";

// Use placeholder for GitHub Pages deployment
// Replace with actual image: /public/images/3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png
const heroImage = getPlaceholderImage('3e7d7607fcde0150bb6315b8d6796f02fa0b674a.png');

export default function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle parallax - move background position
  const parallaxY = scrollY * 0.05;

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        fontFamily: "var(--font-family-sans)",
        backgroundColor: "#070910",
        position: "relative",
      }}
    >
      {/* Parallax background layer */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          transform: `translateY(-${parallaxY}px)`,
          willChange: "transform",
          zIndex: 0,
        }}
      />

      {/* Dark overlay to darken the background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7, 9, 16, 0.7) 0%, rgba(7, 9, 16, 0.70) 100%)",
          zIndex: 1,
        }}
      />

      {/* Animated gradient mesh background */}
      <div
        className="fixed inset-0 opacity-70 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        {/* Blue gradient orb - outer wrapper centers, inner animates */}
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="orb-blue"
            style={{
              width: "900px",
              height: "900px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)",
              filter: "blur(100px)",
              willChange: "transform",
              animation: "float1 20s ease-in-out infinite",
            }}
          />
        </div>

        {/* Purple gradient orb - outer wrapper centers, inner animates */}
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="orb-purple"
            style={{
              width: "800px",
              height: "800px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, transparent 70%)",
              filter: "blur(100px)",
              willChange: "transform",
              animation: "float2 15s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* CSS Keyframes for animation */}
      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate3d(-15%, -10%, 0);
          }
          50% {
            transform: translate3d(15%, 10%, 0);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translate3d(20%, -15%, 0);
          }
          50% {
            transform: translate3d(-20%, 15%, 0);
          }
        }

        /* Mobile-optimized animations - centered positions */
        @media (max-width: 768px) {
          .orb-blue {
            width: 600px !important;
            height: 600px !important;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, transparent 70%) !important;
            filter: blur(80px) !important;
          }
          
          .orb-purple {
            width: 550px !important;
            height: 550px !important;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%) !important;
            filter: blur(80px) !important;
          }
          
          @keyframes float1 {
            0%, 100% {
              transform: translate3d(-10%, -8%, 0);
            }
            50% {
              transform: translate3d(10%, 8%, 0);
            }
          }
          
          @keyframes float2 {
            0%, 100% {
              transform: translate3d(12%, -10%, 0);
            }
            50% {
              transform: translate3d(-12%, 10%, 0);
            }
          }
        }
      `}</style>

      {/* Scrollable content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[100svh] md:min-h-screen flex items-center justify-center py-20 px-6 md:p-8 relative overflow-hidden">
          <div className="max-w-6xl w-full relative z-10">
            <div className="text-center space-y-12">
              {/* Title */}
              <div className="space-y-6">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl tracking-tight px-2 sm:px-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  Unified Design
                  <br />
                  System at Scale
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-2 sm:px-4">
                 A unified design system connecting product experience across brands and platforms.
                </p>
              </div>

              {/* Brands */}
              <div className="space-y-3">
                <p className="text-sm text-white/40 uppercase tracking-wider">
                  Brands
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Badge color="yellow" variant="glow">
                    Norton
                  </Badge>
                  <Badge color="yellow" variant="glow">
                    Avast
                  </Badge>
                  <Badge color="yellow" variant="glow">
                    AVG
                  </Badge>
                  <Badge color="yellow" variant="glow">
                    Avira
                  </Badge>
                  <Badge color="yellow" variant="glow">
                    CCleaner
                  </Badge>
                </div>
              </div>

              {/* Platforms */}
              <div className="space-y-3">
                <p className="text-sm text-white/40 uppercase tracking-wider">
                  Platforms
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Badge color="green" variant="outline">
                    Windows
                  </Badge>
                  <Badge color="green" variant="outline">
                    MacOS
                  </Badge>
                  <Badge color="green" variant="outline">
                    iOS
                  </Badge>
                  <Badge color="green" variant="outline">
                    Android
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-24 px-8 md:px-16 bg-black/20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Context
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto px-2 sm:px-4">
                Building a scalable, maintainable design system
                for multiple brands and platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard padding="lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white h3-original">
                    Problem
                  </h3>
                  <div className="space-y-2 text-white/70 text-sm leading-relaxed">
                    <p>
                      Brands evolved separate UI libraries and implementation logic.
                    </p>
                    <p>
                      Desktop and mobile diverged, increasing duplication and maintenance cost.
                    </p>
                    <p>
                      Handoff relied on Slack coordination and manual tickets.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white h3-original">
                    Goals
                  </h3>
                  <div className="space-y-2 text-white/70 text-sm leading-relaxed">
                    <p>
                      Consolidate fragmented brand libraries
                      into a unified component system.
                    </p>
                    <p>
                      Separate brand identity from component logic through semantic tokens.
                    </p>
                    <p>
                      Enable scalable white-label onboarding for
                      external partners.
                    </p>
                    <p>
                      Gradually transition from manual handoff
                      to an automated token pipeline
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-white h3-original">
                    Constraints
                  </h3>
                  <div className="space-y-2 text-white/70 text-sm leading-relaxed">
                    <p>
                      The system could not be rebuilt in
                      isolation.
                    </p>
                    <p>
                      Refactoring had to happen incrementally
                      while product teams continued shipping.
                    </p>
                    <p>
                      Platform teams maintained control over
                      native implementations and required
                      tailored outputs.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Architecture Overview
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                The system was refactored incrementally without stopping delivery. Brand libraries were consolidated step by step into a shared architecture.
              </p>
            </div>

            <div className="space-y-6">
              {/* Design Layer */}
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Design Layer
                    </h3>
                    <p className="text-white/70 text-sm">
                      Unified Figma libraries containing Core, Desktop, and Mobile components connected through shared variables.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Token Layer */}
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Token Layer
                    </h3>
                    <p className="text-white/70 text-sm">
                      A three-tier token model separating Core primitives, Semantic brand themes, and Platform-specific adaptations.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Automation Layer */}
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Automation Layer
                    </h3>
                    <p className="text-white/70 text-sm">
                      Supernova used for token export and documentation generation.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Platform Layer */}
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Box className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Platform Layer
                    </h3>
                    <p className="text-white/70 text-sm">
                      Web, Windows, macOS, iOS, and Android implementations consuming tokens with platform-specific constraints applied.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Tokens Architecture Section */}
        <section className="py-24 px-8 md:px-16 bg-black/20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Token Architecture
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                A three-tier token structure was introduced to prevent duplication and maintain clarity at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard padding="lg">
                <div className="space-y-4">
                  <Badge color="blue" variant="glow">
                    Core
                  </Badge>
                  <h3 className="text-white h3-original">
                    Core tokens
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Brand-agnostic primitives for color, typography, spacing, elevation, and motion.
                    </p>
                    <p>Core tokens are intentionally abstract and internal.
                    </p>
                    <p className="text-white/50 text-xs">
                      Not directly consumed by product UI.
                    </p>
                    
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  <Badge color="purple" variant="glow">
                    Themes
                  </Badge>
                  <h3 className="text-white h3-original">
                    Semantic themes
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Brand-level mappings that connect identity decisions to core primitives.
                    </p>
                    <p>
                      Designers select brand and mode (e.g., Avast Light/Dark) without interacting with core values directly.
                    </p>
                    <p className="text-white/50 text-xs">
                      The only layer responsible for brand identity.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  <Badge color="green" variant="glow">
                    Platform
                  </Badge>
                  <h3 className="text-white h3-original">
                    Platform tokens
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Controlled overrides for platform-specific behavior and native requirements.
                    </p>
                    <p>
                      Platform selection may trigger structural component changes (e.g., native iOS switch vs desktop switch).
                    </p>
                    <p className="text-white/50 text-xs">
                      Overrides are restricted to platform-native behavior.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
            
           
            
           
          </div>
        </section>

        {/* Multibrand Section */}
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Multibrand Architecture
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                A single component architecture powers multiple brands and partner themes.
                <br />
                Differentiation is applied exclusively at the token layer.
              </p>
            </div>

            <div
              style={{ maxWidth: "1152px", margin: "0 auto" }}
            >
              <ThemeComparison />
              <p className="text-white/70 mt-6 text-center">
                   Identical component structure across brands. Identity applied at the token layer only. 
                  </p>
            </div>
          </div>
        </section>


         {/* Tooling & Pipeline Section */}
        <section className="py-24 px-8 md:px-16 bg-black/20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Tooling & Pipeline
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                The tooling evolved together with the design system. It moved from manual workflows to structured variables and controlled token exports.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard padding="lg">
                <div className="space-y-4">
                  
                  <h3 className="text-white h3-original">
                    System Evolution
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      The initial phase relied on plugin-based brand switching within Figma and manual coordination with engineering teams.
                    </p>
                    <p>With Figma Variables, token collections were restructured into Core, Themes, and Platform layers.
                    </p>
                    <p className="text-white/50 text-xs">
                      Refactoring was executed incrementally without interrupting product delivery.
                    </p>
                    
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  
                  <h3 className="text-white h3-original">
                    Token Pipeline
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Supernova automated token exports and documentation generation from structured variable collections.
                    </p>
                    <p>
                      Platform teams received token updates through structured pull requests, allowing review and adjustment before integration.
                    </p>
                   <p className="text-white/50 text-xs">
                    Platform-specific filtering ensured native alignment and stability.
                  </p>
                   
                  </div>
                </div>
              </GlassCard>
            </div>
         </div>
        </section>


        

        {/* Scope & Contribution Section */}
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Scope & Contribution
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                My focus spanned core architecture, component implementation, and cross-platform asset infrastructure across both system phases.{" "}
              </p>
            </div>

            <div className="space-y-6">
              {/* Architecture & Components */}
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Box className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Architecture & Components
                    </h3>
                    <p className="text-white/70 text-sm">
                      Implemented core and desktop component architecture during consolidation and migration to Figma Variables. 
                    </p>
                    <p className="text-white/70 text-sm">
                      Migrated most atomic components into a shared Core library to eliminate duplication and maximize reuse.
                    </p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Image className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Asset System
                    </h3>
                    <p className="text-white/70 text-sm">
                      Designed and structured the cross-platform asset system covering launcher icons, system tray assets, installers, and browser extensions.
                    </p>
                    <p className="text-white/70 text-sm">
                      Ensured brand switching logic remained consistent across UI and OS-level integrations.
                    </p>
                  </div>
                </div>
              </GlassCard>

               <GlassCard padding="lg">
                <div className="flex items-start gap-4">
                  
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <FileCode className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white h3-original">
                      Token Structure & Naming
                    </h3>
                    <p className="text-white/70 text-sm">
                      Defined token structure and naming conventions and aligned development teams to them, adapting only where platform constraints required.
                    </p>
                    
                  </div>
                </div>
              </GlassCard>

              
            </div>
          </div>
        </section>
        
        

        {/* Outcomes Section */}
        <section className="py-24 px-8 md:px-16 bg-black/20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl tracking-tight text-white px-2 sm:px-4"
                style={{ fontWeight: 800 }}
              >
                Outcomes & Impact
              </h2>
              <p className="text-lg sm:text-xl text-white/60 px-2 sm:px-4">
                The impact was structural. Duplication decreased. Ownership became clear. Scaling became predictable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               <GlassCard padding="lg">
                <div className="space-y-4">
                 
                  <h3 className="text-white h3-original">
                    Structural Consolidation
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Fragmented brand libraries were unified under a shared component architecture.
                    </p>
                    <p>Atomic components were centralized in Core to eliminate platform duplication.
                    </p>
                    <p className="text-white/50 text-xs">
                      Shared logic. Separated identity.
                    </p>
                    
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  
                  <h3 className="text-white h3-original">
                    Scalable Theming
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      All brands and partner themes operate on the same component structure.
                    </p>
                    <p>New themes can be introduced without rebuilding components.
                    </p>
                    <p className="text-white/50 text-xs">
                      Theming without structural changes.
                    </p>
                    
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg">
                <div className="space-y-4">
                  
                  <h3 className="text-white h3-original">
                    Design–Engineering Alignment
                  </h3>
                  <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                    <p>
                      Token standardization created a shared vocabulary between design and engineering.
                    </p>
                    <p>Structured exports and controlled pull requests improved consistency, reduced manual errors, and accelerated updates across platforms.
                    </p>
                    <p>Scaling now happens within the system, not around it.</p>
                    
       
                    
                  </div>
                </div>
              </GlassCard>
              
            </div>
          </div>
        </section>



        

        {/* Footer */}
        <section className="py-16 px-8 text-center">
          <div className="space-y-4">
            <p className="text-white/60">
              Enterprise Design System Architecture
            </p>
            <p className="text-white/40 text-sm">
              Multibrand, multiplatform token-driven system
            </p>
            <p className="text-white/30 text-sm">2025</p>
          </div>
        </section>
      </div>
    </div>
  );
}