/**
 * Vietnamese Unicode Normalization Utility
 * Ensures all Vietnamese diacritics and combining characters are strictly rendered in Unicode NFC format,
 * preventing split glyphs or detached diacritic marks above characters.
 */
export const normalizeVietnamese = (text: string): string => {
  if (!text) return '';
  return text.normalize('NFC');
};

export const viText = (value: string): string => {
  if (!value) return '';
  return value.normalize('NFC');
};

/**
 * Grapheme segmenter for Vietnamese to safely split by visible glyph/character without breaking diacritics.
 */
export const splitVietnameseGraphemes = (text: string): string[] => {
  if (!text) return [];
  const normalized = text.normalize('NFC');
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new (Intl as any).Segmenter('vi', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(normalized), (item: any) => item.segment);
  }
  return Array.from(normalized);
};

