import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Shield, FileText, AlertTriangle, Users, Euro } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Conditions Générales - Parrain Energie",
  description:
    "Conditions générales d'utilisation du service de parrainage énergétique Parrain Energie. Contact: hello@parrain-energie.fr",
  robots: "index, follow",
}

export default function ConditionsGenerales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <FileText className="h-4 w-4 mr-2" />
              Document Légal
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Conditions Générales d'Utilisation</h1>
            <p className="text-xl text-gray-600">Service de parrainage énergétique Parrain Energie</p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : 7 janvier 2025</p>
          </div>

          {/* Contact Info */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">Contact</h3>
              </div>
              <p className="text-blue-700">
                Pour toute question concernant ces conditions générales, contactez-nous à :
                <a href="mailto:hello@parrain-energie.fr" className="font-semibold underline ml-1">
                  hello@parrain-energie.fr
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Article 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  Article 1 - Objet et Champ d'Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web
                  <strong> Parrain Energie</strong>, service indépendant de mise en relation et d'information sur les
                  offres de parrainage énergétique.
                </p>
                <p className="text-gray-700">
                  Le site propose des informations sur les codes de parrainage, notamment le code
                  <Badge className="mx-1 bg-green-100 text-green-800">108699459</Badge>
                  pour TotalEnergies, ainsi qu'un simulateur d'économies d'énergie.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Important :</strong> Parrain Energie est un service indépendant non affilié à
                      TotalEnergies ou tout autre fournisseur d'énergie.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Article 2 - Acceptation des Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  L'utilisation du site Parrain Energie implique l'acceptation pleine et entière des présentes CGU. Si
                  vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce service.
                </p>
                <p className="text-gray-700">
                  Ces conditions peuvent être modifiées à tout moment. Les utilisateurs seront informés des
                  modifications par mise à jour de la date de dernière modification.
                </p>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  Article 3 - Description du Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-gray-900">Le service Parrain Energie propose :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Mise à disposition de codes de parrainage énergétique</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Simulateur d'économies d'énergie gratuit et informatif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Informations sur les tarifs et offres des fournisseurs d'énergie</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Conseils et stratégies de parrainage</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Service gratuit :</strong> L'utilisation de Parrain Energie est entièrement gratuite. Aucun
                    frais n'est facturé aux utilisateurs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Euro className="h-6 w-6 text-orange-600 mr-3" />
                  Article 4 - Parrainage et Gains
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Les codes de parrainage et les gains associés sont soumis aux conditions générales des fournisseurs
                  d'énergie concernés (TotalEnergies, etc.).
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Conditions importantes :</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Les gains de parrainage sont versés directement par les fournisseurs d'énergie</li>
                    <li>• Parrain Energie ne garantit pas le versement des gains de parrainage</li>
                    <li>• Les délais de versement dépendent des conditions du fournisseur</li>
                    <li>• Les montants peuvent varier selon les offres en cours</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-800 text-sm">
                    <strong>Responsabilité :</strong> Parrain Energie n'est pas responsable des litiges entre
                    utilisateurs et fournisseurs d'énergie concernant les gains de parrainage.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-3" />
                  Article 5 - Limitation de Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Parrain Energie s'efforce de fournir des informations exactes et à jour, mais ne peut garantir
                  l'exactitude, la complétude ou l'actualité des informations diffusées.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Exclusions de responsabilité :</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Variations des tarifs énergétiques</li>
                    <li>• Modifications des conditions de parrainage par les fournisseurs</li>
                    <li>• Interruptions temporaires du service</li>
                    <li>• Erreurs dans les simulations d'économies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-gray-600 mr-3" />
                  Article 6 - Propriété Intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Le contenu du site Parrain Energie (textes, images, logos, design) est protégé par les droits de
                  propriété intellectuelle. Toute reproduction non autorisée est interdite.
                </p>
                <p className="text-gray-700">
                  Les marques et logos des fournisseurs d'énergie mentionnés appartiennent à leurs propriétaires
                  respectifs.
                </p>
              </CardContent>
            </Card>

            {/* Article 7 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  Article 7 - Contact et Réclamations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Pour toute question, réclamation ou demande d'information concernant le service Parrain Energie, vous
                  pouvez nous contacter :
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Email de contact</p>
                      <a
                        href="mailto:hello@parrain-energie.fr"
                        className="text-green-600 hover:text-green-700 underline"
                      >
                        hello@parrain-energie.fr
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Nous nous engageons à répondre dans les meilleurs délais à toute demande légitime.
                </p>
              </CardContent>
            </Card>

            {/* Article 8 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-3" />
                  Article 8 - Droit Applicable
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Les présentes conditions générales sont soumises au droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
                <p className="text-gray-700">
                  Conformément à la réglementation en vigueur, les utilisateurs disposent de la possibilité de recourir
                  à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Ces conditions générales d'utilisation sont effectives à compter du 7 janvier 2025.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/" className="text-green-600 hover:text-green-700 underline font-semibold">
                Retour à l'accueil
              </Link>
              <span className="text-gray-400">•</span>
              <a href="mailto:hello@parrain-energie.fr" className="text-blue-600 hover:text-blue-700 underline">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
