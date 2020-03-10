// @flow

import DiffMatchPatch from './diff-match-patch'

const dmp = new DiffMatchPatch()

function makeDiff(a:Array<DiffMatchPatch.Diff>) {

  const diffs = dmp.diff_main(a.chars1, a.chars2, false)
  dmp.diff_charsToLines_(diffs, a.lineArray);
  return diffs;
}

export function characterDiff(text1:string, text2:string) :Array<DiffMatchPatch.Diff>{
  return dmp.diff_main(text1, text2)
}

export function wordDiff(text1:string, text2:string):Array<DiffMatchPatch.Diff> {
  return makeDiff(dmp.diff_linesToChars_(text1, text2, true))
}

export function lineDiff(text1:string, text2:string):Array<DiffMatchPatch.Diff> {
  return makeDiff(dmp.diff_linesToChars_(text1, text2))
}

export function prettyHtml_Word(text1:string, text2:string) {
  return dmp.diff_prettyHtml(wordDiff(text1, text2))
}

export function prettyHtml_Character(text1:string, text2:string) {
  return dmp.diff_prettyHtml(characterDiff(text1, text2))
}

