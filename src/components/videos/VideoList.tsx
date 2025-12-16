import './videos.css'

type Video = {
  id: number
  title: string
  duration: string
  level: 'easy' | 'medium' | 'hard'
  accessibleFor: 'wheelchair' | 'low-vision' | 'all'
}

const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'گرم کردن آرام مخصوص کاربران صندلی چرخدار',
    duration: '10 دقیقه',
    level: 'easy',
    accessibleFor: 'wheelchair',
  },
  {
    id: 2,
    title: 'تمرینات کششی برای کاهش درد گردن و کمر',
    duration: '12 دقیقه',
    level: 'easy',
    accessibleFor: 'all',
  },
  {
    id: 3,
    title: 'تمرین هوازی کم‌فشار در خانه',
    duration: '18 دقیقه',
    level: 'medium',
    accessibleFor: 'all',
  },
  {
    id: 4,
    title: 'تقویت عضلات پا بدون نیاز به ایستادن',
    duration: '15 دقیقه',
    level: 'medium',
    accessibleFor: 'wheelchair',
  },
  {
    id: 5,
    title: 'تمرین آرامش و تنفس عمیق (بدون نیاز به حرکت زیاد)',
    duration: '9 دقیقه',
    level: 'easy',
    accessibleFor: 'low-vision',
  },
]

const LEVEL_LABEL: Record<Video['level'], string> = {
  easy: 'سطح آسان',
  medium: 'سطح متوسط',
  hard: 'سطح سخت',
}

const ACCESSIBILITY_LABEL: Record<Video['accessibleFor'], string> = {
  wheelchair: 'مناسب برای کاربران صندلی چرخدار',
  'low-vision': 'مناسب برای کم‌بینایان (توضیحات صوتی بیشتر)',
  all: 'مناسب برای اکثر کاربران',
}

export function VideoList() {
  return (
    <section
      className="card videos-card"
      aria-label="ویدیوهای آموزشی ورزشی"
    >
      <header className="card__header">
        <div>
          <p className="card__eyebrow">آموزش مرحله‌به‌مرحله</p>
          <h2 className="card__title">
            <span role="img" aria-hidden="true">
              🎧
            </span>
            ویدیوهای آموزشی
          </h2>
        </div>
        <span className="chip">بدون نیاز به تجهیزات حرفه‌ای</span>
      </header>
      <p className="videos-card__description">
        تمرین‌ها طوری طراحی شده‌اند که افراد توان‌یاب هم بتوانند با خیال راحت و در
        خانه انجام دهند.
      </p>

      <ul className="videos-list">
        {VIDEOS.map((video) => (
          <li key={video.id} className="videos-list__item">
            <div className="videos-list__main">
              <h3>{video.title}</h3>
              <p className="videos-list__meta">
                <span>{LEVEL_LABEL[video.level]}</span>
                <span aria-hidden="true">•</span>
                <span>{video.duration}</span>
              </p>
            </div>
            <p className="videos-list__tagline">{ACCESSIBILITY_LABEL[video.accessibleFor]}</p>
            <button type="button" className="videos-list__btn">
              پخش (دمو)
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}


