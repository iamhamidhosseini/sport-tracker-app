import { useEffect, useState } from 'react'
import './events.css'

type Banner = {
  id: number
  src: string
  alt: string
}

const BANNERS: Banner[] = [
  {
    id: 1,
    src: '/ivent_1.jpg',
    alt: 'بنر رویداد پیاده‌روی دوستانه ویژه افراد توان‌یاب',
  },
  {
    id: 2,
    src: '/ivent_2.jpg',
    alt: 'بنر چالش ورزشی آنلاین با جوایز انگیزشی',
  },
  {
    id: 3,
    src: '/ivent_3.jpg',
    alt: 'بنر کلاس تمرین در خانه با مربی تخصصی توان‌بخشی',
  },
]

const AUTO_PLAY_MS = 5000

export function EventsCarousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % BANNERS.length)
    }, AUTO_PLAY_MS)
    return () => window.clearInterval(id)
  }, [isPaused])

  const current = BANNERS[index]

  const goTo = (next: number) => {
    if (next < 0) next = BANNERS.length - 1
    if (next >= BANNERS.length) next = 0
    setIndex(next)
  }

  return (
    <section
      className="card events-card"
      aria-label="رویدادهای ورزشی"
    >
      <header className="card__header">
        <div>
          <p className="card__eyebrow">ایونت‌ها و چالش‌ها</p>
          <h2 className="card__title">
            <span role="img" aria-hidden="true">
              📣
            </span>
            رویدادهای ویژه
          </h2>
        </div>
        <span className="chip">اسلایدر خودکار هر ۵ ثانیه</span>
      </header>

      <div
        className="events-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="بنر رویدادهای ورزشی"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <figure className="events-carousel__slide">
          <img
            src={current.src}
            alt={current.alt}
            className="events-carousel__image"
          />
          <figcaption className="events-carousel__caption">
            {current.alt}
          </figcaption>
        </figure>

        <div className="events-carousel__controls">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="بنر قبلی"
          >
            ‹
          </button>
          <div className="events-carousel__dots" aria-hidden="true">
            {BANNERS.map((banner, i) => (
              <button
                key={banner.id}
                type="button"
                className={
                  i === index
                    ? 'events-carousel__dot events-carousel__dot--active'
                    : 'events-carousel__dot'
                }
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="بنر بعدی"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}


