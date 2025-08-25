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
 * inorderTraversal выполняет обход
 * бинарного дерева в порядке inorder
 * «лево → корень → право»
 * Принимает на вход root — корень дерева.
 * 
 * Например, для дерева:
 *     1
 *    / \
 *   2   3
 * результат будет [2, 1, 3]
 */
function inorderTraversal(root) {
  // result накапливает значения узлов
  // в порядке inorder
  const result = [];

  // Определяем и сразу вызываем
  // рекурсивную функцию dfs для обхода
  // дерева
  //
  // Используем оператор !, чтобы
  // определить функцию как
  // Function Expression и сразу
  // запустить dfs(root)
  //
  // Параметр node по умолчанию равен root,
  // то есть первый вызов dfs работает
  // с корнем (1)
  !function dfs(node = root) {

    // Базовый случай рекурсии: 
    // если узел отсутствует, значит мы
    // «упёрлись» в конец ветви.
    //
    // Пример:
    // dfs(2.left) → dfs(null) → return
    if (!node) return;

    // Шаг 1: Рекурсивно обходим левое поддерево
    // текущего узла
    //
    // При node = 1 
    // вызывается dfs(1.left) => dfs(2)
    dfs(node.left);

    // Шаг 2: после завершения обхода левого
    // поддерева добавляем значение текущего
    // узла в result
    //
    // При node = 2, 
    // result.push(2) => result теперь [2]
    // 
    // Затем отрабатывае dfs для node = 1
    // result.push(1) => result теперь [2, 1]
    result.push(node.val);

    // Шаг 3. рекурсивно обходим правое поддерево
    // текущего узла
    //
    // При node = 1,
    // после записи 1 в result => result теперь [2, 1],
    // вызывается dfs(1.right) => dfs(3)
    dfs(node.right);
  }();


  // Возвращаем массив с результатами in-order обхода
  // Для нашего примера вернётся [2, 1, 3]
  return result;
}
