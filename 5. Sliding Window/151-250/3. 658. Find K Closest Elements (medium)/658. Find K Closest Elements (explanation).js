// Doubly Linked List

// Объявляем класс ListNode для узла
// двусвязного списка, хранящий значение
// и ссылки на оба соседних узла.
class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     * @param {ListNode} prev
     * 
     * Конструктор ListNode принимает
     * три параметра:
     * val  – число, которое будет
     *        храниться в узле;
     * next – ссылка на следующий узел
     *        (по умолчанию null);
     * prev – ссылка на предыдущий узел
     *        (по умолчанию null).
     */
    constructor(val = 0, next = null, prev = null) {

        // Сохраняем значение узла
        this.val = val;

        // Устанавливаем указатель на
        // следующий узел (или null)
        this.next = next;

        // Устанавливаем указатель на
        // предыдущий узел (или null)
        this.prev = prev;
    }
}

// Объявляем класс кольцевой очереди
// на основе двусвязного списка
// с фиктивными «левым» и «правым» узлами
// для упрощения операций.
class MyCircularQueue {
    /**
     * @param {number} k
     * 
     * Конструктор принимает одно число k:
     * максимальную вместимость очереди.
     */
    constructor(k) {

        // this.space хранит остаток
        // свободных мест.
        this.space = k;

        // Фиктивный левый узел — «голова» очереди
        // (упрощает работу с границами)
        this.head = new ListNode();

        // Фиктивный правый узел — «хвост» очереди,
        // сразу связываем его с head как prev
        // (упрощает работу с границами)
        this.tail = new ListNode(0, null, this.head);

        // Замыкаем пустую очередь: 
        // head.next → tail
        this.head.next = this.tail;
    }

    /**
     * @param {number} value
     * @return {boolean}
     * 
     * enQueue вставляет value в конец очереди.
     * 
     * Возвращает true при успешном добавлении,
     * false если очередь полна
     * 
     * Пример:
     * q.enQueue(5); // true, очередь: [5]
     * q.enQueue(6); // true, очередь: [5,6]
     * q.enQueue(7); // false (если k=2)
     */
    enQueue(value) {

        // Если нет свободного места, выходим.
        //
        // Возвращаем false
        if (this.isFull()) return false;

        // Создаём новый узел с value,
        // next → правый фиктивный,
        // prev → текущий последний реальный
        const curr = new ListNode(
            value,
            this.tail,
            this.tail.prev
        );

        // Связываем прежний последний
        // реальный узел, который находится
        // непосредственно перед фиктивным
        // узлом tail, с curr
        this.tail.prev.next = curr;

        // Обновляем prev у правого фиктивного
        // узла tail на curr
        this.tail.prev = curr;

        // Уменьшаем счетчик свободного места
        this.space--;

        // При успешном добавлении
        // возвращаем true 
        return true;
    }

    /**
     * @return {boolean}
     * 
     * deQueue удаляет элемент
     * из начала очереди.
     * 
     * Возвращает true при успешном удалении,
     * false если очередь пуста
     * 
     * Пример:
     * q.deQueue(); // true, удаляет 5, очередь: [6]
     * q.deQueue(); // true, удаляет 6, очередь пуста
     * q.deQueue(); // false (ничего удалять)
     */
    deQueue() {
        // Если в очереди нет элементов, выходим.
        //
        // Возвращаем false
        if (this.isEmpty()) return false;

        // Пропускаем первый реальный узел,
        // переназначая у левого фиктивного узла
        // head.next на второй узел
        //
        // head.next → второй узел
        this.head.next = this.head.next.next;

        // Корректируем prev у второго узла
        // (теперь он первый), указывая на head
        //
        // head ← (второй узел).prev
        this.head.next.prev = this.head;

        // Увеличиваем счетчик свободных мест
        this.space++;

        // При успешном удалении
        // возвращаем true 
        return true;
    }

    /**
     * @return {number}
     * 
     * Front возвращает значение первого
     * реального элемента или -1,
     * если очередь пуста.
     */
    Front() {
        // Если очередь пуста, возвращаем -1,
        // иначе возвращаем значение
        // первого реального елемента,
        // находящегося сразу после
        // фиктивного узла head
        return this.isEmpty() ? -1 : this.head.next.val;
    }

    /**
     * @return {number}
     * 
     * Rear возвращает значение последнего
     * реального элемента или -1,
     * если очередь пуста.
     */
    Rear() {
        
        // Если очередь пуста, возвращаем -1,
        // иначе возвращаем значение
        // последнего реального елемента,
        // находящегося непосредственно
        // перед фикивным узлом tail
        return this.isEmpty() ? -1 : this.tail.prev.val;
    }

    /**
     * @return {boolean}
     * 
     * isEmpty проверяет, пуста ли очередь.
     */
    isEmpty() {
        
        // Очередь пуста, когда между
        // head и tail нет реальных узлов
        // то есть сразу после head
        // следует tail
        return this.head.next === this.tail;
    }

    /**
     * @return {boolean}
     * 
     * isFull проверяет, заполнена ли очередь.
     */
    isFull() {

        // Очередь полна, когда space достиг нуля
        return this.space === 0;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
