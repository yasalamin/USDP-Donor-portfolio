import { FormEvent, useState } from 'react';
import { CheckCircle2, MessageCircle, Send, X } from 'lucide-react';

const responseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdUPC3hIY6TpyoF6zMdltOyEV2GHNw_rU6-YGaUF8F_k0pI7A/formResponse';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payload = new URLSearchParams({
      'entry.1036969412': String(formData.get('fullName') ?? ''),
      'entry.231210441': String(formData.get('email') ?? ''),
      'entry.561201532': String(formData.get('phone') ?? ''),
      'entry.1991861933': String(formData.get('reason') ?? ''),
      'entry.266350583': String(formData.get('message') ?? '')
    });
    try {
      await fetch(responseUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: payload.toString() });
      setSubmitted(true);
      event.currentTarget.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#E8DFF5] opacity-70" /><div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#E8DFF5] opacity-70" /></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white sm:text-xs"><MessageCircle className="h-3.5 w-3.5" /> Get in touch</div>
          <h1 className="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Let’s create <span className="text-brand">impact</span> together</h1>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">Tell us how you would like to connect with uConnect, support digital skills, or build new opportunities for regional talent.</p>
        </div>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-100 bg-brand px-5 py-4 text-white sm:px-8"><h2 className="text-lg font-bold">Contact uConnect</h2><p className="mt-1 text-xs text-white/80 sm:text-sm">Complete the form and our team will get back to you.</p></div>
          {submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center"><CheckCircle2 className="mb-5 h-14 w-14 text-brand" /><h3 className="mb-2 text-2xl font-black text-gray-900">Thank you for reaching out.</h3><p className="max-w-md text-gray-600">Your message has been sent. Our team will review it and get back to you soon.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-hover">Send another message</button></div> : (
            <form onSubmit={submitForm} className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
              <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold text-gray-800">Full name *<input name="fullName" required className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand" /></label><label className="text-sm font-bold text-gray-800">Email address *<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand" /></label></div>
              <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold text-gray-800">Phone number<input name="phone" type="tel" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand" /></label><label className="text-sm font-bold text-gray-800">Reason for contact *<select name="reason" required defaultValue="" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand"><option value="" disabled>Select one</option><option>Collaboration</option><option>Partnership</option><option>Project</option><option>Inquiry</option><option>Other</option></select></label></div>
              <label className="block text-sm font-bold text-gray-800">Message *<textarea name="message" required rows={6} className="mt-2 w-full resize-y rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand" /></label>
              <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-hover disabled:cursor-wait disabled:opacity-60 sm:w-auto">{submitting ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" /></button>
              <p className="text-xs text-gray-400">Your response is securely collected in our Google Form. <button type="button" onClick={() => setShowPrivacy(true)} className="font-semibold text-brand underline underline-offset-2 hover:text-brand-hover">Privacy Policy</button></p>
            </form>
          )}
        </div>
      </div>
      {showPrivacy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowPrivacy(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title" className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div><p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">uConnect</p><h2 id="privacy-policy-title" className="text-2xl font-black text-gray-900">Privacy Policy</h2></div>
              <button type="button" onClick={() => setShowPrivacy(false)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Close privacy policy"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p><strong className="text-gray-900">Effective date:</strong> August 2026</p>
              <p>uConnect Skill Development Program (“uConnect”, “USDP”, “we”, or “us”) respects your privacy. This policy explains how we handle information submitted through our contact form.</p>
              <div><h3 className="mb-1 font-bold text-gray-900">Information we collect</h3><p>We may collect your name, email address, phone number, reason for contacting us, and message. Please do not include passwords, payment details, national identity numbers, or other sensitive information in the form.</p></div>
              <div><h3 className="mb-1 font-bold text-gray-900">How we use your information</h3><p>We use submitted information to respond to enquiries, evaluate collaboration or partnership opportunities, and provide relevant follow-up. Responses are stored and managed through Google Forms and its associated services.</p></div>
              <div><h3 className="mb-1 font-bold text-gray-900">Sharing and retention</h3><p>We do not sell your contact information. Access is limited to people who need it to respond to your enquiry or manage our programs. We retain submissions only for as long as reasonably needed for these purposes or as required by applicable law.</p></div>
              <div><h3 className="mb-1 font-bold text-gray-900">Third-party service</h3><p>This form submits responses to Google Forms. Google may process information according to its own privacy terms and policies. You can review Google’s policies on the Google website.</p></div>
              <div><h3 className="mb-1 font-bold text-gray-900">Your choices</h3><p>You may ask us to correct or delete information you previously submitted, subject to legal and operational requirements. Contact us through the same form to make a request.</p></div>
              <p className="border-t border-gray-100 pt-4 text-xs text-gray-500">This policy is general website information and may be updated as our services or legal obligations change.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
