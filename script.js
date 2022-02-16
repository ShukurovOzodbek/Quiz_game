let  words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];
// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
let answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
    // Показываем состояние игры
    alert(answerArray.join(" ")); // Warning Warning
    // Запрашиваем вариант ответа
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
        if (guess === null) {
            // Выходим из игрового цикла
            break;
        } else if (guess.length !== 1) {
            alert("Пожалуйста, введите одиночную букву.");
        } else {
            // Обновляем состояние игры
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                    if (answerArray > 15 ){

                        break;
                    }
                }
            }
        }
        // Конец игрового цикла
    }
    // Отображаем ответ и поздравляем игрока
    alert(answerArray.join(" ")); // Warning Warning
    alert("Отлично! Было загадано слово " + word);