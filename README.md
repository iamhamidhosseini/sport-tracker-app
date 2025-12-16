# sport-tracker-app

وب‌اپ تعاملی برای رصد فعالیت روزانه/هفتگی/ماهانه کاربران توان‌یاب، همراه با:
- داشبورد فعالیت با نمودار و خلاصه‌ی پیشرفت
- گفتگوی مربی و چت عمومی/اخبار
- ویدیوهای آموزشی مناسب افراد توان‌یاب
- اسلایدر ایونت‌ها (بنرهای `ivent_1.jpg`, `ivent_2.jpg`, `ivent_3.jpg` در `public/`)
- تم لایت/دارک با پالت رنگ سبز، آبی، زرد، قرمز

## اجرای محلی
```bash
npm install
npm run dev
```
سپس به آدرس نشان‌داده‌شده (معمولاً `http://localhost:5173`) بروید.

## بیلد و پیش‌نمایش
```bash
npm run build
npm run preview
```

## دیپلوی روی GitHub Pages
یک ورک‌فلو در `.github/workflows/deploy.yml` وجود دارد. پس از پوش روی `main`:
- `npm ci` و `npm run build` اجرا می‌شود.
- خروجی `dist` با `actions/deploy-pages` منتشر می‌شود.
در `vite.config.ts` مقدار `base` روی `/sport-tracker-app/` تنظیم شده است.

