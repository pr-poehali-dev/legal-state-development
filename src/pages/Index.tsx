import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const problems = [
    'Конституционные права граждан',
    'Разделение властей',
    'Верховенство закона',
    'Правовая культура населения'
  ];

  const timeline = [
    { year: '1789', event: 'Декларация прав человека и гражданина' },
    { year: '1787', event: 'Конституция США' },
    { year: '1917', event: 'Конституционное развитие России' },
    { year: '1948', event: 'Всеобщая декларация прав человека' },
    { year: '1993', event: 'Конституция Российской Федерации' }
  ];

  const documents = [
    'Всеобщая декларация прав человека',
    'Европейская конвенция о защите прав человека',
    'Конституция РФ 1993',
    'Гражданский кодекс РФ',
    'Уголовный кодекс РФ'
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-black/10">
        <div className="container mx-auto px-8 py-6">
          <h1 className="text-sm font-medium tracking-wider uppercase">Правовое государство</h1>
        </div>
      </nav>

      <section className="container mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <h2 className="text-6xl font-light leading-tight mb-8 tracking-tight">
            Актуальные проблемы становления и развития правового государства
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Изучение ключевых аспектов формирования правового государства
          </p>
        </div>
      </section>

      <Separator />

      <section className="container mx-auto px-8 py-20">
        <h3 className="text-sm font-medium tracking-wider uppercase mb-12 text-muted-foreground">
          Актуальные проблемы
        </h3>
        <div className="grid md:grid-cols-2 gap-px bg-black/5">
          {problems.map((problem, idx) => (
            <Card key={idx} className="rounded-none border-0">
              <CardContent className="p-12">
                <span className="text-sm text-muted-foreground mb-4 block">0{idx + 1}</span>
                <h4 className="text-2xl font-light">{problem}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto px-8 py-20">
        <h3 className="text-sm font-medium tracking-wider uppercase mb-12 text-muted-foreground">
          История развития
        </h3>
        <div className="max-w-4xl space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-12 items-start">
              <span className="text-sm font-medium w-16 text-muted-foreground flex-shrink-0">
                {item.year}
              </span>
              <div className="flex-1">
                <h4 className="text-2xl font-light">{item.event}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto px-8 py-20">
        <h3 className="text-sm font-medium tracking-wider uppercase mb-12 text-muted-foreground">
          Нормативные документы
        </h3>
        <div className="max-w-2xl space-y-6">
          {documents.map((doc, idx) => (
            <div key={idx} className="border-b border-black/5 pb-6 last:border-0">
              <div className="flex justify-between items-center group cursor-pointer">
                <p className="text-lg font-light group-hover:translate-x-2 transition-transform">
                  {doc}
                </p>
                <span className="text-xs text-muted-foreground">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container mx-auto px-8 py-20">
        <h3 className="text-sm font-medium tracking-wider uppercase mb-12 text-muted-foreground">
          Библиотека материалов
        </h3>
        <div className="max-w-2xl">
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            Коллекция нормативных документов, научных статей и образовательных материалов 
            о становлении и развитии правового государства в современном мире.
          </p>
        </div>
      </section>

      <footer className="border-t border-black/10 mt-20">
        <div className="container mx-auto px-8 py-12">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>© 2024 Правовое государство</span>
            <span>Образовательный портал</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
