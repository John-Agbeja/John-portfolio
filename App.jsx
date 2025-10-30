import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsSample = [
  {
    id: 1,
    title: 'Brand Launch Ad (Video)',
    type: 'Video Edit',
    description:
      '40s promotional video for a local brand — social-ads cut, captions, and sound design.',
    media: null,
  },
  {
    id: 2,
    title: 'Social Carousel Pack',
    type: 'Graphics',
    description: 'Instagram carousel for product features and conversions.',
    media: null,
  },
  {
    id: 3,
    title: 'YouTube Short Edit',
    type: 'Video Edit',
    description: 'Short-form edit optimized for views and click-throughs.',
    media: null,
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navbar */}
      <header className="fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">JA</div>
            <div className="hidden md:block">
              <h1 className="text-sm font-semibold">John Agbeja</h1>
              <p className="text-xs text-slate-500">Digital Content Creator</p>
            </div>
          </div>
          <nav className="space-x-4">
            <a href="#work" className="text-sm hover:underline">Work</a>
            <a href="#services" className="text-sm hover:underline">Services</a>
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Hi, I’m <span className="text-blue-600">John Agbeja</span>
              <br />
              Creative Digital Content Expert
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-slate-600 max-w-xl"
            >
              I design visuals, edit videos, and run social media ad campaigns that help brands
              convert. Let’s turn ideas into scroll-stopping content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:opacity-95">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold">
                Hire Me
              </a>
            </motion.div>

            <motion.div className="mt-8 flex gap-3 items-center text-xs text-slate-500">
              <span>Services:</span>
              <span className="px-2 py-1 rounded-md bg-slate-100">Graphics</span>
              <span className="px-2 py-1 rounded-md bg-slate-100">Video Edits</span>
              <span className="px-2 py-1 rounded-md bg-slate-100">Ads Management</span>
            </motion.div>
          </div>

          {/* Animated card / profile */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-100"
          >
            {/* Decorative animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
            <div className="absolute -left-28 -top-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200 via-indigo-200 to-transparent opacity-40 animate-blob" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white/70 border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-semibold">Your Profile</p>
                  <p className="text-xs text-slate-500">Add your photo to replace this</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Services I Offer</h3>
            <p className="mt-2 text-slate-600 max-w-2xl">I help businesses grow using strategic visuals, fast edits, and smart ad campaigns.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Graphics Design',
                  desc: 'Social posts, carousels, banners, and brand visuals that convert.',
                },
                {
                  title: 'Video Editing',
                  desc: 'Short ads, promos, and storytelling edits optimized for platforms.',
                },
                {
                  title: 'Social Media Ads',
                  desc: 'Ad creative + copy recommendations and campaign setup support.',
                },
              ].map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border"
                >
                  <h4 className="font-semibold text-lg">{s.title}</h4>
                  <p className="mt-3 text-slate-600 text-sm">{s.desc}</p>
                  <div className="mt-4">
                    <a href="#contact" className="text-sm font-semibold underline">Get this service</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Selected Work</h3>
            <p className="mt-2 text-slate-600 max-w-2xl">A few projects showing the types of results I create for clients.</p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsSample.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden border shadow-sm cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="h-44 bg-blue-50 flex items-center justify-center">
                    <div className="text-center text-slate-600">Preview Area</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">{p.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Testimonials</h3>
            <p className="mt-2 text-slate-600 max-w-2xl">Happy clients and results.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <motion.blockquote
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl border shadow-sm"
                >
                  <p className="text-slate-600">“Placeholder testimonial — replace with a real client quote.”</p>
                  <footer className="mt-4 text-sm text-slate-500">Client Name • Role</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">About Me</h3>
              <p className="mt-4 text-slate-600">
                I’m a digital content creator focusing on graphics, video editing, and social media ads. I
                craft creative, on-brand content that helps businesses grow online. When I’m not editing, I’m
                learning new motion techniques and testing ad creatives.
              </p>

              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
                <li>• Graphics Design</li>
                <li>• Video Editing</li>
                <li>• Ads Strategy</li>
                <li>• Motion Graphics</li>
              </ul>
            </div>

            <div className="w-full h-56 rounded-2xl bg-blue-50 border flex items-center justify-center">
              <div className="text-center text-slate-600">About Image Placeholder</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-blue-50 py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="mt-2 text-slate-700 max-w-2xl">Interested in working together? Send a message or start a WhatsApp chat.</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <form action="https://formsubmit.co/agbejajohn47@gmail.com" method="POST" className="bg-white p-6 rounded-2xl shadow-sm border">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://vercel.com/" />
                <label className="block text-sm font-medium">Name</label>
                <input name="name" className="mt-1 w-full rounded-md border p-2" placeholder="Your name" />

                <label className="block text-sm font-medium mt-4">Email</label>
                <input name="email" className="mt-1 w-full rounded-md border p-2" placeholder="name@example.com" />

                <label className="block text-sm font-medium mt-4">Message</label>
                <textarea name="message" className="mt-1 w-full rounded-md border p-2" rows="4" placeholder="Tell me about your project" />

                <div className="mt-4 flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">Send Message</button>
                  <a href="mailto:agbejajohn47@gmail.com" className="px-4 py-2 rounded-lg border font-semibold">Or email me</a>
                </div>
              </form>

              <div className="flex flex-col gap-4">
                <div className="bg-white p-6 rounded-2xl border shadow-sm">
                  <h4 className="font-semibold">Quick Contact</h4>
                  <p className="mt-2 text-sm text-slate-600">WhatsApp: <a href="https://wa.me/2348053724254" className="text-blue-600 underline">Start chat</a> <br /><span className="text-sm text-slate-500">08053724254</span></p>
                  <p className="mt-1 text-sm text-slate-600">Email: <a href="mailto:agbejajohn47@gmail.com" className="text-blue-600 underline">agbejajohn47@gmail.com</a></p>
                  <p className="mt-1 text-sm text-slate-600">Facebook: <a href="https://www.facebook.com/profile.php?id=100081657203590" className="text-blue-600 underline">Profile</a></p>
                </div>

                <div className="bg-white p-6 rounded-2xl border shadow-sm">
                  <h4 className="font-semibold">Follow</h4>
                  <div className="mt-3 flex gap-3">
                    <a className="text-sm underline" href="#">Instagram</a>
                    <a className="text-sm underline" href="#">Facebook</a>
                    <a className="text-sm underline" href="#">YouTube</a>
                    <a className="text-sm underline" href="#">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <footer className="py-8 border-t">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} John Agbeja — Digital Content Creator</div>
        </footer>

        {/* Project modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-50 max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{selectedProject.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{selectedProject.type}</p>
                  </div>
                  <button className="text-slate-500" onClick={() => setSelectedProject(null)}>Close</button>
                </div>

                <div className="mt-4">
                  <p className="text-slate-600">{selectedProject.description}</p>
                  <div className="mt-4 h-56 bg-slate-100 rounded-md flex items-center justify-center">Media preview area</div>
                </div>

                <div className="mt-6 flex gap-3 justify-end">
                  <a className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold" href="#contact">Hire for similar work</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </main>
    </div>
  );
}