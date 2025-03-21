// Імпорт класу Howl з бібліотеки howler для роботи зі звуками
import { Howl } from 'howler';

// Об'єкт для зберігання поточного стану гри
export const GAME_STATE = {
  // Масив для зберігання ігрових елементів (карт, айді, тегів і тп)
  gameElements: [],
  // Масив для зберігання ID вибраних користувачем карт під час гри
  selectedCards: [],
  // Обраний рівень гри (значення встановлюється пізніше)
  chooseLevel: null,
  // Лічильник невдалих спроб співпадіння карт
  mismatch_cards: 0,
  // Об'єкт для роботи з таймером гри
  TIMER: {
    // Інтервал оновлення таймера (1000 мс = 1 секунда)
    TIMER_TICK_INTERVAL: 1000,
    // Ідентифікатор, який повертається функцією setInterval (для зупинки таймера)
    timedId: 0,
    // Поточна кількість хвилин
    minutes: 0,
    // Поточна кількість секунд
    seconds: 0,
    // Остаточний час гри
    finalTime: 0,
  },
};

// Об'єкт конфігурації гри, який містить налаштування рівнів, затримок, звуків тощо
export const GAME_CONFIG = {
  // Налаштування для кількості карт за рівнями
  QUANTITY_CARDS: {
    // Всі доступні карти
    ALL_CARDS: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
    // Кількість карт для різних рівнів
    EASY: [ '1', '2', '3', '4', '5', '6' ],
    BASIC: [ '1', '2', '3', '4', '5', '6', '7', '8' ],
    MEDIUM: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
    HARD: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ],
  },
  // Затримка перед приховуванням незбігаючих карт
  UNMATCHED_DELAY: 600,
  // Тривалість екрана завантаження
  LOADING_DURATION: 1500,
  // Ключ для збереження даних у localStorage
  STORAGE_KEY: 'playerScoreboard',
  // Перевірка, чи пристрій є мобільним
  MOBILE_SIZE_SCREEN: window.innerWidth <= 1024,
  // Звук при виборі рівня
  SOUND_CHOICE_LEVEL_CLICK: new Howl( { src: [ '/calm-pairs/sounds/choice-level.aac' ] } ),
  // Звук при кліку на карту
  SOUND_CLICK_ON_CARD: new Howl( { src: [ '/calm-pairs/sounds/click-card.aac' ] } ),
  // Звук при співпадінні карт
  SOUND_MATCHED_CARDS: new Howl( { src: [ '/calm-pairs/sounds/matched-cards.aac' ] } ),
};

