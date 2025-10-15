"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Home,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

// --- Data -------------------------------------------------------------------
const LAWS = [
  {
    title: "Undang-undang Republik Indonesia Nomor 18 Tahun 2008",
    desc: "Pengelolaan Sampah",
    href: "#",
  },
  {
    title: "Peraturan Pemerintah Nomor 27 Tahun 2020",
    desc: "Pengelolaan Sampah Spesifik",
    href: "#",
  },
  {
    title: "Peraturan Pemerintah Nomor 81 Tahun 2012",
    desc: "Pengelolaan Sampah Rumah Tangga",
    href: "#",
  },
  {
    title: "Permen LHK Nomor 14 Tahun 2021",
    desc: "Pengelolaan Sampah Pada Bank Sampah",
    href: "#",
  },
];

const PROJECTS = [
  {
    img: "/img/project-1.jpg",
    title: "Bank Sampah Induk",
    subtitle: "BSI Karawang",
    text: "Sistem pengelolaan bank sampah induk yang terintegrasi dengan teknologi modern untuk memudahkan monitoring dan evaluasi program.",
    href: "#",
  },
  {
    img: "/img/project-2.jpg",
    title: "Bank Sampah Unit",
    subtitle: "BSU Terintegrasi",
    text: "Platform digital untuk mengelola bank sampah unit di tingkat kelurahan dan desa dengan sistem pelaporan real-time.",
    href: "#",
  },
  {
    img: "/img/project-3.jpg",
    title: "Lembaga Mitra",
    subtitle: "Kemitraan Strategis",
    text: "Kerjasama dengan berbagai lembaga untuk mendukung program pengelolaan sampah yang berkelanjutan di Kabupaten Karawang.",
    href: "#",
  },
  {
    img: "/img/project-4.jpg",
    title: "Edukasi Masyarakat",
    subtitle: "Program Sosialisasi",
    text: "Kegiatan edukasi dan sosialisasi kepada masyarakat tentang pentingnya pengelolaan sampah yang baik dan benar.",
    href: "#",
  },
];

const STATS = [
  {
    key: "BSI",
    icon: <Home className="size-8" />,
    label: "BSI (Bank Sampah Induk)",
    value: 100,
  },
  {
    key: "BSU",
    icon: <Home className="size-8" />,
    label: "BSU (Bank Sampah Unit)",
    value: 1000,
  },
  {
    key: "Lembaga",
    icon: <Users className="size-8" />,
    label: "Lembaga",
    value: 420,
  },
];

const CHART_DATA = STATS.map((s) => ({ name: s.key, jumlah: s.value }));

const EVENTS = [
  {
    img: "/img/event1.jpg",
    date: "15 Jan, 2024",
    title: "Pelatihan Bank Sampah Digital",
    desc: "Kegiatan pelatihan penggunaan sistem digital untuk pengelola bank sampah di Kabupaten Karawang dengan peserta dari berbagai kelurahan.",
    href: "#",
  },
  {
    img: "/img/event2.jpg",
    date: "22 Jan, 2024",
    title: "Sosialisasi Program 3R",
    desc: "Sosialisasi program Reduce, Reuse, Recycle kepada masyarakat untuk meningkatkan kesadaran akan pentingnya pengelolaan sampah.",
    href: "#",
  },
  {
    img: "/img/event3.jpg",
    date: "5 Feb, 2024",
    title: "Monitoring Bank Sampah",
    desc: "Kegiatan monitoring dan evaluasi kinerja bank sampah di berbagai wilayah untuk memastikan program berjalan efektif.",
    href: "#",
  },
  {
    img: "/img/event4.jpg",
    date: "12 Feb, 2024",
    title: "Penghargaan Bank Sampah Terbaik",
    desc: "Penghargaan untuk bank sampah dengan kinerja terbaik dalam pengelolaan sampah dan pemberdayaan masyarakat.",
    href: "#",
  },
];

