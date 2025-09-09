class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }

      curr = curr.children.get(char);
    }

    curr.isEndOfWord = true;
  }
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  const n = s.length;

  const trie = new Trie();
  for (const word of wordDict) {
    trie.addWord(word);
  }

  const dp = new Map();

  function backtrack(i = 0) {
    if (i === n) return [''];
    if (dp.has(i)) return dp.get(i);

    const result = [];
    let curr = trie.root;
    for (let j = i; j < n; j++) {
      const char = s[j];
      if (!curr.children.has(char)) break;

      curr = curr.children.get(char);
      if (!curr.isEndOfWord) continue;

      for (const suffix of backtrack(j + 1)) {
        if (suffix) {
          result.push(`${s.slice(i, j + 1)} ${suffix}`);
        } else {
          result.push(s.slice(i, j + 1));
        }
      }
    }

    dp.set(i, result);

    return result;
  };

  return backtrack();
}
