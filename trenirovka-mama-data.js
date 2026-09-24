/* =============================================================================
 * ТРЕНИРОВКИ МАМА — ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ ПРАВИТ АГЕНТ
 * =============================================================================
 *
 * Страница: trenirovka-mama.html (вёрстку и логику не трогать).
 *
 * Что менять:
 *   1. ACTIVE_WORKOUT_ID  — какой день открыть по умолчанию
 *   2. WORKOUTS           — перечень дней; добавь объект, чтобы появился новый день
 *
 * Добавить день: скопируй любой объект в WORKOUTS, поставь новый id,
 *   поменяй dayLabel / equipment / exercises. День сразу появится в списке.
 *
 * Упражнение, поля:
 *   name, sets, reps, restSec, gifUrl, notes?
 *   dumbbellKg  — вес гантелей, кг. true = взять из инвентаря. нет поля = без гантелей
 *   bandKg      — сопротивление резинки, кг. true = из инвентаря. нет поля = без резинки
 *
 * Инвентарь, поля:
 *   kind: "dumbbell" | "band" | "other"
 *   name: подпись на экране
 *   weightKg: число, только для dumbbell и band (на старте можно крутить ±)
 *
 * gifUrl: GIF/WebP/JPG или MP4.
 * ============================================================================= */

var ACTIVE_WORKOUT_ID = "day-a";

var WORKOUTS = [
  {
    id: "day-a",
    title: "Мама",
    dayLabel: "Day A — щадящий старт",
    dateLabel: "черновик до анкеты · дома · коврик + гантели 1–2 кг + резинка по желанию",
    equipment: [
      { kind: "dumbbell", name: "гантели 1–2 кг", weightKg: 2 },
      { kind: "band", name: "резинка (по желанию)", weightKg: 5 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Приседания к стулу / Sit-to-stand",
        sets: 2,
        reps: "8",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-Bodyweight-bodyweight-squat-front.mp4",
        notes: "устойчивый стул сзади; садиться и вставать, при необходимости держаться за спинку или стол. Колени над стопами, пятки в полу. Головокружение, острая боль в колене/спине — сразу стоп. Инвентарь уточним после анкеты."
      },
      {
        name: "Отжимания от стола или стены / Incline or wall push-up",
        sets: 2,
        reps: "6–8",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-Bodyweight-incline-push-up-front.mp4",
        notes: "руки на столе или стене, тело прямой линией от пяток до плеч. Легче — ближе к стене. Острая боль в плече, запястье или груди — стоп, не форсировать."
      },
      {
        name: "Тяга резинки одной рукой / Band single-arm row",
        sets: 2,
        reps: "8 на сторону",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-band-single-arm-row-front.mp4",
        notes: "резинка по желанию (черновик до анкеты); якорь на уровне пояса, тяга к поясу, плечо вниз, корпус спокойный. Нет резинки — лёгкая гантель или бутылка. Боль в пояснице — стоп.",
        bandKg: true
      },
      {
        name: "Ягодичный мост / Glute bridge",
        sets: 2,
        reps: "8",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-Bodyweight-glute-bridge-front.mp4",
        notes: "на коврике; если трудно лечь или встать — пропустить. Пауза сверху, не прогибать поясницу. Дискомфорт в пояснице или тазобедренном — стоп."
      },
      {
        name: "Жим гантелей сидя или стоя / Light overhead press",
        sets: 2,
        reps: "8",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-overhead-press-front.mp4",
        notes: "гантели 1–2 кг (черновик до анкеты); можно сидя на стуле со спинкой. Корпус спокойный, без прогиба в пояснице. Боль в плече — не поднимать выше комфорта или жать перед собой.",
        dumbbellKg: true
      },
      {
        name: "Подъёмы на носки у опоры / Supported calf raise",
        sets: 2,
        reps: "10",
        restSec: 50,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-calf-raise-front.mp4",
        notes: "держаться за спинку стула; без гантелей, если шатко. Полный диапазон, без раскачки. Боль в ахилле или голеностопе — стоп."
      }
    ]
  }
];
