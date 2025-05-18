const flashcards = [
  { en: 'Hello', es: 'Hola', fr: 'Bonjour' },
  { en: 'Goodbye', es: 'Adiós', fr: 'Au revoir' },
  { en: 'Please', es: 'Por favor', fr: 'S’il vous plaît' },
  { en: 'Thank you', es: 'Gracias', fr: 'Merci' },
  { en: 'Yes', es: 'Sí', fr: 'Oui' },
  { en: 'No', es: 'No', fr: 'Non' }
];

let currentIndex = 0;
let knownCount = 0;

const languageSelect = document.getElementById('language-select');
const wordEn = document.getElementById('word-en');
const wordTranslation = document.getElementById('word-translation');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score');

function updateCard() {
  const lang = languageSelect.value;
  const card = flashcards[currentIndex];

  wordEn.textContent = card.en;
  wordTranslation.textContent = lang === 'en-es' ? card.es : card.fr;

  updateProgress();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
}

function previousCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

function markAsKnown() {
  knownCount++;
  updateProgress();
  nextCard();
}

function updateProgress() {
  const percentage = Math.round((knownCount / flashcards.length) * 100);
  progressBar.value = percentage;
  scoreDisplay.textContent = `${percentage}%`;
}

function speakWord() {
  const utterance = new SpeechSynthesisUtterance(wordEn.textContent);
  speechSynthesis.speak(utterance);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const toggleBtn = document.getElementById('dark-mode-toggle');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

languageSelect.addEventListener('change', updateCard);

// Initialize
updateCard();