// Об'єкт для зберігання посилань на DOM-елементи, які використовуються в грі
export const SELECTORS = {
  // Фон
  BACKGROUND: document.querySelector( '.background' ),
  // Екран завантаження
  LOAD_SCREEN: document.querySelector( '.loading-screen' ),
  // Контейнер з вибором рівня
  CHOICE_LEVEL_CONTAINER: document.querySelector( '.choice-level' ),
  // Головна ігрова дошка
  BOARD: document.querySelector( '.board' ),
  // Розширена головна ігрова дошка під потрібний рівень
  EXPAND_BOARD_LAYOUT: document.getElementsByClassName( 'expand-board-layout' ),
  // Контейнер для двох карт (видима та невидима)
  CARDS_CONTAINER: document.getElementsByClassName( 'cards-container' ),
  // Таймер гри
  GAME_TIMER: document.querySelector( '.time-counter' ),
  // Лічильник помилок
  GAME_MISTAKES: document.querySelector( '.mistakes-counter' ),
  // Кнопка для перезапуску рівня
  RESTART_LEVEL_BUTTON: document.querySelector( '.restart-level' ),
  // Кнопка для переходу на інший рівень
  ANOTHER_LEVEL_BUTTON: document.querySelector( '.another-level' ),
  // Екран з результатами гри
  SCOREBOARD_SCREEN: document.querySelector( '.results' ),
  // Елемент відображення часу у результатах гри
  SCOREBOARD_TIME: document.querySelector( '.results-time' ),
  // Елемент відображення помилок у результатах гри
  SCOREBOARD_MISTAKES: document.querySelector( '.results-mistakes' ),
  // Лічильник поточного часу у результатах гри
  SCOREBOARD_CURRENT_TIMER: document.querySelector( '.time-current-counter' ),
  // Лічильник поточних помилок у результатах гри
  SCOREBOARD_CURRENT_MISTAKES: document.querySelector( '.mistakes-current-counter' ),
  // Відображення попереднього часу
  SCOREBOARD_OLD_TIMER: document.querySelector( '.time-previous' ),
  // Лічильник попереднього часу
  SCOREBOARD_OLD_TIMER_COUNTER: document.querySelector( '.time-previous-counter' ),
  // Відображення попередніх помилок
  SCOREBOARD_OLD_MISTAKES: document.querySelector( '.mistakes-previous' ),
  // Лічильник попередніх помилок
  SCOREBOARD_OLD_MISTAKES_COUNTER: document.querySelector( '.mistakes-previous-counter' ),
  // Контейнер для часу у результатах
  SCOREBOARD_TIME_WRAPPER: document.querySelector( '.time-wrapper' ),
  // Контейнер для помилок у результатах
  SCOREBOARD_MISTAKES_WRAPPER: document.querySelector( '.mistakes-wrapper' ),
  // Елемент для відображення порівняння часу (новий vs старий)
  SCOREBOARD_COMPARE_TIME: document.querySelector( '.time-compare-count' ),
  // Елемент для відображення порівняння помилок (новий vs старий)
  SCOREBOARD_COMPARE_MISTAKES: document.querySelector( '.mistakes-compare-count' ),
  // Елемент для відображення статусу гри (наприклад, повідомлення про виграш чи програш)
  SCOREBOARD_STATUS: document.querySelector( '.results__status-message' ),
  // Кнопка для запуску нової гри на екрані результатів
  SCOREBOARD_BUTTON_NEW_GAME: document.querySelector( '.buttons__new-game' ),
  // Контейнер для відображення порівняння часу
  SCOREBOARD_TIME_COMPARE_WRAPPER: document.querySelector( '.time-compare-wrapper' ),
  // Контейнер для відображення порівняння помилок
  SCOREBOARD_MISTAKES_COMPARE_WRAPPER: document.querySelector( '.mistakes-compare-wrapper' ),
  // Лінія між таймером та рекордом, який написаний текстом
  SCOREBOARD_TIME_COMPARE_LINE: document.querySelector( '.results-counters-board__time-compare-line' ),
  // Лінія між помилками та рекордом, який написаний текстом
  SCOREBOARD_MISTAKES_COMPARE_LINE: document.querySelector( '.results-counters-board__mistakes-compare-line' ),
  // Активна зона гри, що відображається під час гри
  ACTIVE_GAME: document.querySelector( '.active-game' ),
  // Контейнер для лічильників активної гри
  ACTIVE_GAME_COUNTERS: document.querySelector( '.active-game__counters' ),
};

// Об'єкт для зберігання імен CSS класів, що використовуються в грі
export const CLASSES = {
  // Базовий клас для карти
  CARD: 'card',
  // Видима карта
  CARD_VISIBLE: 'card-visible',
  // Прихована карта (яку потрібно знайти)
  CARD_HIDDEN: 'card-hidden',
  // Клас контейнера для карт
  CARDS_CONTAINER: 'cards-container',
  // Клас, який позначає, що на карту клікнули
  CLICKED: 'clicked',
  // Клас, який застосовується при кліку на кнопку
  BUTTON_CLICK: 'button-clicked',
  // Клас, що позначає збігання карт
  MATCHED: 'matched',
  // Клас, що приховує елемент
  ELEMENT_HIDDEN: 'element-hidden',
  // Клас, який блокує взаємодію з елементом
  NO_INTERACTION: 'no-interaction',
  // Клас, що додає прозорість
  NO_VISIBLE: 'no-visible',
  // Розширена головна ігрова дошка під потрібний рівень
  EXPAND_BOARD_LAYOUT: 'expand-board-layout',
  // Адаптивні класи для різних рівнів складності активної гри
  EASY_ADAPTIVE: 'active-game-easy',
  BASIC_ADAPTIVE: 'active-game-basic',
  MEDIUM_ADAPTIVE: 'active-game-medium',
  HARD_ADAPTIVE: 'active-game-hard',
  // Класи для розширення головної ігрової дошки залежно від рівня складності
  EASY_EXPAND: 'expand-easy',
  BASIC_EXPAND: 'expand-basic',
  MEDIUM_EXPAND: 'expand-medium',
  HARD_EXPAND: 'expand-hard',
  // Клас для розмиття фону коли всі картки зібрані
  BLUR_BACKGROUND: 'blur-background',
  // Клас для скидання нижніх відступів
  MARGIN_BOTTOM_RESET: 'margin-bottom-reset',
  // Клас для додаткового відступу в першій грі
  FIRST_GAME_PADDING: 'first-game-padding',
};

