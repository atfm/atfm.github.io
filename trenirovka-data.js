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

var ACTIVE_WORKOUT_ID = "day-c";

var WORKOUTS = [
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
