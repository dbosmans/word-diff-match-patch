# diff-match-patch

Wrapper around  https://github.com/google/diff-match-patch that allows for word based diff.

The word boundary is defined by the regex /[A-Za-z0-9_]/


## Installation

    npm install word-diff-match-patch

## Module exports :  
    characterDiff(text1, text2) → diffs
    wordDiff(text1, text2) → diffs
    characterDiff(text1, text2) → diffs
    prettyHtml_Character(text1, text2) → formatted string
    prettyHtml_Word(text1, text2) → formatted string


## License

  http://www.apache.org/licenses/LICENSE-2.0
