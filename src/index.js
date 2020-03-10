// @flow

import DiffMatchPatch from './diff-match-patch'

const dmp = new DiffMatchPatch();

export function characterDiff(text1:string, text2:string) :Array<DiffMatchPatch.Diff>{
  return dmp.diff_main(text1, text2)
}

export function wordDiff(text1:string, text2:string):Array<DiffMatchPatch.Diff> {

  var a = dmp.diff_linesToChars_(text1, text2, true);
  var lineText1 = a.chars1;
  var lineText2 = a.chars2;
  var lineArray = a.lineArray;
  var diffs = dmp.diff_main(lineText1, lineText2, false);
  dmp.diff_charsToLines_(diffs, lineArray);
  return diffs;

}

export function lineDiff(text1:string, text2:string):Array<DiffMatchPatch.Diff> {

  var a = dmp.diff_linesToChars_(text1, text2);
  var lineText1 = a.chars1;
  var lineText2 = a.chars2;
  var lineArray = a.lineArray;
  var diffs = dmp.diff_main(lineText1, lineText2, false);
  dmp.diff_charsToLines_(diffs, lineArray);
  return diffs;

}

export function prettyHtml_Word(text1:string, text2:string) {
  return dmp.diff_prettyHtml(wordDiff(text1, text2))
}

export function prettyHtml_Character(text1:string, text2:string) {
  return dmp.diff_prettyHtml(characterDiff(text1, text2))
}

