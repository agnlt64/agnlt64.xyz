"use client"

import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { socialLinks } from "@/data";
import { SocialButton } from "@/components/ui/social-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SocialsSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".social-button");
    if (!cards) return;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <section className="relative px-6 py-8 md:py-24" id="socials">
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

        {/* Social buttons grid */}
        {/* grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 */}
        <div
          ref={gridRef}
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

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="mt-2 hover:cursor-pointer"
                onClick={() => setIsContactModalOpen(!isContactModalOpen)}
              >
                Prefer email?
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-md max-w-md border-0 p-0 overflow-hidden glass-strong">
              {/* Top gradient border */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/80 to-transparent" />

              <div className="p-7">
                <DialogHeader className="mb-6">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg glass-pink border border-pink-500/25 shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <DialogTitle className="text-xl font-semibold">
                      Contact me
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-muted-foreground/70 text-sm pl-12">
                    Send me a message directly via this form
                  </DialogDescription>
                </DialogHeader>

                <FieldGroup className="gap-4">
                  <Field>
                    <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Your email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white/[0.04] border-white/10 focus-visible:border-primary/60 focus-visible:ring-primary/20 h-10"
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="object" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Subject
                    </Label>
                    <Input
                      id="object"
                      name="name"
                      placeholder="What do you want to talk about?"
                      className="bg-white/[0.04] border-white/10 focus-visible:border-primary/60 focus-visible:ring-primary/20 h-10"
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="content" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Message
                    </Label>
                    <textarea
                      id="content"
                      name="content"
                      rows={4}
                      placeholder="Your message..."
                      className="w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm placeholder:text-muted-foreground/50 outline-none transition-[color,box-shadow] focus-visible:border-primary/60 focus-visible:ring-[3px] focus-visible:ring-primary/20 resize-y"
                    />
                  </Field>
                </FieldGroup>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                <DialogFooter className="gap-2">
                  <DialogClose asChild>
                    <Button variant="outline" className="hover:cursor-pointer hover:text-white border-white/10 hover:border-white/20 hover:bg-white/5">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="text-white hover:cursor-pointer bg-pink-600 hover:bg-pink-700"
                  >
                    <Send className="w-4 h-4" />
                    Send message
                  </Button>
                </DialogFooter>
              </div>

              {/* Bottom glow accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </section>
  );
}
