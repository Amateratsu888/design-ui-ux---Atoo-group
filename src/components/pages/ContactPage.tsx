import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../Button";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Téléphone",
      lines: ["+221 78 544 54 54", "+221 78 401 14 14"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["contact@atoogroupe.com", "atoogroupe.com"],
    },
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["VDN 3, Rond point Malika", "Villa 82, Dakar, Sénégal"],
    },
    {
      icon: Clock,
      title: "Horaires",
      lines: ["Lun - Ven : 8h00 - 18h00", "Sam : 9h00 - 13h00"],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Contactez-nous</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-xl border border-neutral-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#933096" }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-neutral-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-neutral-200">
              <h3 className="mb-6">Envoyez-nous un message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-700">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
                      style={
                        { "--tw-ring-color": "#933096" } as React.CSSProperties
                      }
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-neutral-700">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-700">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <Button
                  style={{
                    backgroundColor: "#933096",
                    borderColor: "#933096",
                    color: "#ffffff",
                  }}
                  className="hover:opacity-90"
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 overflow-hidden rounded-lg">
              <div
                className="h-64 flex items-center justify-center"
                style={{ backgroundColor: "#933096" + "15" }}
              >
                <div className="text-center" style={{ color: "#933096" }}>
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">
                    VDN 3, Rond point Malika, Villa 82
                  </p>
                  <p className="text-sm text-neutral-500">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
