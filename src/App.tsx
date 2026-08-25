import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarPlus,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";

import { weddingData } from "./lib/weddingData";
import { InvitationCover } from "./components/InvitationCover";
import { MusicControl } from "./components/MusicControl";
import { Petals, GoldDust } from "./components/Particles";
import { Ornament } from "./components/Ornament";
import { SectionTitle } from "./components/SectionTitle";
import { Gallery } from "./components/Gallery";
import { Countdown } from "./components/Countdown";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const [opened, setOpened] = useState(false);

  const addCalendar = (title: string, date: string, time: string) => {
    const start = new Date(`${date} ${time}`);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:${title} - ${weddingData.bride.name} & ${weddingData.groom.name}`,
      `LOCATION:${weddingData.venue.name}`,
      "DESCRIPTION:Wedding celebration",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replaceAll(" ", "-")}.ics`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#240811] text-[#f8efe2]">
      {/* Invitation opening screen */}
      <InvitationCover open={opened} onOpen={() => setOpened(true)} />

      {/* Music */}
      <MusicControl enabled={opened} />

      {/* Floating petals */}
      {opened && <Petals />}

      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/5 bg-[#240811]/45 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#home" className="font-display text-xl text-[#e6c76c]">
            {weddingData.bride.name} &amp; {weddingData.groom.name}
          </a>

          <nav className="hidden gap-5 text-[9px] uppercase tracking-[.25em] text-[#d8c5a2] md:flex">
            <a href="#couple">Couple</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#venue">Venue</a>
            <a href="#reception">Reception</a>
            <a href="#rsvp">RSVP</a>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* ================= HERO ================= */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20">
          <GoldDust />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(207,163,74,.18),transparent_35%),linear-gradient(180deg,#2e0b16,#240811)]" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(109,39,48,.5),transparent_65%)]" />

          <motion.div
            className="relative z-10 max-w-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
            {/* Blessing */}
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[10px] font-semibold uppercase tracking-[.5em] text-[#d8b45c]">
              {weddingData.blessing}
            </motion.p>

            {/* Telugu blessing */}
            <motion.p
              variants={fadeUp}
              className="font-telugu text-sm text-[#d2bd96]">
              {weddingData.teluguBlessing}
            </motion.p>

            {/* ================= BRIDE + GROOM ================= */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center font-display font-semibold leading-[0.85] md:flex-row md:gap-6">
              <span className="gold-text text-[4.5rem] sm:text-7xl md:text-[10rem]">
                {weddingData.bride.name}
              </span>

              <span className="my-3 text-4xl text-[#d8b45c] md:my-0 md:text-5xl">
                ♡
              </span>

              <span className="gold-text text-[4.5rem] sm:text-7xl md:text-[10rem]">
                {weddingData.groom.name}
              </span>
            </motion.h1>

            {/* ================= WEDDING DATE ================= */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 text-center text-[10px] uppercase tracking-[.22em] text-[#d8c6a8] sm:text-xs sm:tracking-[.32em]">
              <span>Are getting married</span>

              <span className="h-1 w-1 shrink-0 rounded-full bg-[#d8b45c]" />

              <span>{weddingData.weddingDate}</span>
            </motion.div>

            {/* Ornament */}
            <motion.div variants={fadeUp}>
              <Ornament className="mt-10" />
            </motion.div>

            {/* Scroll button */}
            <motion.a
              variants={fadeUp}
              href="#couple"
              className="mt-10 inline-flex rounded-full border border-[#d8b45c]/50 px-7 py-3 text-[10px] font-semibold uppercase tracking-[.3em] text-[#f0d995]">
              Scroll to celebrate ↓
            </motion.a>
          </motion.div>

          <div className="absolute bottom-0 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-t from-[#cfa34a]/40 to-transparent" />
        </section>

        {/* ================= COUPLE ================= */}
        <section
          id="couple"
          className="relative bg-[#f1e5d1] px-5 py-28 text-[#40101b] md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="The couple"
              title="Two Hearts, One Journey"
              telugu="రెండు హృదయాలు — ఒక అందమైన ప్రయాణం"
            />

            <div className="grid gap-8 md:grid-cols-2">
              {[
                [weddingData.bride, "The Bride"],
                [weddingData.groom, "The Groom"],
              ].map(([person, label], i) => (
                <motion.div
                  key={label as string}
                  initial={{
                    opacity: 0,
                    x: i === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#9f772e]/35 bg-[#f8efe2] p-3 shadow-[0_25px_70px_rgba(70,25,25,.15)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                    <img
                      src={(person as typeof weddingData.bride).image}
                      alt={label as string}
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#260810]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-7 left-7 text-white">
                      <p className="text-[9px] uppercase tracking-[.35em] text-[#e4c66e]">
                        {label as string}
                      </p>

                      <h3 className="mt-1 font-display text-5xl">
                        {(person as typeof weddingData.bride).name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-xl text-center">
              <Heart
                className="mx-auto mb-5 fill-[#8f293c] text-[#8f293c]"
                size={20}
              />

              <p className="font-display text-3xl italic text-[#6d2934]">
                “Two hearts, one beautiful journey.”
              </p>
            </div>
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section className="relative bg-[#2b0b15] px-5 py-28 md:py-36">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Our story" title="A Journey of Love" />

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#cfa34a]/50 to-transparent md:left-1/2" />

              <div className="space-y-12">
                {weddingData.journey.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: i * 0.08,
                    }}
                    className={`relative flex items-center md:${
                      i % 2 === 0 ? "justify-start" : "justify-end"
                    }`}>
                    <div className="w-full pl-12 md:w-[44%] md:pl-0">
                      <div className="rounded-2xl border border-[#cfa34a]/20 bg-[#3a101b]/70 p-7 backdrop-blur">
                        <p className="text-[9px] uppercase tracking-[.3em] text-[#d8b45c]">
                          Chapter {String(i + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 font-display text-3xl text-[#f4e1b0]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#cbbda6]">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <span className="absolute left-1.5 h-5 w-5 rounded-full border border-[#d8b45c] bg-[#2b0b15] md:left-1/2 md:-translate-x-1/2">
                      <span className="absolute inset-1 rounded-full bg-[#d8b45c]" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= EVENTS ================= */}
        <section
          id="events"
          className="bg-[#f1e5d1] px-5 py-28 text-[#40101b] md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Save the dates"
              title="Wedding Celebrations"
              telugu="మా వివాహ వేడుకలకు సాదర ఆహ్వానం"
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {weddingData.events.map((event, i) => (
                <motion.article
                  key={event.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                  }}
                  className="relative rounded-2xl border border-[#a47c31]/35 bg-[#f8efe2] p-7 shadow-[0_20px_60px_rgba(70,25,25,.1)]">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#4b101d] text-[#e6c76c]">
                    <Sparkles size={19} />
                  </div>

                  <p className="text-[9px] uppercase tracking-[.3em] text-[#9a7228]">
                    {event.subtitle}
                  </p>

                  <h3 className="mt-2 font-display text-4xl">{event.title}</h3>

                  <div className="mt-7 space-y-3 text-sm text-[#6b5960]">
                    <p className="flex gap-3">
                      <CalendarPlus
                        size={16}
                        className="mt-0.5 text-[#9b762d]"
                      />
                      {event.date}
                    </p>

                    <p className="flex gap-3">
                      <Clock3 size={16} className="mt-0.5 text-[#9b762d]" />
                      {event.time}
                    </p>

                    <p className="flex gap-3">
                      <MapPin size={16} className="mt-0.5 text-[#9b762d]" />
                      {event.venue}
                    </p>
                  </div>

                  <p className="mt-7 border-t border-[#b18a42]/20 pt-5 text-sm leading-6 text-[#806e72]">
                    {event.description}
                  </p>

                  <button
                    onClick={() =>
                      addCalendar(event.title, event.date, event.time)
                    }
                    className="mt-6 w-full rounded-full border border-[#a47c31]/50 px-4 py-3 text-[9px] font-semibold uppercase tracking-[.25em] text-[#6c4b16]">
                    Add to calendar
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COUNTDOWN ================= */}
        <section className="relative overflow-hidden bg-[#32101a] px-5 py-28 md:py-36">
          <GoldDust />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <SectionTitle
              eyebrow="Until we say I do"
              title="The Countdown Begins"
            />

            <Countdown date={weddingData.weddingDateISO} />
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="bg-[#241018] px-5 py-28 md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Captured moments" title="Our Memories" />

            <Gallery images={weddingData.gallery} />
          </div>
        </section>

        {/* ================= VENUE ================= */}
        <section
          id="venue"
          className="bg-[#f1e5d1] px-5 py-28 text-[#40101b] md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Join us here"
              title="The Wedding Venue"
              telugu="మీ రాక కోసం ఎదురుచూస్తున్నాము"
            />

            <div className="grid overflow-hidden rounded-[1.5rem] border border-[#a47c31]/30 bg-[#f8efe2] shadow-[0_25px_80px_rgba(70,25,25,.13)] lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4b101d] text-[#e6c76c]">
                  <Navigation size={20} />
                </div>

                <h3 className="mt-7 font-display text-5xl">
                  {weddingData.venue.name}
                </h3>

                <p className="mt-5 flex gap-3 text-sm leading-7 text-[#6d5c61]">
                  <MapPin className="mt-1 shrink-0 text-[#9a7228]" size={18} />

                  {weddingData.venue.address}
                </p>

                <p className="mt-4 flex gap-3 text-sm text-[#6d5c61]">
                  <CalendarPlus className="text-[#9a7228]" size={18} />
                  {weddingData.weddingDate} · {weddingData.weddingTime}
                </p>

                <a
                  href={weddingData.venue.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#4b101d] px-7 py-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#f4dfaa]">
                  Get directions
                </a>
              </div>

              <div className="min-h-[340px] bg-[#ddd0bb]">
                <iframe
                  title="Wedding venue map"
                  src={weddingData.venue.embedUrl}
                  className="h-full min-h-[340px] w-full border-0 grayscale-[.15]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="reception"
          className="bg-[#f1e5d1] px-5 py-28 text-[#40101b] md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Join us for the celebration"
              title="The Reception Venue"
              telugu="విందు వేడుకకు సాదర ఆహ్వానం"
            />

            <div className="grid overflow-hidden rounded-[1.5rem] border border-[#a47c31]/30 bg-[#f8efe2] shadow-[0_25px_80px_rgba(70,25,25,.13)] lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4b101d] text-[#e6c76c]">
                  <Navigation size={20} />
                </div>

                <h3 className="mt-7 font-display text-5xl">
                  {weddingData.receptionVenue.name}
                </h3>

                <p className="mt-5 flex gap-3 text-sm leading-7 text-[#6d5c61]">
                  <MapPin className="mt-1 shrink-0 text-[#9a7228]" size={18} />
                  {weddingData.receptionVenue.address}
                </p>

                <p className="mt-4 flex gap-3 text-sm text-[#6d5c61]">
                  <CalendarPlus className="text-[#9a7228]" size={18} />
                  {weddingData.receptionDate} · {weddingData.receptionTime}
                </p>

                <a
                  href={weddingData.receptionVenue.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#4b101d] px-7 py-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#f4dfaa]">
                  Get directions
                </a>
              </div>

              <div className="min-h-[340px] bg-[#ddd0bb]">
                <iframe
                  title="Reception venue map"
                  src={weddingData.receptionVenue.embedUrl}
                  className="h-full min-h-[340px] w-full border-0 grayscale-[.15]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAMILY ================= */}
        <section className="bg-[#2b0b15] px-5 py-28 md:py-36">
          <div className="mx-auto max-w-4xl">
            <SectionTitle eyebrow="With their blessings" title="Our Families" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="gold-border rounded-2xl bg-[#3a101b]/70 p-8 text-center">
                <p className="text-[9px] uppercase tracking-[.3em] text-[#d8b45c]">
                  Bride's Family
                </p>

                <div className="mt-5 space-y-2 font-display text-2xl text-[#f2dfb0]">
                  {weddingData.family.bride.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
              </div>

              <div className="gold-border rounded-2xl bg-[#3a101b]/70 p-8 text-center">
                <p className="text-[9px] uppercase tracking-[.3em] text-[#d8b45c]">
                  Groom's Family
                </p>

                <div className="mt-5 space-y-2 font-display text-2xl text-[#f2dfb0]">
                  {weddingData.family.groom.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RSVP ================= */}
        <section
          id="rsvp"
          className="relative overflow-hidden bg-[#f1e5d1] px-5 py-28 text-center text-[#40101b] md:py-36">
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              eyebrow="Be part of our day"
              title="We Would Be Honored By Your Presence"
            />

            <p className="mx-auto max-w-xl text-sm leading-7 text-[#6d5c61]">
              Your presence and blessings are the most precious gift we could
              receive. Please join us as we begin our forever.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              {/* <a
                href={weddingData.contacts.brideWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4b101d] px-6 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#f4dfaa]">
                <MessageCircle size={15} />
                Contact Bride
              </a>

              <a
                href={weddingData.contacts.groomWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7d5a1e]/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#6c4b16]">
                <Phone size={15} />
                Contact Groom
              </a> */}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="relative overflow-hidden bg-[#21070f] px-5 py-28 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(207,163,74,.14),transparent_40%)]" />

          <div className="relative">
            <p className="font-telugu text-sm text-[#d8b45c]">
              శుభమస్తు • మంగళం
            </p>

            <h2 className="mt-5 font-display text-6xl text-[#f2dda8] md:text-8xl">
              {weddingData.bride.name} <span className="text-[#cfa34a]">♥</span>{" "}
              {weddingData.groom.name}
            </h2>

            <Ornament className="mt-8" />

            <p className="mt-8 text-[10px] uppercase tracking-[.35em] text-[#a99a80]">
              {weddingData.weddingDate}
            </p>

            <p className="mt-5 font-display text-2xl italic text-[#d0c1a6]">
              Your presence and blessings mean the world to us.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
