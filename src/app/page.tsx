import Image from 'next/image';
import Link from 'next/link';
import SponsorCarousel from '@/components/SponsorCarousel';
import HomePageNav from '@/components/HomePageNav';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section id="why" className="hero" style={{ position: 'relative', overflow: 'hidden', padding: 'var(--spacing-xl) 0', color: 'white', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <Image
            src="/images/LEHI MTB 2026 team-41.jpg"
            alt="Lehi MTB Team Hero"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to right, rgba(12,8,24,0.92), rgba(87,43,158,0.35))' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Friends. Fun. <br />
            <span style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #faff38 45%, #c084fc 75%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Riding Together.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '650px', marginBottom: '1.5rem', opacity: 0.9, lineHeight: 1.6 }}>
            We build community through mountain biking — training hard, racing well, and creating lifelong friendships. Open to 9th–12th graders.
          </p>
          {/* Core values pill row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Strong Body', 'Strong Mind', 'Strong Character', 'All Inclusive', 'Total Equality'].map(v => (
              <span key={v} style={{ padding: '0.3rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 600, color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>{v}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
            <Link href="https://registration.teamsnap.com/form/47629" target="_blank" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Join the Team</Link>
            <Link href="/join" className="btn-silver" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Parent Info &amp; FAQ</Link>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Nav */}
      <HomePageNav />

      {/* Programs Section */}
      <section id="programs" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2>Our Programs</h2>
            <p className="text-muted">Mountain biking opportunities for riders of all ages and girls-specific development.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid rgb(var(--color-primary))' }}>
              <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))', marginBottom: '0.75rem' }}>High School · 9th–12th Grade</p>
              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Lehi High School MTB</h3>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>The premier high school mountain biking team for Lehi students.</p>
              <Link href="/join" className="btn-primary" style={{ fontSize: '0.875rem' }}>Join the Team</Link>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid rgb(192, 150, 240)' }}>
              <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(192, 150, 240)', marginBottom: '0.75rem' }}>Girls Riding Together · All Grades</p>
              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>GRiT</h3>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>A NICA initiative aimed at increasing female participation in mountain biking.</p>
              <Link href="https://nationalmtb.org/grit" target="_blank" className="btn-silver" style={{ fontSize: '0.875rem' }}>Learn About GRiT</Link>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', borderTop: '4px solid rgb(var(--color-tertiary))' }}>
              <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(140, 120, 0)', marginBottom: '0.75rem' }}>Junior Development · 7th–8th Grade</p>
              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Lehi Junior Devo</h3>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>Development program tailored for younger riders building foundational skills.</p>
              <Link href="https://lehijdmtb.org/" target="_blank" className="btn-accent" style={{ fontSize: '0.875rem' }}>Visit Junior Devo Site</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Core Values Section */}
      <section id="benefits" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'rgb(var(--surface-main))' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center' }}>

            {/* Left: community message */}
            <div>
              <h2 style={{ marginBottom: '1rem' }}>More Than Just Racing</h2>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgb(var(--text-muted))', marginBottom: '1.25rem' }}>
                We focus on creating community through the sport of mountain biking — friends, fun, and riding. We love to race and train hard, while also having a great time together.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgb(var(--text-muted))' }}>
                There is no bench on our team. Every rider participates, every ride. Whether you&apos;re brand new or a seasoned racer, you belong here.
              </p>
            </div>

            {/* Right: Core values */}
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'rgb(var(--color-primary))' }}>Our 5 Core Values</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  ['01', 'Strong Body', 'Physical fitness and healthy habits built through riding.'],
                  ['02', 'Strong Mind', 'Mental resilience, focus, and growth through challenge.'],
                  ['03', 'Strong Character', 'Integrity, sportsmanship, and leadership on and off the trail.'],
                  ['04', 'All Inclusive', 'No bench. Every rider, every ride, no matter their level.'],
                  ['05', 'Total Equality', 'Every athlete is valued equally — full stop.'],
                ].map(([num, title, desc]) => (
                  <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid rgb(var(--color-primary))', backgroundColor: 'rgba(87,43,158,0.05)' }}>
                    <span style={{ fontFamily: 'var(--font-brand)', fontStyle: 'italic', fontWeight: 800, fontSize: '1.1rem', color: 'rgb(var(--color-primary))', lineHeight: 1, paddingTop: '2px', minWidth: '2rem' }}>{num}</span>
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: '0.1rem' }}>{title}</p>
                      <p className="text-muted" style={{ fontSize: '0.875rem' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coaches & Ride Leaders */}
      <section id="coaches" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-xl)' }}>
            <div className="glass-panel" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-primary))' }}>
              <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-primary))', marginBottom: '1rem' }}>Coaching Staff</p>
              <h2 style={{ marginBottom: '1rem' }}>The Coaches</h2>
              <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>
                Our dedicated coaching staff brings passion, expertise, and a commitment to every rider&apos;s growth on and off the trail.
              </p>
              <Link href="/coaches" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Meet the Coaches</Link>
            </div>

            <div id="ride-leaders" className="glass-panel" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)', borderTop: '4px solid rgb(var(--color-accent))' }}>
              <p style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(var(--color-accent))', marginBottom: '1rem' }}>Volunteers Needed</p>
              <h2 style={{ marginBottom: '1rem' }}>Become a Ride Leader</h2>
              <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>
                The team thrives on parent volunteers. You don&apos;t need to be an elite racer — if you can ride and want to help, we need you!
              </p>
              <Link href="/join" className="btn-accent" style={{ padding: '0.75rem 1.5rem' }}>Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Captains Section */}
      <section id="captains" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'rgb(var(--surface-main))' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2>2026 Team Captains</h2>
            <p className="text-muted">Our student captains lead by example on and off the trail.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--spacing-md)' }}>
            {[
              { name: 'Ashlyn', ext: 'jpg' },
              { name: 'Brielle', ext: 'jpg' },
              { name: 'Cooper', ext: 'jpg' },
              { name: 'Jenson', ext: 'jpg' },
              { name: 'Keaton', ext: 'jpg' },
              { name: 'Kye', ext: 'jpg' },
              { name: 'Kyle', ext: 'jpg' },
              { name: 'Larissa', ext: 'jpg' },
              { name: 'Rachel', ext: 'jpeg' },
              { name: 'Steadman', ext: 'jpg' },
              { name: 'Ty', ext: 'jpg' },
            ].map(({ name, ext }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ width: '110px', height: '110px', borderRadius: 'var(--radius-full)', overflow: 'hidden', border: '3px solid rgb(var(--color-primary))', margin: '0 auto 0.6rem auto', backgroundColor: 'rgba(87,43,158,0.08)' }}>
                  <Image
                    src={`/images/2026_captains/${name}.${ext}`}
                    alt={name}
                    width={110}
                    height={110}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center top' }}
                  />
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{name}</p>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>Captain</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section style={{ padding: 'var(--spacing-lg) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
            <Image src="/images/utmb-logo.png" alt="Utah High School Cycling League" width={200} height={80} style={{ objectFit: 'contain' }} />
            <Image src="/images/nica-logo.png" alt="NICA" width={100} height={100} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>A Special thanks to our Sponsors!</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-sm) auto' }}>
            We know that sponsorship is mostly about generosity and an interest in the students.
          </p>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <Link href="/sponsors" className="btn-accent" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>View All Sponsors &amp; Become One!</Link>
          </div>
          <SponsorCarousel />
        </div>
      </section>

      {/* Inline Quick FAQ Section */}
      <section id="faq" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'rgb(var(--surface-main))' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2>Quick FAQs</h2>
            <p className="text-muted">The most common questions answered. See the full FAQ for everything else.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              ['Who can join?', 'Students in 7th-12th grade attending Lehi area schools. Junior Devo is for 7th and 8th graders.'],
              ['When do practices start?', 'Practices begin in April and run through October race season, 2-3 times per week.'],
              ['Do I need an expensive bike?', 'No — any trail-capable mountain bike works. Coaches can provide recommendations.'],
              ['Is there financial assistance?', 'Yes! NICA has a scholarship program. Talk to a coach for details.'],
              ['What does it cost?', 'Team fees + NICA registration. Full cost details are covered at the Kickoff Meeting.'],
            ].map(([q, a]) => (
              <div key={q} className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
                <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'rgb(var(--color-primary))' }}>{q}</p>
                <p className="text-muted">{a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
            <Link href="/join#faq" className="btn-primary">View Full FAQ →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
