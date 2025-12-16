import { useState } from 'react'
import { Header, type AppSection } from './components/layout/Header'
import { ActivityChart } from './components/activity/ActivityChart'
import { ActivitySummary } from './components/activity/ActivitySummary'
import { ChatWindow } from './components/chat/ChatWindow'
import { VideoList } from './components/videos/VideoList'
import { EventsCarousel } from './components/events/EventsCarousel'
import './components/layout/layout.css'

const DAILY_ACTIVITY = [
  { label: 'صبح', value: 15, goal: 20 },
  { label: 'ظهر', value: 10, goal: 20 },
  { label: 'بعدازظهر', value: 5, goal: 15 },
  { label: 'شب', value: 12, goal: 20 },
]

function App() {
  const [section, setSection] = useState<AppSection>('dashboard')

  return (
    <div className="app-root">
      <main className="app-shell">
        <Header activeSection={section} onSectionChange={setSection} />

        {section === 'dashboard' && (
          <div className="app-grid" aria-label="داشبورد فعالیت امروز">
            <div className="app-grid__col">
              <ActivityChart
                title="زمان فعالیت امروز"
                description="برای شروع، فقط کافی‌ست هر روز چند دقیقه حرکت داشته باشی. همین قدم‌های کوچک، بزرگ‌ترین تغییرها را می‌سازند."
                points={DAILY_ACTIVITY}
              />
              <ActivitySummary
                week={{ label: 'این هفته', minutes: 145, goal: 180 }}
                month={{ label: 'این ماه', minutes: 560, goal: 720 }}
              />
            </div>
            <div className="app-grid__col">
              <EventsCarousel />
              <ChatWindow
                title="گفتگو با مربی"
                description="هر زمان سوال داشتی یا انگیزه‌ات کم شد، برای مربی پیام بفرست. فعلاً این بخش دمو است و پیام‌ها فقط روی همین دستگاه ذخیره می‌شوند."
                placeholder="پیامت را برای مربی بنویس..."
                initialMessages={[
                  {
                    id: 1,
                    sender: 'coach',
                    text: 'سلام، امروز فقط ۱۰ دقیقه تمرین سبک هم عالیه. آماده‌ای شروع کنیم؟',
                    time: '09:10',
                  },
                  {
                    id: 2,
                    sender: 'system',
                    text: 'یادت نره قبل از تمرین کمی آب بخوری و در صورت درد یا ناراحتی شدید، تمرین را متوقف کنی.',
                    time: '09:12',
                  },
                ]}
              />
            </div>
          </div>
        )}

        {section === 'coach-chat' && (
          <div className="app-grid__col" aria-label="صفحه گفتگو با مربی">
            <ChatWindow
              title="مربی تخصصی توان‌یاب"
              description="در این بخش می‌توانی از مربی سوال بپرسی، برنامه‌ی شخصی بگیری و پیشرفت خودت را گزارش کنی."
              placeholder="سوال یا گزارش امروزی‌ات را بنویس..."
              initialMessages={[
                {
                  id: 1,
                  sender: 'coach',
                  text: 'خوش اومدی! برای شروع بگو در طول روز معمولاً چقدر می‌توانی بدون خستگی شدید حرکت کنی؟',
                  time: '11:05',
                },
              ]}
            />
          </div>
        )}

        {section === 'videos' && (
          <div className="app-grid__col" aria-label="صفحه ویدیوهای آموزشی">
            <VideoList />
          </div>
        )}

        {section === 'community' && (
          <div className="app-grid__col" aria-label="چت عمومی و اخبار ورزشی">
            <ChatWindow
              title="چت عمومی و اخبار"
              description="همدیگر را تشویق کنید، از موفقیت‌ها بگویید و خبرهای خوب ورزشی را به اشتراک بگذارید."
              placeholder="چیزی بنویس که بقیه را هم انگیزه‌دار کند..."
              initialMessages={[
                {
                  id: 1,
                  sender: 'system',
                  text: 'چالش جدید این هفته: هر روز حداقل ۵ دقیقه کشش ملایم ✨',
                  time: '08:00',
                },
                {
                  id: 2,
                  sender: 'coach',
                  text: 'برای افراد صندلی چرخدار هم ویدیوهای مخصوص در بخش آموزشی فعال شده است.',
                  time: '08:05',
                },
              ]}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
