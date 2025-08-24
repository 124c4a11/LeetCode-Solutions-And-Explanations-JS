// Класс Node представляет узел
// двусвязного списка,
// содержащий пару ключ–значение
// и счётчик частоты использования
// узла
class Node {

    // Конструктор узла принимает
    // ключ и значение, устанавливает
    // частоту 1 и инициализирует
    // указатели на соседние узлы
    constructor(key, value) {

        // Устанавливаем ключ узла
        this.key = key;

        // Устанавливаем значение узла
        this.value = value;

        // Инициализируем частоту
        // использования узла как 1
        //
        // Изначально каждый новый узел
        // считается использованным
        // один раз 
        this.freq = 1;

        // Указатель на предыдущий узел
        // в двусвязном списке,
        // null пока не соединен
        this.prev = null;

        // Указатель на следующий узел
        // в двусвязном списке,
        // null пока не соединен
        this.next = null;
    }
}

// Двусвязный список для хранения узлов
// с одинаковой частотой обращения. 
class DoubleLinkedList {

    // При создании списка задаём
    // фиктивные узлы head и tail,
    // чтобы упростить вставку и удаление
    // реальных узлов.
    constructor() {

        // Фиктивный узел head
        // (не хранит реальных данных)
        //
        // Упрощает вставку и удаление
        // реальных узлов в начале списка.
        this.head = new Node(0);

        // Фиктивный узел tail
        // (не хранит реальных данных)
        //
        // Упрощает вставку и удаление
        // реальных узлов в конце списка.
        this.tail = new Node(0);

        // при пустом списке head.next
        // указывает на tail
        this.head.next = this.tail;

        // при пустом списке tail.prev
        // указывает на head
        this.tail.prev = this.head;

        // текущий размер списка (количество
        // реальных узлов между head и tail)
        this.size = 0;
    }

    // Метод добавляет узел сразу после head
    // (то есть в начало списка)
    add(node) {
        // Соединяем новый узел с бывшим
        // первым узлом
        node.next = this.head.next;

        // Устанавливаем для нового узла в
        // качестве предыдущего узел head
        node.prev = this.head;

        // Устанавливаем для
        // бывшего первого узла в качестве
        // предыдущего новый узел
        this.head.next.prev = node;

        // Устанавливаем для head в качестве
        // следующего узла новый узел
        this.head.next = node;

        // увеличиваем размер списка
        this.size++;
    }

    // Метод удаляет узел из списка
    remove(node) {

        // Переназначаем ссылку
        // предыдущего узла на следующий
        node.prev.next = node.next;

        // Переназначаем ссылку
        // следующего узла на предыдущий
        node.next.prev = node.prev;

        // Уменьшаем размер списка
        this.size--;
    }

    // Метод удаляет последний реальный
    // узел (перед фиктивным tail)
    // и возвращает его
    removeTail() {
        const prev = this.tail.prev;

        // удаляем  узел через общий
        // метод удаления
        this.remove(prev);

        // возвращаем удалённый узел
        // для дальнейшего удаления
        // из кэша
        return prev;
    }
}

// Класс LFUCache реализует кэш
// с политикой удаления
// наименее часто используемых
// элементов «Least Frequently Used»
class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // Устанавливаем максимальное
        // число элементов в кэше
        this.capacity = capacity;

        // Map  key → Node для быстрого
        // доступа к узлам по ключу 
        this.cache = new Map();

        // Map freq → DoubleLinkedList
        // для группировки узлов
        // по частоте
        this.freqMap = new Map();

        // Текущее количество элементов
        // в кэше
        this.size = 0;

        // Минимальная частота
        // использования среди всех
        // узлов (нужна для удаления)
        this.minFreq = 0;
    }

    // Вспомогательный метод обновляет
    // частоту использования узла после
    // get или put
    updateFreq(node) {

        // Получаем список узлов
        // со старой частотой узла
        const freqList = this.freqMap.get(node.freq);

        // Удаляем узел из списка
        // старой частоты
        freqList.remove(node);

        // Если это единственный узел
        // с минимальной частотой,
        // повышаем minFreq
        if (
            this.minFreq === node.freq
            && !freqList.size
        ) this.minFreq++;

        // увеличиваем частоту
        // использования узла
        node.freq++;

        // Если для новой частоты еще
        // нет списка, создаем его
        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DoubleLinkedList());
        }

        // Добавляем узел в список,
        // соответствующий его новой частоте
        this.freqMap.get(node.freq).add(node);
    }

    /**
     * @param {number} key
     * @return {number}
     * 
     * Возвращает значение по ключу
     * и обновляет частоту его 
     * использования 
     */
    get(key) {

        // Если ключа нет в кэше, возвращаем -1
        if (!this.cache.has(key)) return -1;

        // Получаем узел по ключу
        const node = this.cache.get(key);

        // Обновляем частоту
        // использования узла
        this.updateFreq(node);

        // Возвращаем сохраненное значение
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * 
     * Добавляет или обновляет элемент в кэше,
     * удаляя наименее часто используемый
     * при переполнении
     */
    put(key, value) {

        // Если узел с таким ключом уже есть,
        // обновляем его значение и частоту
        if (this.cache.has(key)) {
            const node = this.cache.get(key);

            node.value = value;
            this.updateFreq(node);

            return;
        }

        // Если кэш полон, удаляем
        // наименее часто и давно используемый
        // элемент (lfu)
        if (this.size === this.capacity) {

            // Получаем список узлов
            // с минимальной частотой
            const freqList = this.freqMap.get(this.minFreq);

            // Удаляем наименее недавно
            // использованный из этого списка
            const lfu = freqList.removeTail();

            // Удаляему элемент из кэша
            this.cache.delete(lfu.key);

            // Уменьшаем счетчик элементов  
            // в кэше
            this.size--;
        }

        // Создаем новый узел с частотой 1
        const newNode = new Node(key, value);

        // Если для частоты 1 еще нет списка,
        // создаем его
        if (!this.freqMap.has(newNode.freq)) {
            this.freqMap.set(newNode.freq, new DoubleLinkedList());
        }

        // Добавляем новый узел в список частоты 1
        this.freqMap.get(newNode.freq).add(newNode);

        // Сохраняем новый узел в cache
        this.cache.set(key, newNode);

        // Сбрасываем минимальную частоту на 1,
        // так как появился новый элемент
        // с freq=1
        this.minFreq = newNode.freq;

        // Увеличиваем счетчик элементов  
        // в кэше
        this.size++;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
