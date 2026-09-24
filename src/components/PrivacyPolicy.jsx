import { Link } from "react-router-dom";

import { styles } from "../styles";

const Section = ({ title, children }) => (
  <div className='mt-10'>
    <h2 className='text-white font-bold text-[22px] sm:text-[24px]'>{title}</h2>
    <div className='mt-3 text-secondary text-[16px] sm:text-[17px] leading-[28px] space-y-3'>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <div className={`max-w-4xl mx-auto ${styles.paddingX} py-16`}>
        <Link
          to='/'
          className='text-secondary hover:text-white text-[14px] uppercase tracking-wider'
        >
          ← Back to home
        </Link>

        <h1 className={`${styles.sectionHeadText} mt-6`}>Privacy Policy.</h1>
        <p className='mt-2 text-secondary text-[14px]'>Last updated: September 24, 2026</p>

        <Section title="Overview">
          <p>
            This Privacy Policy explains what information this website (the
            "Site"), operated by Lemuel Emmanuel ("I", "me"), collects when
            you visit, and how that information is used.
          </p>
        </Section>

        <Section title="Information You Provide">
          <p>
            If you use the contact form, I collect the name, email address,
            and message you submit. This information is sent to my email via
            Resend and used only to respond to your message. It is not sold,
            rented, or shared with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="Automatically Collected Information">
          <p>
            This Site uses Vercel Analytics and Vercel Speed Insights to
            understand traffic and performance. These tools collect
            aggregated, anonymized data such as page views, referrers,
            approximate location (country/region), device type, and load
            times. This data is not tied to your name or email and is not
            used to personally identify you.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            This Site does not use cookies for advertising or cross-site
            tracking. Vercel Analytics is cookieless by design.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>The Site relies on the following third-party services:</p>
          <ul className='list-disc ml-5 space-y-1'>
            <li>
              <span className='text-white font-medium'>Vercel</span> —
              hosting, analytics, and speed insights.
            </li>
            <li>
              <span className='text-white font-medium'>Resend</span> —
              delivers contact form submissions to my email.
            </li>
            <li>
              <span className='text-white font-medium'>GitHub</span> — project
              source code linked from this Site.
            </li>
          </ul>
          <p>
            Each of these providers has its own privacy policy governing how
            they handle data.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            Contact form messages are kept only as long as needed to respond
            to your inquiry. Aggregated analytics data is retained by Vercel
            according to its own retention policies.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            You may request that any message you sent through the contact
            form be deleted by emailing me directly at{" "}
            <a
              href='mailto:lemuelemmanuel29@gmail.com'
              className='text-white underline'
            >
              lemuelemmanuel29@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            This policy may be updated occasionally to reflect changes to the
            Site or the services it uses. The "Last updated" date above
            reflects the most recent revision.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href='mailto:lemuelemmanuel29@gmail.com'
              className='text-white underline'
            >
              lemuelemmanuel29@gmail.com
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
