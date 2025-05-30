
import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users, Globe, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/c5c023a0-9053-4a73-93dd-f6eeac42d2c7.png" 
                    alt="EdgeFounder Logo" 
                    className="h-10 w-auto"
                  />
                  <span className="text-white font-bold text-xl">EdgeFounder</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#chi-siamo" className="text-white/80 hover:text-white transition-colors">Chi Siamo</a>
                <a href="#investimenti" className="text-white/80 hover:text-white transition-colors">Investimenti</a>
                <a href="#prodotti" className="text-white/80 hover:text-white transition-colors">Prodotti</a>
                <a href="#news" className="text-white/80 hover:text-white transition-colors">News</a>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Contattaci
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Il Futuro degli
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">
                {" "}Investimenti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Trasformiamo idee innovative in opportunità di investimento concrete. 
              La nostra expertise in edge founding guida il successo delle startup più promettenti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white">
                Scopri i Nostri Fondi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Richiedi Consulenza
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">€2.5B+</div>
              <div className="text-white/60">Asset Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white/60">Startup Finanziate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-white/60">Tasso di Successo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
              <div className="text-white/60">Anni di Esperienza</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Chi Siamo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EdgeFounder è una società di investimenti specializzata nell'identificazione e supporto 
              di startup innovative in fase early-stage, con focus su tecnologie emergenti e mercati in rapida crescita.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Innovazione</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Identifichiamo le tecnologie più promettenti prima che diventino mainstream, 
                  investendo in soluzioni che ridefiniscono i settori di riferimento.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Sicurezza</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  La nostra due diligence rigorosa e l'approccio basato sui dati garantiscono 
                  investimenti sicuri e performanti nel lungo termine.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Non siamo solo investitori, ma partner strategici che supportano attivamente 
                  la crescita delle aziende del nostro portfolio.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filosofia di Investimento */}
      <section id="investimenti" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                La Nostra Filosofia di Investimento
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Crediamo nel potere delle idee rivoluzionarie. La nostra strategia si basa su tre pilastri fondamentali 
                che ci hanno permesso di generare rendimenti superiori alla media per oltre un decennio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Early Stage Focus</h3>
                    <p className="text-gray-600">Investiamo in fasi seed e Series A, quando il potenziale di crescita è massimo.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tecnologie Emergenti</h3>
                    <p className="text-gray-600">Focus su AI, blockchain, IoT e altre tecnologie che stanno trasformando il mercato.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Support Attivo</h3>
                    <p className="text-gray-600">Forniamo mentorship, network e risorse per accelerare la crescita delle startup.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Performance Track Record</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>IRR Medio</span>
                    <span className="font-bold text-2xl">32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Exit Exitose</span>
                    <span className="font-bold text-2xl">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Unicorns</span>
                    <span className="font-bold text-2xl">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prodotti Section */}
      <section id="prodotti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Prodotti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offriamo soluzioni di investimento diversificate per soddisfare le esigenze 
              di investitori istituzionali e privati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle>EdgeFounder Venture I</CardTitle>
                <CardDescription>Fondo early-stage tech</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Investimenti da €500K a €5M</li>
                  <li>• Focus su AI e machine learning</li>
                  <li>• 15-20 investimenti per vintage</li>
                  <li>• Orizzonte temporale 7-10 anni</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Growth Capital</CardTitle>
                <CardDescription>Fondo growth stage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Investimenti da €10M a €50M</li>
                  <li>• Aziende in fase di scaling</li>
                  <li>• 8-12 investimenti per vintage</li>
                  <li>• Focus su ricavi ricorrenti</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Impact Fund</CardTitle>
                <CardDescription>Investimenti sostenibili</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Focus su sostenibilità</li>
                  <li>• Cleantech e greentech</li>
                  <li>• Impatto sociale misurabile</li>
                  <li>• Rendimenti competitivi</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ultime News</h2>
            <p className="text-xl text-gray-600">Rimani aggiornato sui nostri investimenti e sulle novità del settore</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
              <CardHeader>
                <CardTitle className="text-lg">EdgeFounder investe €15M in TechStart AI</CardTitle>
                <CardDescription>15 Gennaio 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  La startup italiana specializzata in intelligenza artificiale per il retail 
                  completa il Series A con la nostra lead investment.
                </p>
                <Button variant="link" className="p-0 mt-4">Leggi di più →</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader>
                <CardTitle className="text-lg">Q4 2023: Performance Report</CardTitle>
                <CardDescription>8 Gennaio 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  I nostri fondi registrano una performance del +45% YoY, 
                  superando i benchmark di settore per il quarto anno consecutivo.
                </p>
                <Button variant="link" className="p-0 mt-4">Leggi di più →</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="text-lg">Nuovo fondo da €200M per il 2024</CardTitle>
                <CardDescription>20 Dicembre 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Annunciamo la chiusura del nostro terzo fondo venture, 
                  il più grande nella storia di EdgeFounder.
                </p>
                <Button variant="link" className="p-0 mt-4">Leggi di più →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto a Trasformare la Tua Idea in Realtà?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Se hai una startup innovativa o stai cercando opportunità di investimento, 
            siamo qui per supportarti nel tuo percorso di crescita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Richiedi Finanziamento
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Diventa Investitore
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/c5c023a0-9053-4a73-93dd-f6eeac42d2c7.png" 
                  alt="EdgeFounder Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl">EdgeFounder</span>
              </div>
              <p className="text-gray-400 text-sm">
                Trasformiamo idee innovative in successi imprenditoriali attraverso 
                investimenti strategici e supporto attivo.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Investimenti</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Venture Capital</a></li>
                <li><a href="#" className="hover:text-white">Growth Capital</a></li>
                <li><a href="#" className="hover:text-white">Impact Investing</a></li>
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Risorse</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Eventi</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Via Milano 123, 20121 Milano</li>
                <li>+39 02 1234 5678</li>
                <li>info@edgefounder.it</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 EdgeFounder. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
