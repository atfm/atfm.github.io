/* =============================================================================
 * ТРЕНИРОВКИ — ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ ПРАВИТ АГЕНТ
 * =============================================================================
 *
 * Страница: trenirovka.html (вёрстку и логику не трогать).
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

var ACTIVE_WORKOUT_ID = "day-b";

var WORKOUTS = [
  {
    id: "day-b",
    title: "Тренировка",
    dayLabel: "Day B — верх",
    dateLabel: "дома · гантели 3,5 кг + тросы",
    equipment: [
      { kind: "dumbbell", name: "гантели", weightKg: 3.5 },
      { kind: "band", name: "тросы KETTLER", weightKg: 10 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Жим гантелей на полу / Dumbbell floor press",
        sets: 3,
        reps: "10–12",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-floor-press-front.mp4",
        notes: "после болезни — обычный объём, без отказа; локти на пол, пауза, затем жим.",
        dumbbellKg: true
      },
      {
        name: "Тяга троса к поясу (дверное крепление) / Band or cable row",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-band-single-arm-row-front.mp4",
        notes: "якорь в двери на уровне груди/пояса; тяга к поясу, корпус спокойный. KETTLER ~10 кг, не максимум.",
        bandKg: true
      },
      {
        name: "Жим стоя / Dumbbell overhead press",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-overhead-press-front.mp4",
        notes: "гантели 3,5 кг; корпус напряжён, не прогибаться в пояснице. Стоп за 1–2 повтора до отказа.",
        dumbbellKg: true
      },
      {
        name: "Разведения в наклоне / Rear delt fly",
        sets: 3,
        reps: "12",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-rear-delt-fly-front.mp4",
        notes: "гантели 3,5 кг; лёгкий наклон, локти мягкие, лопатки сводим. Без рывков.",
        dumbbellKg: true
      },
      {
        name: "Dead bug",
        sets: 3,
        reps: "8 на сторону",
        restSec: 50,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-dead-bug-front.mp4",
        notes: "на коврике; поясница прижата к полу, противоположные рука и нога."
      }
    ]
  },

  {
    id: "day-c",
    title: "Тренировка",
    dayLabel: "Day C — всё тело",
    dateLabel: "дома",
    equipment: [
      { kind: "dumbbell", name: "гантели", weightKg: 10 },
      { kind: "band", name: "резинки", weightKg: 15 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Присед с гантелями / Goblet squat",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4",
        notes: "лёгкий день; глубина комфортная, пятки в пол.",
        dumbbellKg: true
      },
      {
        name: "Отжимания (от пола или от дивана/стола) / Push-up",
        sets: 3,
        reps: "6–12",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-push-up-front.mp4",
        notes: "до комфортного отказа в диапазоне 6–12; при необходимости руки на возвышении."
      },
      {
        name: "Ягодичный мост / Glute bridge",
        sets: 3,
        reps: "12–15",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-glute-bridge-front.mp4",
        notes: "на коврике, пауза сверху, не прогибаться в пояснице.",
        bandKg: true
      },
      {
        name: "Тяга в наклоне двумя руками / Dumbbell bent-over row",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif",
        notes: "спина прямая, тянем к поясу, локти вдоль корпуса.",
        dumbbellKg: true
      },
      {
        name: "Прогулка фермера / Farmer carry",
        sets: 3,
        reps: "30–40 с",
        restSec: 60,
        gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif",
        notes: "гантели в руках, ровная осанка, ходите по квартире.",
        dumbbellKg: true
      }
    ]
  },

  /* Ещё день: раскомментируй объект ниже (и запятая уже стоит).
  {
    id: "day-a",
    title: "Тренировка",
    dayLabel: "Day A — ноги",
    dateLabel: "дома",
    equipment: [
      { kind: "dumbbell", name: "гантели", weightKg: 12 },
      { kind: "band", name: "резинки", weightKg: 20 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Название / English name",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://...",
        notes: "",
        dumbbellKg: true,
        bandKg: 15
      }
    ]
  },
  */
];
