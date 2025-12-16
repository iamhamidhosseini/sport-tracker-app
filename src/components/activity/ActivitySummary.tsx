import './activity.css'

type SummaryItem = {
  label: string
  minutes: number
  goal: number
}

type ActivitySummaryProps = {
  week: SummaryItem
  month: SummaryItem
}

export function ActivitySummary({ week, month }: ActivitySummaryProps) {
  const calcPercent = (item: SummaryItem) =>
    Math.min(Math.round((item.minutes / item.goal) * 100), 160)

  return (
    <section
      className="card activity-summary"
      aria-label="گزارش هفتگی و ماهانه"
    >
      <header className="card__header">
        <div>
          <p className="card__eyebrow">گزارش پیشرفت</p>
          <h2 className="card__title">
            <span role="img" aria-hidden="true">
              📅
            </span>
            هفتگی و ماهانه
          </h2>
        </div>
      </header>

      <div className="activity-summary__grid">
        {[week, month].map((item) => (
          <article
            key={item.label}
            className="activity-summary__card"
            aria-label={item.label}
          >
            <h3>{item.label}</h3>
            <p className="activity-summary__minutes">
              {item.minutes} / {item.goal} دقیقه
            </p>
            <div className="activity-summary__meter" aria-hidden="true">
              <div
                className="activity-summary__meter-fill"
                style={{ width: `${calcPercent(item)}%` }}
              />
            </div>
            <p className="activity-summary__hint">
              باقی‌مانده تا هدف:{' '}
              <strong>{Math.max(item.goal - item.minutes, 0)} دقیقه</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}


