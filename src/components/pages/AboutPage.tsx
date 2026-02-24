import React from "react";
import {
  Building2,
  Users,
  Target,
  Award,
  Heart,
  Shield,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Button } from "../Button";
import teamImage from "figma:asset/5ee2ba3eef86046f93c9e05d5c89a0f68bb89c2e.png";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: "500+", label: "Biens vendus" },
    { value: "1000+", label: "Clients satisfaits" },
    { value: "15+", label: "Années d'expérience" },
    { value: "98%", label: "Taux de satisfaction" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Innovation immobilière",
      description:
        "Inédit dans le secteur de l'immobilier, achetez votre terrain facilement grâce à nos tontines de terrains.",
    },
    {
      icon: Heart,
      title: "Un accompagnement professionnel",
      description:
        "Nous sommes présents sur l'ensemble des segments de l'immobilier et nous accompagnons ainsi nos clients de A à Z.",
    },
    {
      icon: Target,
      title: "Une Agence immobilière digitale",
      description:
        "Nous utilisons le meilleur du digital et de l'humain pour transformer votre expérience de l'achat et de la location immobilière.",
    },
    {
      icon: TrendingUp,
      title: "Nos valeurs",
      description:
        "Agilité, innovation, bienveillance et proximité : autant de valeurs qui nous permettent au quotidien d'agir pour le bien des projets immobiliers de nos clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1
              className="text-sm font-medium mb-4 tracking-wide uppercase"
              style={{ color: "#933096" }}
            >
              À propos de nous
            </h1>
            <h2 className="mb-6">
              Atoo Group, votre partenaire immobilier de confiance
            </h2>
            <p className="text-xl text-slate-600">
              Nous transformons vos rêves immobiliers en réalité avec
              professionnalisme, transparence et un accompagnement personnalisé
              à chaque étape de votre projet.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100">
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#933096" }}
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-600">Vidéo de présentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 border-b border-slate-200"
        style={{ backgroundColor: "#933096" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "#933096" + "20", color: "#933096" }}
              >
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Notre Mission</span>
              </div>
              <h2 className="mb-6">
                Faciliter l'accès à la propriété pour tous
              </h2>
              <p className="text-slate-600 mb-4">
                Chez Atoo Group, nous croyons que chacun mérite d'avoir accès à
                un logement de qualité. Notre mission est de rendre
                l'investissement immobilier simple, transparent et accessible à
                tous.
              </p>
              <p className="text-slate-600 mb-6">
                Nous accompagnons nos clients à chaque étape de leur parcours
                immobilier, de la recherche du bien idéal jusqu'à la signature
                finale, en passant par le financement et les démarches
                administratives.
              </p>
              <Button
                style={{
                  backgroundColor: "#933096",
                  borderColor: "#933096",
                  color: "#ffffff",
                }}
                className="hover:opacity-90"
                onClick={() => onNavigate("contact")}
              >
                Contactez-nous
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={teamImage}
                  alt="L'équipe Atoo Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg -z-10"
                style={{ backgroundColor: "#933096" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#933096" + "20", color: "#933096" }}
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Notre Histoire</span>
            </div>
            <h2 className="mb-6">Une entreprise née d'une passion</h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 relative">
            <div
              className="absolute top-8 left-8 opacity-20"
              style={{ color: "#933096" }}
            >
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative">
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Anciennement responsable de développement commercial pour divers
                promoteurs, j'ai créé Atoo Group dans l'objectif d'apporter des
                solutions innovantes de financement dans le secteur de
                l'immobilier au Sénégal. Nous collaborons avec nos partenaires
                et clients dans divers domaines de l'immobilier tels que le
                conseil, l'orientation, les démarches administratives, la
                gestion locative, la décoration et l'aménagement…
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #933096, #5B1E6E)",
                  }}
                >
                  KD
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Khadija DARAMEEH
                  </p>
                  <p className="text-sm" style={{ color: "#933096" }}>
                    Fondatrice et DG Atoo Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#933096" + "20", color: "#933096" }}
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Nos Valeurs</span>
            </div>
            <h2 className="mb-6">Ce qui nous guide au quotidien</h2>
            <p className="text-slate-600">
              Nos valeurs fondamentales sont le socle de notre engagement envers
              nos clients et partenaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: "#933096" }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
