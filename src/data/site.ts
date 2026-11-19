// Facts for the homepage. Source: veon/client.json (fact ids in comments). Nothing here is invented.

export const NOTE = "Розділ у розробці";

export const HOURS = "пн–пт 8:00–20:00, сб 8:00–19:00, нд — вихідний"; // C-017
export const HOURS_SHORT = "пн–пт 8–20, сб 8–19";

export const TELEGRAM = "https://t.me/elites_dental"; // company.contacts.messengers
export const INSTAGRAM = "https://www.instagram.com/elites_dental/"; // socials[0], confirmed (R-205)

export interface Clinic {
  id: string;
  street: string;
  short: string;
  phone: string;
  tel: string;
  email: string;
  viber?: string;
  map: string;
}

// C-002, company.contacts; maps C-022 (short links resolve to «Еліт-S» and «Dental Clinic ELITES», names per C-011)
export const CLINICS: Clinic[] = [
  {
    id: "leontovycha",
    street: "вул. Леонтовича, 3",
    short: "Леонтовича, 3",
    phone: "+38 098 057 46 46",
    tel: "+380980574646",
    email: "elits.info@gmail.com",
    viber: "viber://chat?number=%2B380980574646",
    map: "https://maps.app.goo.gl/W5gfUKvxdk6Kzq8u8",
  },
  {
    id: "hazova",
    street: "вул. Газова, 7",
    short: "Газова, 7",
    phone: "+38 093 556 54 44",
    tel: "+380935565444",
    email: "manager.elits@gmail.com",
    map: "https://maps.app.goo.gl/oJGQvxk5juZxnze38",
  },
];

// C-005
export const PRICES = [
  { value: "2 800", from: false, name: "Професійна гігієна", detail: "ультразвук і Air Flow" },
  { value: "34 450", from: false, name: "Імплант Straumann", detail: "встановлення, I етап" },
  { value: "22 950", from: true, name: "Вінір E.Max", detail: "один зуб" },
];

// business_lines / products (groups as on the client's site); prices C-005
export const SERVICES: { group: string; items: string[]; price?: string }[] = [
  { group: "Регулярна турбота", items: ["Професійна гігієна", "Комплексний чек-ап"], price: "2 800 грн" },
  { group: "Біль і дискомфорт", items: ["Лікування карієсу", "Лікування каналів", "Лікування ясен"] },
  { group: "Естетика", items: ["Вініри", "Відбілювання", "Художня реставрація"], price: "від 22 950 грн" },
  { group: "Прикус", items: ["Брекети", "Елайнери"] },
  { group: "Відновлення", items: ["Коронки"] },
  { group: "Хірургія та імплантація", items: ["Імплантація", "Видалення зубів"], price: "34 450 грн" },
  { group: "Діти", items: ["Дитяча стоматологія", "Фторування", "Герметизація фісур"] },
];

// C-006, C-023
export const HEAD_DOCTOR = {
  name: "Солтис Михайло Васильович",
  role: "Головний лікар, хірург-імплантолог і ортопед",
  years: "14 років досвіду",
};
export const DOCTORS = [
  { key: "batrukh", name: "Батрух Володимир Романович", role: "Стоматолог-терапевт" },
  { key: "kaznokh", name: "Казнох Анна Георгіївна", role: "Стоматолог-ортодонт" },
  { key: "maksymkiv", name: "Максимків Олеся Степанівна", role: "Стоматолог-терапевт" },
  { key: "perizhok", name: "Періжок Мирослав Мирославович", role: "Стоматолог-ендодонтист" },
  { key: "salamin", name: "Саламін Оксана Володимирівна", role: "Стоматолог-пародонтолог" },
  { key: "milovanova", name: "Мілованова Ірина Романівна", role: "Дитячий стоматолог-терапевт" },
];

// Answers built only from facts: C-019, C-024, C-004, C-023, C-014, C-005, C-002, C-017
export const FAQ = [
  {
    q: "Консультація платна?",
    a: "Так, консультація в ELITES платна. Вартість залежить від обсягу огляду, точну суму підкаже адміністратор клініки.",
  },
  {
    q: "Що я отримаю після першого візиту?",
    a: "Персональний план лікування: комплексну діагностику, фотопротокол (фото всіх зубів з поясненнями) і три варіанти лікування з покроковим описом і цінами.",
  },
  {
    q: "Ви лікуєте дітей?",
    a: "Так, у клініці лікуються дорослі та діти. Дітей приймає дитячий стоматолог-терапевт Мілованова Ірина Романівна.",
  },
  {
    q: "Чи можна отримати консультацію без візиту?",
    a: "Так, онлайн: надішліть КТ або ОПТГ, і лікар підготує попередній план з орієнтовною вартістю. Як передати файл, уточніть у менеджера в Telegram або Viber.",
  },
  {
    q: "Скільки коштують гігієна, імплант і вініри?",
    a: "Професійна гігієна — 2 800 грн, встановлення імпланта Straumann (I етап) — 34 450 грн, вінір E.Max — від 22 950 грн за зуб.",
  },
  {
    q: "Як записатися і коли ви працюєте?",
    a: "Зателефонуйте в зручну клініку: вул. Леонтовича, 3 — +38 098 057 46 46, вул. Газова, 7 — +38 093 556 54 44. Обидві працюють пн–пт 8:00–20:00, сб 8:00–19:00, неділя — вихідний.",
  },
];

// FDI notation, upper and lower jaw as the dentist reads it
export const FDI_UPPER = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
export const FDI_LOWER = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
