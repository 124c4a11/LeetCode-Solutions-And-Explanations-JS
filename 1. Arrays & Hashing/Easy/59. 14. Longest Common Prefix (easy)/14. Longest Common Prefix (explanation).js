/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  // Проверка: если массив пуст
  // или первая строка пустая,
  // то общего префикса нет
  if (!strs.length || !strs[0].length) return "";

  // Инициализируем переменную
  // prefix первой строкой массива
  // Пример: strs[0] = "flower",
  // значит prefix = "flower"
  let prefix = strs[0];

  // Проходим по остальным строкам массива,
  // начиная со второго элемента
  // i = 1: strs[1] = "flow";
  // i = 2: strs[2] = "flight"
  for (let i = 1; i < strs.length; i++) {
    // Пока текущая строка strs[i]
    // не начинается с prefix,
    // будем укорачивать prefix,
    // убирая по одному символу с конца
    //
    // Пример: 
    // для prefix = "flower"
    // и strs[i] = "flow" indexOf даст -1
    //
    // Пример последовательности
    // для strs[i] = "flow"
    // и initial prefix = "flower":
    //    "flower" → indexOf("flower") === -1 → !== 0 → slice → "flowe"
    //    "flowe"  → indexOf("flowe")  === -1 → !== 0 → slice → "flow"
    //    "flow"   → indexOf("flow")   === 0  → выходим из while
    while (strs[i].indexOf(prefix) !== 0) {
      // Удаляем последний символ
      // из prefix slice(0, -1)
      // возвращает строку без
      // последнего символа
      //
      // Пример: 
      // "flowe".slice(0, -1) → "flow"
      prefix = prefix.slice(0, -1);

      // Если в процессе prefix
      // обрезался до пустой строки,
      // значит общих начальных символов нет
      // — сразу возвращаем ""
      if (!prefix) return "";
    }
  }

  // После того как все строки проверены и prefix
  // укорачивается ровно до самого длинного
  // общего начала, возвращаем его
  //
  // Пример: 
  // для ["flower", "flow", "flight"] 
  // в итоге prefix = "fl"
  return prefix;
}
