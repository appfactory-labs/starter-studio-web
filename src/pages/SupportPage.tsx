import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SupportPage() {
  const [searchParams] = useSearchParams();
  const submitted = useMemo(() => searchParams.get('submitted') === 'true', [searchParams]);

  return (
    <section className="container section legal-page">
      <h1>Support</h1>
      <p>
        App Factory is operated by Starter Studio, Inc. Use the form below for product support, privacy
        requests, business inquiries, App Store / Play Store support, or general questions.
      </p>

      {submitted ? (
        <div className="panel" role="status" aria-live="polite">
          <h2>Thanks — your message has been received.</h2>
          <p>Our team will review your request and respond through the email address you provided.</p>
        </div>
      ) : (
        <form
          name="support-contact"
          method="POST"
          action="/support?submitted=true"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="support-form panel"
        >
          <input type="hidden" name="form-name" value="support-contact" />
          <input type="hidden" name="routing_target" value="admin@starterstudio.us" />
          <p className="hidden-field">
            <label htmlFor="bot-field">
              Don&apos;t fill this out if you&apos;re human: <input id="bot-field" name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>

          <div className="form-row">
            <label htmlFor="topic">Topic</label>
            <select id="topic" name="topic" required defaultValue="">
              <option value="" disabled>Select a topic</option>
              <option>Product support</option>
              <option>Privacy request</option>
              <option>Business inquiry</option>
              <option>App Store / Play Store support</option>
              <option>General question</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required />
          </div>

          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}
