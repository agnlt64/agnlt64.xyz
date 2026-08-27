import { siteConfig, socialLinks } from "@/data";
import { SocialButton } from "@/components/ui/social-button";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCoolHover } from "@/hooks/use-cool-hover";

export function SocialsSection() {
  const { isHovering, setIsHovering, handleMouseMove, ref } = useCoolHover<HTMLDivElement>(".social-button");

  return (
    <section className="relative px-6 py-8 md:py-18" id="socials">
      {/* Section divider */}
      <div className="section-divider w-full mx-auto mb-16" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Let&apos;s connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find me <span className="gradient-text-pink">online</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-4 grid-cols-3"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <SocialButton
                name={social.name}
                icon={social.icon}
                href={social.href}
                isHovering={isHovering}
              />
            </div>
          ))}
        </div>
        <Button
          variant="link"
          className="mt-2"
          onClick={() => {
            navigator.clipboard.writeText(siteConfig.email);
            toast.success("Email copied to clipboard");
          }}
        >
          Prefer email?
        </Button>
      </div>
    </section>
  );
}
