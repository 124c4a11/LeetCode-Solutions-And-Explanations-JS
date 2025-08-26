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
 * Метод preorderTraversal реализует обход
 * двоичного дерева в порядке preorder
 * «корень → левый → правый»
 * 
 * Рассмотрим на примере дерева:
 *     1
 *    / \
 *   2   3
 * результат будет [1, 2, 3]
 */
function preorderTraversal(root) {

  // result накапливает значения узлов
  // в порядке preorder
  //
  // Начальное состояние: result = []
  const result = [];

  // stack симулирует стек вызовов
  // рекурсии, чтобы запомнить узлы
  // для возврата
  //
  // Начальное состояние: stack = []
  const stack = [];

  // curr указывает на текущий узел,
  // стартует с корня (значение 1)
  //
  // curr = root (1)
  let curr = root;

  // Пока есть куда идти (лево/право)
  // или есть или есть отложенные
  // правые поддеревья в stack
  // (stack.length > 0)
  //
  // На старте curr = Node(1), stack = []
  while (curr || stack.length) {

    // Если curr указывает на узел,
    // мы «заходим» в него
    //
    // Начинаем с curr = Node(1)
    if (curr) {

      // Посещаем узел: записываем
      // его значение в result
      //
      // После этой строки result = [1]
      result.push(curr.val);

      // Откладываем правый потомок в стек,
      // чтобы вернуться к нему позже
      //
      // Здесь curr.right = Node(3),
      // значит stack = [Node(3)]
      stack.push(curr.right);

      // Переходим в левое поддерево.
      // curr = Node(2)
      curr = curr.left;

      // Переходим в начало while
      // для обработки нового curr
      continue;
    }

    // Если curr = null, значит мы «упёрлись»
    // в конец левого пути.
    //
    // Достаем из стека следующий узел
    // (правый потомок предыдущих узлов)
    //
    // В нашем примере здесь извлекается Node(3)
    //
    // После первого pop: curr = null, stack = [Node(3)]
    // После второго pop: curr = Node(3), stack = []
    curr = stack.pop();
  }

  // Когда цикл завершается, все узлы были посещены
  // в порядке preorder
  //
  // Для примера result = [1, 2, 3]
  return result;
}
