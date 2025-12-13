"use client";



import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, MapPin } from "lucide-react";
import Link from "next/link";


export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess("Message sent successfully!");
        form.reset();
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100">
          Contact
        </span>
        <h2 className="text-xl font-extrabold uppercase tracking-[0.24em] text-white">Contact</h2>
        <span className="h-px w-24 bg-primary/60" aria-hidden />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center w-full max-w-3xl mx-auto">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 space-y-4 bg-slate-900/60 rounded-xl p-6 border border-slate-800 shadow-md min-w-[380px]"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="Your email address" className="w-full rounded-md border border-slate-700 bg-black px-3 py-2 text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-1">Subject</label>
            <input id="subject" name="subject" type="text" required placeholder="Subject" className="w-full rounded-md border border-slate-700 bg-black px-3 py-2 text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required placeholder="Type your message..." className="w-full rounded-md border border-slate-700 bg-black px-3 py-2 text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none resize-none" />
          </div>
          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {success && <div className="mt-2 text-green-400 text-sm text-center">{success}</div>}
          {error && <div className="mt-2 text-red-400 text-sm text-center">{error}</div>}
        </form>

        {/* Address & Socials */}
        <div className="flex-1 space-y-6 bg-slate-900/60 rounded-xl p-6 border border-slate-800 shadow-md min-w-[250px]">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-primary size-5" />
            <div>
              <div className="text-base text-slate-100">Addis Ababa, Ethiopia</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Send className="text-primary size-5" />
            <Link href="https://t.me/Abdulwahid_Munewer" target="_blank" rel="noreferrer" className="text-base text-white hover:text-pink-400 flex items-center gap-2">
              Telegram
              <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-green-500 shadow-md ml-1" title="Active"></span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary size-5" />
            <Link href="mailto:a.wahid.developer@gmail.com" className="text-base text-white hover:text-pink-400">a.wahid.developer@gmail.com</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
