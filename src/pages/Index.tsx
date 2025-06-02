
import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users, Target, Eye, Clock, ChevronDown } from 'lucide-react';
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
                    alt="Value-Focused Investments Logo" 
                    className="h-10 w-auto"
                  />
                  <span className="text-white font-bold text-xl">Value-Focused Investments</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#chi-siamo" className="text-white/80 hover:text-white transition-colors">Chi Siamo</a>
                <a href="#principi" className="text-white/80 hover:text-white transition-colors">I Nostri Principi</a>
                <a href="#obiettivi" className="text-white/80 hover:text-white transition-colors">Obiettivi</a>
                <a href="#servizi" className="text-white/80 hover:text-white transition-colors">Servizi</a>
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
              Investimenti
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">
                {" "}Focalizzati sul Valore
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Una squadra giovane e dinamica che applica principi solidi di investimento 
              per costruire portafogli stabili e performanti nel lungo termine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white">
                Scopri i Nostri Servizi
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">€50M+</div>
              <div className="text-white/60">Asset Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/60">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12%</div>
              <div className="text-white/60">Rendimento Medio Annuo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
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
              Value-Focused Investments è una società di gestione patrimoniale guidata da un team giovane 
              e dinamico. Crediamo che l'età non definisca la competenza: la nostra energia, 
              combinata con principi di investimento solidi, ci permette di offrire soluzioni innovative 
              per la crescita del vostro patrimonio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Storia</h3>
              <p className="text-lg text-gray-600 mb-6">
                Nata dalla passione di giovani professionisti della finanza, Value-Focused Investments 
                rappresenta una nuova generazione di gestori patrimoniali. Non investiamo in startup 
                rischiose, ma ci concentriamo su asset consolidati e strategie comprovate.
              </p>
              <p className="text-lg text-gray-600">
                La nostra filosofia si basa sulla convinzione che la gestione prudente del rischio 
                e la visione a lungo termine siano le chiavi per generare valore reale per i nostri clienti.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">La Nostra Missione</h4>
                <p className="text-lg mb-4">
                  Fornire soluzioni di investimento accessibili, trasparenti e performanti, 
                  guidate da principi etici e una gestione responsabile del rischio.
                </p>
                <p className="text-lg">
                  Vogliamo essere il partner di fiducia per chi cerca crescita sostenibile 
                  del proprio patrimonio nel lungo termine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I Nostri Principi */}
      <section id="principi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Principi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tre pilastri fondamentali guidano ogni nostra decisione di investimento e ogni rapporto con i clienti.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Trasparenza e Responsabilità</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Crediamo nella comunicazione chiara e onesta. Ogni cliente ha accesso completo 
                  alle informazioni sui propri investimenti e alle nostre strategie. La responsabilità 
                  verso i risultati è il nostro impegno quotidiano.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Gestione Prudente del Rischio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  La preservazione del capitale è prioritaria. Applichiamo rigorose analisi di rischio 
                  e diversificazione per proteggere i patrimoni dei nostri clienti, 
                  evitando esposizioni eccessive o speculative.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Visione a Lungo Termine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Investiamo pensando al futuro, non alle fluttuazioni di breve periodo. 
                  Le nostre strategie sono progettate per generare valore sostenibile 
                  nel tempo, resistendo alle volatilità del mercato.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Obiettivi Principali */}
      <section id="obiettivi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Obiettivi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tre obiettivi chiari e misurabili guidano la nostra strategia di investimento per ogni cliente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sicurezza</h3>
              <p className="text-gray-600 text-lg">
                Protezione del capitale investito attraverso strategie conservative 
                e una rigorosa gestione del rischio. La sicurezza è sempre la nostra priorità numero uno.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crescita</h3>
              <p className="text-gray-600 text-lg">
                Crescita costante e sostenibile del patrimonio nel tempo, 
                bilanciando opportunità di rendimento con la preservazione del capitale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sovraperformance</h3>
              <p className="text-gray-600 text-lg">
                Raggiungimento di rendimenti superiori ai benchmark di mercato 
                attraverso analisi approfondite e selezione attenta degli investimenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Servizi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluzioni personalizzate per ogni esigenza di investimento, 
              dalla gestione patrimoniale alla consulenza finanziaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Gestione Patrimoniale</CardTitle>
                <CardDescription>Portafogli personalizzati</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Analisi del profilo di rischio</li>
                  <li>• Portafogli diversificati</li>
                  <li>• Monitoraggio continuo</li>
                  <li>• Reporting trasparente</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Consulenza Finanziaria</CardTitle>
                <CardDescription>Strategie su misura</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pianificazione finanziaria</li>
                  <li>• Ottimizzazione fiscale</li>
                  <li>• Analisi di mercato</li>
                  <li>• Educazione finanziaria</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Protezione Patrimoniale</CardTitle>
                <CardDescription>Sicurezza e stabilità</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Strumenti di protezione</li>
                  <li>• Diversificazione geografica</li>
                  <li>• Hedging valutario</li>
                  <li>• Successioni pianificate</li>
                </ul>
                <Button className="w-full mt-6">Scopri di più</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ultime News</h2>
            <p className="text-xl text-gray-600">Rimani aggiornato sui mercati e sulle nostre analisi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
              <CardHeader>
                <CardTitle className="text-lg">Outlook 2024: Opportunità nei Mercati Emergenti</CardTitle>
                <CardDescription>15 Gennaio 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  La nostra analisi sui mercati emergenti per il 2024 evidenzia 
                  interessanti opportunità di diversificazione geografica con un approccio prudente.
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
                  I nostri portafogli registrano una performance solida nel Q4 2023, 
                  confermando l'efficacia della nostra strategia value-focused.
                </p>
                <Button variant="link" className="p-0 mt-4">Leggi di più →</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="text-lg">Nuovi Strumenti di Protezione del Capitale</CardTitle>
                <CardDescription>20 Dicembre 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Introduciamo nuove soluzioni per la protezione del capitale 
                  in un contesto di crescente incertezza macroeconomica.
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
            Pronto a Far Crescere il Tuo Patrimonio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Scopri come la nostra approccio giovane e dinamico può aiutarti 
            a raggiungere i tuoi obiettivi finanziari con sicurezza e trasparenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Richiedi Consulenza Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Scarica Brochure
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
                  alt="Value-Focused Investments Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl">Value-Focused</span>
              </div>
              <p className="text-gray-400 text-sm">
                Una nuova generazione di gestori patrimoniali. 
                Giovani, dinamici e focalizzati sui risultati.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Servizi</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Gestione Patrimoniale</a></li>
                <li><a href="#" className="hover:text-white">Consulenza Finanziaria</a></li>
                <li><a href="#" className="hover:text-white">Protezione Patrimoniale</a></li>
                <li><a href="#" className="hover:text-white">Pianificazione Fiscale</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Risorse</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Market Insights</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Webinar</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Via Roma 45, 20121 Milano</li>
                <li>+39 02 9876 5432</li>
                <li>info@value-focused.it</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Value-Focused Investments. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
