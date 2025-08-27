/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * Функция postorderTraversal выполняет обход
 * бинарного дерева в порядке left->right->root.
 * 
 * Пример дерева:
 *     1
 *    / \
 *   2   3
 * 
 * Ожидаемый результат: [2, 3, 1]
 */
function postorderTraversal(root) {
  // Инициализируем массив для накопления
  // узлов в порядке «root → right → left»
  const result = [];

  // stack симулирует стек вызовов
  // рекурсии, чтобы запомнить узлы
  // для возврата
  const stack = [];

  // curr указывает на текущий узел,
  // стартует с корня (значение 1)
  //
  // curr = root(1)
  let curr = root;

  // Пока есть куда идти (лево/право)
  // или есть или есть отложенные
  // узлы в stack
  // (stack.length > 0)
  //
  // На старте curr = Node(1), stack = []
  while (curr || stack.length) {

    // Если curr существует (не null),
    // обрабатываем узел и спускаемся
    // вправо.
    if (curr) {

      // Добавляем значение curr
      // в result в порядке
      // "root → right → left"
      //
      // Пример на первой итерации:
      // curr.val = 1 → result = [1]
      result.push(curr.val);

      // Сохраняем ссылку на текущий
      // узел в стек перед погружением
      // в правое поддерево для
      // последующего перехода
      // к его левому поддереву.
      //
      // Пример: stack = [Node(1)]
      stack.push(curr);

      // Переходим к правому потомку,
      // чтобы обойти правую ветку
      // раньше левой.
      //
      // Пример:
      // curr = root.right = Node(3)
      curr = curr.right;

      // Переходим к началу цикла,
      // пропуская последующий код
      continue;
    }

    // Если curr равно null (правое поддерево
    // полностью обработано), извлекаем
    // последний сохранённый узел из стека.
    //
    // Пример: 
    // stack.pop() вернёт Node(1),
    // и стек снова станет пустым.
    curr = stack.pop();

    // Переходим к левому потомку
    // извлеченного узла
    //
    // Пример:
    // curr = curr.left; для узла 1 это 2
    curr = curr.left;
  }

  // После прохождения в порядке
  // «root → right → left» result = [1, 3, 2]
  // Разворачиваем его, чтобы получить истинный
  // постфиксный порядок «left → right → root»
  //
  // Итог: [2, 3, 1]
  return result.reverse();
}
