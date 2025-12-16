import { useTheme } from '../../theme/ThemeContext'
import './layout.css'

type HeaderProps = {
  onSectionChange: (section: AppSection) => void
  activeSection: AppSection
}

export type AppSection = 'dashboard' | 'coach-chat' | 'videos' | 'community'

const SECTION_LABELS: Record<AppSection, string> = {
  dashboard: 'داشبورد فعالیت',
  'coach-chat': 'گفتگو با مربی',
  videos: 'ویدیوهای آموزشی',
  community: 'چت عمومی و اخبار',
}

export function Header({ onSectionChange, activeSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="app-header" aria-label="Sport tracker header">
      <div className="app-header__brand">
        <span className="app-header__logo" aria-hidden="true">
          🏃‍♀️
        </span>
        <div>
          <h1 className="app-header__title">Sport Tracker</h1>
          <p className="app-header__subtitle">
            همراه تمرین روزانه مخصوص افراد توان‌یاب
          </p>
        </div>
      </div>

      <nav
        className="app-header__nav"
        aria-label="بخش‌های اصلی برنامه"
      >
        {(
          Object.keys(SECTION_LABELS) as AppSection[]
        ).map((section) => (
          <button
            key={section}
            type="button"
            className={
              section === activeSection
                ? 'app-header__nav-btn app-header__nav-btn--active'
                : 'app-header__nav-btn'
            }
            onClick={() => onSectionChange(section)}
          >
            {SECTION_LABELS[section]}
          </button>
        ))}
      </nav>

      <div className="app-header__actions">
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'فعال کردن حالت تیره' : 'فعال کردن حالت روشن'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}


