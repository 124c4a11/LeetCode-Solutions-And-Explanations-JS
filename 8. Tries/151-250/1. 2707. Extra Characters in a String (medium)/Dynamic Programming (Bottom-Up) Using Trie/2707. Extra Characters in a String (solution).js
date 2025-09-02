class TrieNode {
  constructor() {
    this.children = {};
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
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }

      curr = curr.children[char];
    }

    curr.isEndOfWord = true;
  }
}

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
  const n = s.length;

  const trie = new Trie();
  for (const word of dictionary) {
    trie.addWord(word);
  }

  const dp = new Int32Array(n + 1);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = 1 + dp[i + 1];

    let curr = trie.root;
    for (let j = i; j < n; j++) {
      if (!curr.children[s[j]]) break;

      curr = curr.children[s[j]];

      if (!curr.isEndOfWord) continue;

      dp[i] = Math.min(dp[i], dp[j + 1]);
    }
  }

  return dp[0];
}
