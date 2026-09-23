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
    dateLabel: "23.09 · дома · гантели 3,5 кг + тросы 20 кг",
    equipment: [
      { kind: "dumbbell", name: "гантели", weightKg: 3.5 },
      { kind: "band", name: "тросы KETTLER", weightKg: 20 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Жим гантелей на полу / Dumbbell floor press",
        sets: 3,
        reps: "10–12",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-floor-press-front.mp4",
        notes: "гантели 3,5 кг; локти на пол, пауза, затем жим; стоп за 1–2 до отказа.",
        dumbbellKg: true
      },
      {
        name: "Тяга троса к поясу (дверное крепление) / Band or cable row",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-band-single-arm-row-front.mp4",
        notes: "KETTLER ~20 кг (доступны только 10/15/20/30); якорь на уровне груди/пояса; тяга к поясу, корпус спокойный.",
        bandKg: true
      },
      {
        name: "Жим стоя / Dumbbell overhead press",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-overhead-press-front.mp4",
        notes: "гантели 3,5 кг; корпус напряжён, без прогиба в пояснице.",
        dumbbellKg: true
      },
      {
        name: "Face pull (трос/лента, дверное крепление)",
        sets: 3,
        reps: "12–15",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-band-face-pull-front.mp4",
        notes: "KETTLER 10–15 кг (не максимум; шаг 10 или 15); якорь на уровне лица/выше; локти высоко, тяга к лицу, лопатки сводим.",
        bandKg: true
      },
      {
        name: "Dead bug",
        sets: 3,
        reps: "8 на сторону",
        restSec: 50,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-dead-bug-front.mp4",
        notes: "на коврике; поясница прижата."
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

  {
    id: "day-a",
    title: "Тренировка",
    dayLabel: "Day A — низ",
    dateLabel: "дома · гантели 3,5 кг + тросы",
    equipment: [
      { kind: "dumbbell", name: "гантели", weightKg: 3.5 },
      { kind: "band", name: "тросы KETTLER", weightKg: 12 },
      { kind: "other", name: "коврик" }
    ],
    exercises: [
      {
        name: "Присед гоблет / Goblet squat",
        sets: 3,
        reps: "10–12",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4",
        notes: "гантель 3,5 кг у груди; пятки в пол, глубина комфортная.",
        dumbbellKg: true
      },
      {
        name: "Румынская тяга с гантелями / Romanian deadlift DB",
        sets: 3,
        reps: "10",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-romanian-deadlift-front.mp4",
        notes: "гантели 3,5 кг; мягкие колени, таз назад, спина нейтральная.",
        dumbbellKg: true
      },
      {
        name: "Отведение ноги назад тросом / Band/cable glute kickback (ankle strap, door anchor)",
        sets: 3,
        reps: "12 на сторону",
        restSec: 60,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-glute-kickback-front.mp4",
        notes: "KETTLER ~10–15 кг, якорь внизу двери; корпус спокойный, работа ягодицей.",
        bandKg: true
      },
      {
        name: "Выпады назад с гантелями / Reverse lunges DB",
        sets: 3,
        reps: "8–10 на ногу",
        restSec: 75,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-reverse-lunge-front.mp4",
        notes: "гантели 3,5 кг; колено задней ноги к полу, переднее колено над стопой.",
        dumbbellKg: true
      },
      {
        name: "Подъёмы на носки / Standing calf raise DB",
        sets: 3,
        reps: "12–15",
        restSec: 50,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-calf-raise-front.mp4",
        notes: "гантели 3,5 кг; пауза сверху, полный диапазон.",
        dumbbellKg: true
      },
      {
        name: "Ягодичный мост / Glute bridge",
        sets: 3,
        reps: "12",
        restSec: 50,
        gifUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-glute-bridge-front.mp4",
        notes: "на коврике; пауза сверху, не прогибаться в пояснице."
      }
    ]
  }
];
