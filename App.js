// App.js
const flashcards = [
    { front: "Please", back: "Por favor" },
    { front: "Thank you", back: "Gracias" },
    { front: "Hello", back: "Hola" }
];

let currentIndex = 0;
let isFlipped = false;

const flashcard = document.getElementById('flashcard');

function updateFlashcard() {
    const word = flashcards[currentIndex];
    flashcard.textContent = isFlipped ? word.back : word.front;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateFlashcard();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    isFlipped = false;
    updateFlashcard();
}

function previousCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    isFlipped = false;
    updateFlashcard();
}

function markAsKnown() {
    const knownWord = flashcards[currentIndex];
    localStorage.setItem(knownWord.front, 'known');
    alert(`Marked "${knownWord.front}" as known!`);
    nextCard();
}

// Initial display
updateFlashcard();
