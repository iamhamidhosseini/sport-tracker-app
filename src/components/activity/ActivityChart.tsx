import './activity.css'

export type ActivityPoint = {
  label: string
  value: number
  goal: number
}

type ActivityChartProps = {
  title: string
  description: string
  points: ActivityPoint[]
}

export function ActivityChart({ title, description, points }: ActivityChartProps) {
  return (
    <section
      className="card activity-card"
      aria-label={title}
    >
      <header className="card__header">
        <div>
          <p className="card__eyebrow">پیشرفت امروز</p>
          <h2 className="card__title">
            <span role="img" aria-hidden="true">
              📊
            </span>
            {title}
          </h2>
        </div>
        <span className="chip">هدف روزانه: {points[0]?.goal ?? 0} دقیقه</span>
      </header>

      <p className="activity-card__description">{description}</p>

      <div className="activity-chart" role="list">
        {points.map((point) => {
          const percent = Math.min((point.value / point.goal) * 100, 120)
          const reached = point.value >= point.goal

          return (
            <div
              key={point.label}
              className="activity-row"
              role="listitem"
              aria-label={`${point.label}: ${point.value} از ${point.goal} دقیقه`}
            >
              <span className="activity-row__label">{point.label}</span>
              <div className="activity-row__bar-wrapper">
                <div className="activity-row__goal" />
                <div
                  className={
                    reached
                      ? 'activity-row__bar activity-row__bar--reached'
                      : 'activity-row__bar'
                  }
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="activity-row__value">
                {point.value}
                <span className="activity-row__unit">دقیقه</span>
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}


