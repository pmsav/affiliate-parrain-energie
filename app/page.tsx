import ParrainEnergieLandingClient from "./ParrainEnergieLandingClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Code Parrain TotalEnergies - 20€ Offerts (2025)",
  description:
    "Code parrain TotalEnergies 108699459 : 20€ offerts + économies jusqu'à 280€/an. Simulateur gratuit, parrainage simple et rapide. Changez maintenant !",
  keywords:
    "code parrain totalenergies 108699459, parrainage total energie, code promo totalenergies, reduction facture electricite, economie energie",
  openGraph: {
    title: "Code Parrain TotalEnergies - 20€ Offerts (2025)",
    description:
      "Utilisez le code 108699459 et économisez 20€ + jusqu'à 280€/an sur vos factures d'énergie avec TotalEnergies",
    type: "website",
  },
}

export default function ParrainEnergieLanding() {
  return <ParrainEnergieLandingClient />
}
