import React, { useState } from "react";
import {
  Settings,
  Crown,
  CreditCard,
  Save,
  Users,
  Building2,
  Phone,
  DollarSign,
  Check,
  AlertCircle,
  Percent,
  Calendar,
  Video,
  MapPin,
  Sparkles,
  Gift,
  Shield,
} from "lucide-react";
import { Button } from "../Button";

const PURPLE = "#933096";
const PURPLE_LIGHT = "#f9f0fa";
const PURPLE_MID = "#f3d6f7";
const PURPLE_BORDER = "#c87ac8";

interface PricingSettings {
  standardAccessFee: number;
  vipAccessFee: number;
  standardCommissionRate: number;
  vipCommissionRate: number;
  onlineAppointmentPrice: number;
  inPersonAppointmentPrice: number;
  firstAppointmentFree: boolean;
  vipServicesEnabled: boolean;
}

interface AdminSettingsPageProps {
  onNavigate?: (page: string) => void;
}

export function AdminSettingsPage({ onNavigate }: AdminSettingsPageProps) {
  const [activeTab, setActiveTab] = useState<
    "pricing" | "bank-accounts" | "general"
  >("pricing");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [savedSection, setSavedSection] = useState<string | null>(null);

  const [pricingSettings, setPricingSettings] = useState<PricingSettings>({
    standardAccessFee: 50000,
    vipAccessFee: 100000,
    standardCommissionRate: 5,
    vipCommissionRate: 3,
    onlineAppointmentPrice: 25000,
    inPersonAppointmentPrice: 50000,
    firstAppointmentFree: true,
    vipServicesEnabled: true,
  });

  const [bankAccounts, setBankAccounts] = useState([
    {
      id: "bank-1",
      bankName:
        "BICIS (Banque Internationale pour le Commerce et l'Industrie du Sénégal)",
      accountName: "Atoo Group SARL",
      accountNumber: "SN08 SN001 01234 567890123456 78",
      iban: "SN08SN00101234567890123456 78",
      swiftCode: "BICISNDAXXX",
      isActive: true,
    },
    {
      id: "bank-2",
      bankName: "Orange Money",
      accountName: "Atoo Group",
      accountNumber: "+221 77 123 45 67",
      iban: "",
      swiftCode: "",
      isActive: true,
    },
    {
      id: "bank-3",
      bankName: "Wave",
      accountName: "Atoo Group",
      accountNumber: "+221 76 987 65 43",
      iban: "",
      swiftCode: "",
      isActive: true,
    },
  ]);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSaveSection = async (sectionId: string) => {
    setSavingSection(sectionId);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSavingSection(null);
    setSavedSection(sectionId);
    setTimeout(() => setSavedSection(null), 2000);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Configuration</h1>
          <p className="text-neutral-600">
            Gérez les paramètres de tarification et de paiement
          </p>
        </div>
        <Button
          style={{
            backgroundColor: PURPLE,
            borderColor: PURPLE,
            color: "#fff",
          }}
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Enregistrement...
            </>
          ) : saveSuccess ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Enregistré !
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </>
          )}
        </Button>
      </div>

      {saveSuccess && (
        <div className="bg-green-50 border border-green-300 rounded-lg p-4 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-600" />
          <p className="text-green-800">
            Les paramètres ont été enregistrés avec succès.
          </p>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200">
        <div className="border-b border-neutral-200">
          <nav className="flex">
            {[
              { id: "pricing", label: "Tarification", icon: DollarSign },
              {
                id: "bank-accounts",
                label: "Comptes bancaires",
                icon: Building2,
              },
              { id: "general", label: "Paramètres généraux", icon: Settings },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                style={
                  activeTab === id
                    ? { borderBottomColor: PURPLE, color: PURPLE }
                    : {}
                }
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === id ? "" : "border-transparent text-neutral-600 hover:text-neutral-900"}`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div className="space-y-8">
              {/* Standard Client Access Fee */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Frais d'inscription client
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Montant payé par un prospect pour devenir client standard
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1 max-w-xs">
                        <input
                          type="number"
                          value={pricingSettings.standardAccessFee}
                          onChange={(e) =>
                            setPricingSettings((prev) => ({
                              ...prev,
                              standardAccessFee: parseInt(e.target.value) || 0,
                            }))
                          }
                          className="w-full px-4 py-3 pr-16 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium">
                          FCFA
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div />
                      <Button
                        size="sm"
                        style={
                          savedSection === "standard-access"
                            ? {
                                backgroundColor: "#16a34a",
                                borderColor: "#16a34a",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: PURPLE,
                                borderColor: PURPLE,
                                color: "#fff",
                              }
                        }
                        onClick={() => handleSaveSection("standard-access")}
                        disabled={savingSection === "standard-access"}
                      >
                        {savingSection === "standard-access" ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sauvegarde...
                          </>
                        ) : savedSection === "standard-access" ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Sauvegardé
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-1" />
                            Sauvegarder
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIP Access Fee */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Frais d'accès VIP
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Montant payé par un client standard pour devenir client
                      VIP
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1 max-w-xs">
                        <input
                          type="number"
                          value={pricingSettings.vipAccessFee}
                          onChange={(e) =>
                            setPricingSettings((prev) => ({
                              ...prev,
                              vipAccessFee: parseInt(e.target.value) || 0,
                            }))
                          }
                          className="w-full px-4 py-3 pr-16 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg font-semibold"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 font-medium">
                          FCFA
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div />
                      <Button
                        size="sm"
                        style={
                          savedSection === "vip-access"
                            ? {
                                backgroundColor: "#16a34a",
                                borderColor: "#16a34a",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: PURPLE,
                                borderColor: PURPLE,
                                color: "#fff",
                              }
                        }
                        onClick={() => handleSaveSection("vip-access")}
                        disabled={savingSection === "vip-access"}
                      >
                        {savingSection === "vip-access" ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sauvegarde...
                          </>
                        ) : savedSection === "vip-access" ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Sauvegardé
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-1" />
                            Sauvegarder
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Pricing */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: PURPLE_MID }}
                  >
                    <Calendar className="w-6 h-6" style={{ color: PURPLE }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Tarifs des rendez-vous
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Définissez les prix pour les rendez-vous VIP (en ligne et
                      en présentiel)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className="p-4 rounded-lg border"
                    style={{
                      backgroundColor: PURPLE_LIGHT,
                      borderColor: PURPLE_BORDER,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="w-5 h-5" style={{ color: PURPLE }} />
                      <span className="font-medium text-neutral-900">
                        Rendez-vous en ligne
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={pricingSettings.onlineAppointmentPrice}
                        onChange={(e) =>
                          setPricingSettings((prev) => ({
                            ...prev,
                            onlineAppointmentPrice:
                              parseInt(e.target.value) || 0,
                          }))
                        }
                        className="w-full px-4 py-2 pr-16 border rounded-lg focus:outline-none focus:ring-2"
                        style={{ borderColor: PURPLE_BORDER }}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">
                        FCFA
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <span className="font-medium text-neutral-900">
                        Rendez-vous présentiel
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={pricingSettings.inPersonAppointmentPrice}
                        onChange={(e) =>
                          setPricingSettings((prev) => ({
                            ...prev,
                            inPersonAppointmentPrice:
                              parseInt(e.target.value) || 0,
                          }))
                        }
                        className="w-full px-4 py-2 pr-16 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">
                        FCFA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button
                    size="sm"
                    style={
                      savedSection === "appointments"
                        ? {
                            backgroundColor: "#16a34a",
                            borderColor: "#16a34a",
                            color: "#fff",
                          }
                        : {
                            backgroundColor: PURPLE,
                            borderColor: PURPLE,
                            color: "#fff",
                          }
                    }
                    onClick={() => handleSaveSection("appointments")}
                    disabled={savingSection === "appointments"}
                  >
                    {savingSection === "appointments" ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sauvegarde...
                      </>
                    ) : savedSection === "appointments" ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Sauvegardé
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-1" />
                        Sauvegarder les tarifs RDV
                      </>
                    )}
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-neutral-900">
                        Premier rendez-vous gratuit
                      </p>
                      <p className="text-sm text-neutral-600">
                        Le premier RDV de chaque client VIP est offert
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setPricingSettings((prev) => ({
                        ...prev,
                        firstAppointmentFree: !prev.firstAppointmentFree,
                      }))
                    }
                    className={`relative w-14 h-7 rounded-full transition-colors ${pricingSettings.firstAppointmentFree ? "bg-green-600" : "bg-neutral-300"}`}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow ${pricingSettings.firstAppointmentFree ? "translate-x-8" : "translate-x-1"}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bank Accounts Tab */}
          {activeTab === "bank-accounts" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Comptes de réception des paiements
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  style={{ color: PURPLE, borderColor: PURPLE_BORDER }}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Ajouter un compte
                </Button>
              </div>
              <div className="space-y-4">
                {bankAccounts.map((account) => (
                  <div
                    key={account.id}
                    className={`p-4 rounded-lg border-2 ${account.isActive ? "" : "border-neutral-200 bg-neutral-50"}`}
                    style={
                      account.isActive
                        ? {
                            borderColor: PURPLE_BORDER,
                            backgroundColor: PURPLE_LIGHT,
                          }
                        : {}
                    }
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-neutral-900">
                            {account.bankName}
                          </h4>
                          {account.isActive && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                backgroundColor: PURPLE_MID,
                                color: PURPLE,
                              }}
                            >
                              Actif
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-600 mb-1">
                          <strong>Titulaire :</strong> {account.accountName}
                        </p>
                        <p className="text-sm text-neutral-600 mb-1">
                          <strong>Numéro :</strong> {account.accountNumber}
                        </p>
                        {account.iban && (
                          <p className="text-sm text-neutral-600 mb-1">
                            <strong>IBAN :</strong> {account.iban}
                          </p>
                        )}
                        {account.swiftCode && (
                          <p className="text-sm text-neutral-600">
                            <strong>SWIFT :</strong> {account.swiftCode}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          style={{ color: PURPLE, borderColor: PURPLE_BORDER }}
                        >
                          Modifier
                        </Button>
                        <button
                          onClick={() =>
                            setBankAccounts((prev) =>
                              prev.map((acc) =>
                                acc.id === account.id
                                  ? { ...acc, isActive: !acc.isActive }
                                  : acc,
                              ),
                            )
                          }
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${account.isActive ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
                        >
                          {account.isActive ? "Désactiver" : "Activer"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-900">
                    Information importante
                  </p>
                  <p className="text-sm text-amber-700 mt-1">
                    Les comptes actifs seront affichés aux clients lors du
                    processus de paiement. Assurez-vous que les informations
                    sont correctes et à jour.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* General Settings Tab */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5" style={{ color: PURPLE }} />
                    Informations de l'entreprise
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Nom de l'entreprise",
                        defaultValue: "Atoo Group SARL",
                        type: "text",
                      },
                      {
                        label: "Adresse",
                        defaultValue: "Almadies, Dakar, Sénégal",
                        type: "text",
                      },
                      {
                        label: "Email de contact",
                        defaultValue: "contact@baraka-immo.sn",
                        type: "email",
                      },
                      {
                        label: "Téléphone",
                        defaultValue: "+221 33 123 45 67",
                        type: "tel",
                      },
                    ].map(({ label, defaultValue, type }) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          {label}
                        </label>
                        <input
                          type={type}
                          defaultValue={defaultValue}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5" style={{ color: PURPLE }} />
                    Paramètres de contact
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        label: "WhatsApp Business",
                        defaultValue: "+221 77 123 45 67",
                        type: "tel",
                      },
                      {
                        label: "Lien calendrier (Calendly, etc.)",
                        defaultValue: "https://calendly.com/baraka-immo",
                        type: "url",
                      },
                      {
                        label: "Horaires d'ouverture",
                        defaultValue: "Lun-Ven: 9h-18h | Sam: 9h-13h",
                        type: "text",
                      },
                    ].map(({ label, defaultValue, type }) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          {label}
                        </label>
                        <input
                          type={type}
                          defaultValue={defaultValue}
                          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Notifications email
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Nouvelle demande de bien",
                      description:
                        "Recevoir un email pour chaque nouvelle demande",
                      enabled: true,
                    },
                    {
                      label: "Nouveau paiement VIP",
                      description: "Notification quand un client devient VIP",
                      enabled: true,
                    },
                    {
                      label: "Nouveau rendez-vous",
                      description: "Alerte pour les demandes de rendez-vous",
                      enabled: true,
                    },
                    {
                      label: "Rapport hebdomadaire",
                      description: "Résumé des activités de la semaine",
                      enabled: false,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-neutral-900">
                          {item.label}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                      <button
                        className="relative w-12 h-6 rounded-full transition-colors"
                        style={{
                          backgroundColor: item.enabled ? PURPLE : "#d1d5db",
                        }}
                      >
                        <span
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform shadow ${item.enabled ? "translate-x-7" : "translate-x-1"}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