// --- Components --------------------------------------------------------------
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          SIBAS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className="px-3 py-2 text-sm font-medium"
                >
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#donate"
                  className="px-3 py-2 text-sm font-medium"
                >
                  Statistik
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="px-3 py-2 text-sm font-medium"
                >
                  Kontak Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#events"
                  className="px-3 py-2 text-sm font-medium"
                >
                  Galeri
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <a href="/login.php">Masuk</a>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-10">
              <div className="grid gap-2">
                {[
                  { href: "#home", label: "Beranda" },
                  { href: "#donate", label: "Statistik" },
                  { href: "#contact", label: "Kontak Kami" },
                  { href: "#events", label: "Galeri" },
                ].map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="text-lg py-2"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </a>
                ))}
                <Button asChild className="mt-2">
                  <a href="#">Masuk</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-[65vh] bg-emerald-600">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between gap-6 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sistem Informasi Data Bank Sampah
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Platform terintegrasi untuk mengelola data bank sampah di Kabupaten
            Karawang. Dukung gerakan lingkungan hidup yang berkelanjutan melalui
            teknologi digital.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <a href="#">Masuk</a>
          </Button>
        </motion.div>
        <div className="hidden md:block w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
          <img
            src="/img/dlhk.jpg"
            alt="DLH Karawang"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Laws() {
  return (
    <section className="-mt-16">
      <div className="mx-auto max-w-7xl px-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LAWS.map((law) => (
          <Card
            key={law.title}
            className="hover:-translate-y-1 transition-transform"
          >
            <CardHeader>
              <div className="flex items-center justify-center">
                <img src="/img/protected.png" alt="uud" className="h-16 w-16" />
              </div>
              <CardTitle className="text-base text-emerald-600">
                {law.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{law.desc}</p>
              <Button variant="link" asChild className="px-0 mt-2">
                <a href={law.href}>Baca lebih lanjut</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AboutProjects() {
  return (
    <section id="project" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold text-center uppercase text-muted-foreground">
          Tentang Kami
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="relative h-[420px] rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={p.img}
                alt="project"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-2xl font-bold">{p.title}</div>
              </div>
              <div className="absolute inset-x-0 bottom-4 mx-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-emerald-600 text-lg">
                      {p.subtitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                    <Button variant="link" asChild className="px-0 mt-2">
                      <a href={p.href}>read more</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="donate" className="bg-emerald-600 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-white text-3xl font-semibold tracking-wide">
          STATISTIK
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <Card key={i} className="text-center">
              <CardContent className="py-8">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  {s.icon}
                </div>
                <div className="text-xl font-semibold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-start">
        <div className="w-full h-[420px] overflow-hidden rounded-xl border">
          <iframe
            title="DLH Karawang Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.908260338139!2d107.27439179999999!3d-6.2757918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6982b059733bc5%3A0x846f717758c9adbd!2sDinas%20Lingkungan%20Hidup%20Kabupaten%20Karawang!5e0!3m2!1sen!2sid!4v1703078304840!5m2!1sen!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Kontak Kami</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>(0267) 406087</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>dlh@karawangkab.go.id</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5" />
              <span>
                Jl. By Pass Tanjungpura No.1, Tanjungmekar, Kec. Karawang Bar.,
                Karawang, Jawa Barat 41316
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="events" className="py-16 bg-sky-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold text-center uppercase text-emerald-700">
          GALERI
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((e, i) => (
            <Card key={i} className="overflow-hidden">
              <img
                src={e.img}
                alt="event"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-emerald-700">{e.date}</div>
                <a
                  href={e.href}
                  className="mt-1 block text-lg font-semibold hover:underline"
                >
                  {e.title}
                </a>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                <Button asChild variant="secondary" className="mt-3">
                  <a href={e.href}>Lihat</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsChart() {
  return (
    <section id="donate" className="bg-emerald-600 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-white text-3xl font-semibold tracking-wide">
          STATISTIK
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Rekap Unit & Lembaga</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="jumlah" name="Jumlah" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Summary cards */}
          <div className="grid gap-6">
            {STATS.map((s, i) => (
              <Card key={i} className="text-center">
                <CardContent className="py-6">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    {s.icon}
                  </div>
                  <div className="text-2xl font-semibold">
                    {s.value.toLocaleString()}+
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-emerald-600">
            Tentang Kami
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Sistem Informasi Data Bank Sampah (SIBAS) adalah platform digital
            yang dikembangkan untuk mendukung pengelolaan bank sampah di
            Kabupaten Karawang. Kami berkomitmen untuk mewujudkan lingkungan
            yang bersih dan berkelanjutan.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-emerald-600">
            Kontak Kami
          </h3>
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>(0267) 406087</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>dlh@karawangkab.go.id</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5" />
              <span>
                Jl. By Pass Tanjungpura No.1, Tanjungmekar, Kec. Karawang Bar.,
                Karawang, Jawa Barat 41316
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-emerald-600">
            Sosial Media
          </h3>
          <div className="mt-2 flex flex-col text-sm">
            <a
              href="https://facebook.com/dlhkkrwkab"
              className="hover:underline"
            >
              Facebook
            </a>
            <a href="https://twitter.com/dlhkrwkab" className="hover:underline">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/dlhkrwkab/"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
        Copyright © 2023 | Sistem Informasi Data Bank Sampah. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default function SibasLanding() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <NavBar />
      <main>
        <Hero />
        <Laws />
        <AboutProjects />
        <StatsChart />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
