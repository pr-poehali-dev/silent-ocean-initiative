export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <img src="https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/files/a6388ed2-01a2-4b08-a634-04d27eaba9df.jpg" alt="Kamchatka People" className="w-auto h-8 object-contain" />
                <span className="font-semibold tracking-wide text-sm">Kamchatka People</span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Организуем события, которые запоминаются навсегда. Свадьбы, корпоративы и праздники любого масштаба.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Агентство</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@event-agency.ru" className="hover:text-foreground transition-colors"></a>
              </li>
              <li>
                <a href="tel:+79146210294" className="hover:text-foreground transition-colors">
                  8 (914) 621-02-94
                </a>
              </li>
              <li>
                <a href="https://t.me/LaraDamanskaya" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Kamchatka People. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}