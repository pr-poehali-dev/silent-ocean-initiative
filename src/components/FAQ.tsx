import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "За сколько нужно бронировать дату?",
    answer:
      "Рекомендуем обращаться за 3–6 месяцев до события. Для свадеб в популярный сезон (май–сентябрь) лучше бронировать за 8–12 месяцев. Но если у вас горящие сроки — мы умеем работать быстро.",
  },
  {
    question: "Какой бюджет нужен для организации мероприятия?",
    answer:
      "Бюджет зависит от формата, количества гостей и ваших пожеланий. Мы работаем с разными бюджетами и всегда предлагаем оптимальные решения. На первой встрече обсудим ваши ожидания и подберём варианты.",
  },
  {
    question: "Вы работаете только в Москве?",
    answer:
      "Мы базируемся в Москве, но организуем мероприятия по всей России и за рубежом. Выездные свадьбы, корпоративы на природе, события в других городах — наша команда готова к любой географии.",
  },
  {
    question: "Что входит в ваши услуги?",
    answer:
      "Полный цикл: разработка концепции, подбор площадки, декор и флористика, координация подрядчиков (кейтеринг, музыка, фото/видео), ведение мероприятия и координация в день события.",
  },
  {
    question: "Можно ли заказать только координацию в день события?",
    answer:
      "Да, мы предлагаем услугу «координация дня». Если вы организовали всё сами, но хотите, чтобы в день события всё прошло по плану — наш координатор возьмёт это на себя.",
  },
  {
    question: "Как начать работу с вами?",
    answer:
      "Оставьте заявку или позвоните нам. На бесплатной первой встрече мы обсудим ваше видение, формат, бюджет и дату. После этого подготовим индивидуальное предложение с концепцией и сметой.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}