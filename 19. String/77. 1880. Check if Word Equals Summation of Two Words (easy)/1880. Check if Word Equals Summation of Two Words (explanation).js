/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 *
 * isSumEqual - принимает три строковых параметра firstWord,
 * secondWord, targetWord и возвращает true, если сумма
 * числовых представлений firstWordNum и secondWordNum равно
 * числовому представлению targetWordNum, иначе false
 *
 *
 * Пример для:
 *   firstWord = "acb",
 *   secondWord = "cba",
 *   targetWord = "cdb"
 * Результат:
 *   true
 * Пояснение:
 * - Числовое значение firstWord: "acb" → "021" → 21.
 * - Числовое значение secondWord: "cba" → "210" → 210.
 * - Числовое значение targetWord: "cdb" → "231" → 231.
 * Возвращаем true, потому что 21 + 210 == 231.
 */
function isSumEqual(firstWord, secondWord, targetWord) {

  // Вызывается вспомогательная функция convertWordToNumber
  // для преобразования строки firstWord в число.
  const firstWordNum = convertWordToNumber(firstWord);

  // Преобразуем secondWord в число
  const secondWordNum = convertWordToNumber(secondWord);

  // Преобразуем targetWord в число
  const targetWordNum = convertWordToNumber(targetWord);

  // Возвращается булево значение true если сумма
  // firstWordNum и secondWordNum строго равна
  // targetWordNum, иначе false.
  return firstWordNum + secondWordNum === targetWordNum;
}

// Объявление вспомогательной функции convertWordToNumber,
// принимающей один параметр word (строка).
//
// Функция преобразует последовательность строчных
// латинских букв в десятичное число по правилу:
// 'a' → 0, 'b' → 1, ... 'z' → 25, где каждая буква
// становится одной цифрой в результирующем числе
// (например, "acb" → 0 2 1 → 21).
function convertWordToNumber(word) {

  // Инициализация аккумулятора num нулём.
  //
  // В нём будет формироваться итоговое число.
  let num = 0;

  // Итерация по каждому символу строки word
  for (const char of word) {

    // Обновление аккумулятора num:
    // Сначала умножаем текущее значение на 10, чтобы
    // "сдвинуть" цифры влево, затем прибавляем числовое
    // значение текущего символа.
    //
    // char.codePointAt(0) возвращает числовой код Unicode
    // для символа char.
    //
    // Вычитание 97 соответствует смещению к 'a'
    // (в Unicode/ASCII код 'a' равен 97), поэтому
    // 'a' даёт 0, 'b' даёт 1 и т.д.
    //
    // Таким образом, для слова "acb" последовательность
    // добавляемых цифр будет 0, 2, 1, и итоговое число
    // будет 0*100 + 2*10 + 1 = 21 (с учётом начального
    // умножения на 10 на каждом шаге).
    num = num * 10 + char.codePointAt(0) - 97;
  }

  // Возвращаем накопленное числовое представление слова.
  return num;
}
