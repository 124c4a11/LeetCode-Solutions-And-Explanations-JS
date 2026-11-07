/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 * 
 * checkIfPrerequisite принимает:
 * numCourses – общее число курсов (например, 3),
 * prerequisites – список пар [u, v], означающих,
 *   что курс u нужно пройти перед курсом v
 * queries – массив пар [u, v], для которых нужно
 *   проверить, является ли u предшественником v
 *
 * Функция возвращает массив булевых значений.
 * Для каждого запроса [u, v] результат true,
 * если курс u является прямой или косвенной
 * предпосылкой для курса v, иначе false.
 * 
 * Пример:
 * для
 * numCourses=3
 * prerequisites=[[0,1],[1,2]]
 * queries=[[0,2],[2,0]]
 * функция вернёт массив из двух значений: 
 * [true, false]
 * - true для запроса [0,2], так как
 *   существует путь 0→1→2
 * - false для запроса [2,0], поскольку
 *   обратного пути нет получится [true,false]
 */
function checkIfPrerequisite(numCourses, prerequisites, queries) {

  // Создаем список смежности adj размером
  // numCourses, где adj[i] будет хранить
  // массив курсов, у которых
  // i – непосредственный предшественник.
  //
  // Пример:
  // numCourses=3,
  // prerequisites=[[0,1],[1,2]]
  // → adj после заполнения: [[1],[2],[]]
  const adj = Array.from({ length: numCourses }, () => []);

  // Создаем массив inDegree длиной numCourses,
  // инициализированный нулями, где
  // inDegree[i] – число входящих ребер
  // (прямых предшественников) для курса i.
  //
  // Пример:
  // с теми же данными inDegree будет [0,1,1]
  const inDegree = new Int32Array(numCourses);

  // Создаем матрицу isPrereq размером
  // numCourses×numCourses,
  // заполненную false.
  //
  // isPrereq[v][u] станет true,
  // если курс u – (прямой или косвенный)
  // предшественник v.
  //
  // Изначально нет информации,
  // поэтому все false.
  const isPrereq = Array.from(
    { length: numCourses },
    () => new Array(numCourses).fill(false)
  );

  // Заполняем adj, inDegree и отмечаем
  // прямые зависимости в isPrereq
  for (const [u, v] of prerequisites) {

    // Добавляем ребро u → v:
    // курс v зависит от u
    adj[u].push(v);

    // Увеличиваем счетчик входящих
    // ребер (предшественников) для v
    inDegree[v]++;

    // Отмечаем, что 
    // u – непосредственный
    // предшественник v
    isPrereq[v][u] = true;

    // После этой строки для
    // примера [[0,1],[1,2]]:
    // adj = [[1],[2],[]],
    // inDegree=[0,1,1],
    // isPrereq=[
    //   [false,false,false],
    //   [true,false,false],
    //   [false,true,false]
    // ]
  }

  // Инициализируем очередь для
  // топологической сортировки.
  //
  // Добавляем все курсы без предпосылок
  // (inDegree === 0).
  //
  // Пример:
  // при inDegree = [0,1,1]
  // в очередь попадёт только 0.
  const q = new Queue();

  // Находим все курсы без входящих
  // ребер и добавляем в очередь
  for (let i = 0; i < numCourses; i++) {

    // Если inDegree[i] === 0,
    // значит курс i не требует
    // прохождения предварительных
    // курсов
    if (inDegree[i] === 0) q.enqueue(i);
  }

  // Выполняем цикл пока в очереди есть
  // курсы
  while (!q.isEmpty()) {

    // Извлекаем из очереди курс crs,
    // готовый к "изучению"
    const crs = q.dequeue();

    // Пройдемся по всем курсам,
    // которые зависят от текущего crs
    for (const next of adj[crs]) {

      // Обновляем косвенные зависимости:
      // если курс i был предшественником
      // для crs, он также становится
      // предшественником для next.
      for (let i = 0; i < numCourses; i++) {
        if (isPrereq[crs][i]) {
          isPrereq[next][i] = true;
        }
      }

      // Отмечаем, что
      // crs – непосредственный
      // предшественник next
      isPrereq[next][crs] = true;

      // Уменьшаем число неразрешенных
      // зависимостей у next, так как
      // зависимость от crs теперь учтена
      inDegree[next]--;

      // Если у next больше нет входящих ребер
      // (зависимостей), добавляем next
      // в очередь
      if (inDegree[next] === 0) q.enqueue(next);
    }
  }

  // Обрабатываем каждый запрос [u, v]:
  // возвращаем true, если u – предшественник v
  // (isPrereq[v][u] === true), иначе false.
  //
  // Пример:
  // для
  // numCourses=3
  // prerequisites=[[0,1],[1,2]]
  // queries=[[0,2],[2,0]]
  // функция вернёт массив из двух значений: 
  // [true, false]
  // - true для запроса [0,2], так как
  //   существует путь 0→1→2
  // - false для запроса [2,0], поскольку
  //   обратного пути нет получится [true,false]
  return queries.map(([u, v]) => isPrereq[v][u]);
}
