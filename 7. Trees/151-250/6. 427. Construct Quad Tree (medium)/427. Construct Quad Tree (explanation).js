/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 * 
 * construct принимает квадратную двоичную
 * матрицу grid.
 * 
 * Пример grid:
 * [
 *   [1, 1, 0, 0],
 *   [1, 1, 0, 0],
 *   [0, 0, 1, 1],
 *   [0, 0, 1, 1]
 * ]
 */
function construct(grid) {

  // Создаем листовой узел для области,
  // заполненной нулями, чтобы везде,
  // где нужен лист с val=false,
  // возвращать один и тот же экземпляр
  //
  // Если область состоит из всех 0,
  // будем возвращать именно этот экземпляр.
  //
  // Пример: 
  // подматрица [[0,0],[0,0]] всегда даст
  // falseLeaf.
  const falseLeaf = new Node(false, true);

  // Создаем листовой узел для области,
  // заполненной единицами.
  //
  // Если область состоит из всех 1,
  // будем возвращать этот узел.
  //
  // Пример: 
  // подматрица [[1,1],[1,1]] всегда даст
  // trueLeaf.
  const trueLeaf = new Node(true, true);

  // Рекурсивная функция dfs строит Quad-дерево
  // для подматрицы размера n,
  // начинающейся в строке r и столбце c.
  //
  // Пример:
  // dfs(4, 0, 0) строит дерево для
  // всей матрицы 4x4.
  function dfs(n = grid.length, r = 0, c = 0) {

    // Базовый случай: если размер подматрицы 1x1,
    // возвращаем лист в зависимости от значения
    // единственного элемента.
    //
    // Пример: 
    // при n=1 и grid[r][c]=1 вернется
    // trueLeaf, иначе falseLeaf.
    if (n === 1) {
      return grid[r][c] === 1 ? trueLeaf : falseLeaf;
    }

    // Разбиваем текущий квадрат пополам
    // по стороне: n становится n/2
    //
    // Для n=4 он станет 2, чтобы обработать
    // квадраты 2×2
    n = Math.floor(n / 2);

    // Строим дерево для верхнего левого квадранта
    // [r..r+n-1][c..c+n-1].
    //
    // Пример: 
    // dfs(2, 0, 0) для области [[1,1],[1,1]]
    // вернет trueLeaf.
    const topLeft = dfs(n, r, c);

    // Строим дерево для верхнего правого квадранта
    // [r..r+n-1][c+n..c+2n-1].
    //
    // Пример:
    // dfs(2, 0, 2) для области [[0,0],[0,0]]
    // вернет falseLeaf.
    const topRight = dfs(n, r, c + n);

    // Строим дерево для нижнего левого квадранта
    // [r+n..r+2n-1][c..c+n-1].
    //
    // Пример: 
    // dfs(2, 2, 0) для области [[0,0],[0,0]]
    // вернет falseLeaf.
    const bottomLeft = dfs(n, r + n, c);

    // Строим дерево для нижнего правого квадранта
    // [r+n..r+2n-1][c+n..c+2n-1].
    //
    // Пример:
    // dfs(2, 2, 2) для области [[1,1],[1,1]]
    // вернет trueLeaf.
    const bottomRight = dfs(n, r + n, c + n);

    // Проверяем, можно ли объединить четыре листа
    // в один:
    //
    // Если все четыре дочерних узла — листы
    // и у них одинаковое логическое значение,
    // мы можем их «склеить» в один общий лист
    // вместо четырех
    //
    // Проверяем:
    // 1) все ли они isLeaf
    // 2) все ли имеют topLeft.val (true или false)
    //
    // Пример:
    // если topLeft, topRight, bottomLeft,
    // bottomRight все trueLeaf,
    // возвращаем trueLeaf вместо создания нового
    // узла, который представляет существующий
    // лист, объединяющий четыре одинаковых блока
    if (
      topLeft.isLeaf
      && topRight.isLeaf
      && bottomLeft.isLeaf
      && bottomRight.isLeaf
      && topLeft.val === topRight.val
      && topLeft.val === bottomLeft.val
      && topLeft.val === bottomRight.val
    ) return topLeft;


    // Иначе создаём внутренний узел (не лист)
    // со ссылками на четыре полученных поддерева.
    //
    // val в таком узле не используется
    // (обычно ставят false),
    //
    // isLeaf = false, поскольку это ветвь,
    // а не лист
    return new Node(
      false,
      false,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    );
  };

  // Запускаем рекурсию для всей исходной матрицы
  // размера grid.length и позиции (0, 0)
  // и возвращаем корень построенного Quadtree
  return dfs();
}
