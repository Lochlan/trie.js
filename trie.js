class TrieNode {
    constructor(value=null, terminates=false, children={}) {
        this.value = value;
        this.terminates = terminates;
        this.children = children;
    }

    insert(string) {
        if (string.length === 0) {
            this.terminates = true;
            return;
        }

        if (this.children[string[0]]) {
            this.children[string[0]].insert(string.substring(1));
            return;
        }

        this.children[string[0]] = new TrieNode(
            string[0],
            string.length === 1
        );
        this.children[string[0]].insert(string.substring(1));
    }

    lookUp(string) {
        if (string.length === 0) {
            return this.terminates;
        }

        if (this.children[string[0]]) {
            return this.children[string[0]].lookUp(string.substring(1));
        }

        return false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(string) {
        this.root.insert(string);
    }

    lookUp(string) {
        return this.root.lookUp(string);
    }
}

const trie = new Trie();
trie.insert('bar');
console.log(trie.lookUp('bar'));
console.log(trie.lookUp('ba'));

trie.insert('ba');
console.log(trie.lookUp('ba'));
