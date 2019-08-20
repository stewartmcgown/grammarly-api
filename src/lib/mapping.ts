/**
 * A Mapped document consists of a translation between
 * the lines of an original file
 */
export interface MappedDocument {
  /**
   * A key which relates to the line in the original
   * document.
   */
  [key: number]: LineMapping;
}

/*
 * Maps a line to its position in a string.
 */
export interface LineMapping {
  originalLine: number;

  mappedStartPos: number;

  mappedEndPos: number;
}
