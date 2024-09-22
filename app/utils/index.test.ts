import { isHexColor } from '@/utils';
import { getContrastColor } from './index';

describe('Hex Color Validation', () => {
  it('should return true for valid hex color #ff5733', () => {
    expect(isHexColor('#ff5733')).toBe(true);
  });

  it('should return true for valid hex color #FFF', () => {
    expect(isHexColor('#FFF')).toBe(true);
  });

  it('should return true for valid hex color #000000', () => {
    expect(isHexColor('#000000')).toBe(true);
  });

  it('should return true for valid hex color #ABC', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });

  it('should return true for valid hex color #abc123', () => {
    expect(isHexColor('#abc123')).toBe(true);
  });

  it('should return false for invalid hex color #xyzxyz', () => {
    expect(isHexColor('#xyzxyz')).toBe(false);
  });

  it('should return false for invalid hex color #FFFFF', () => {
    expect(isHexColor('#FFFFF')).toBe(false);
  });

  it('should return false for missing # in hex color ff5733', () => {
    expect(isHexColor('ff5733')).toBe(false);
  });
});

describe('getContrastColor', () => {
  test('should return black text for light backgrounds', () => {
    expect(getContrastColor('#FFFFFF')).toBe('#000000');
    expect(getContrastColor('#FFFF00')).toBe('#000000');
    expect(getContrastColor('#00FFFF')).toBe('#000000');
    expect(getContrastColor('#CCCCCC')).toBe('#000000');
  });

  test('should return white text for dark backgrounds', () => {
    expect(getContrastColor('#000000')).toBe('#FFFFFF');
    expect(getContrastColor('#0000FF')).toBe('#FFFFFF');
    expect(getContrastColor('#800080')).toBe('#FFFFFF');
    expect(getContrastColor('#333333')).toBe('#FFFFFF');
  });

  test('should handle edge cases correctly', () => {
    expect(getContrastColor('#808080')).toBe('#FFFFFF');
    expect(getContrastColor('#808081')).toBe('#000000');
    expect(getContrastColor('#BFBFBF')).toBe('#000000');
    expect(getContrastColor('#C0C0C0')).toBe('#000000');
  });

  test('should be case-insensitive', () => {
    expect(getContrastColor('#FFFFFF')).toBe('#000000');
    expect(getContrastColor('#000000')).toBe('#FFFFFF');
    expect(getContrastColor('#Ff5733')).toBe('#000000');
  });

  test('should handle colors with different brightness levels', () => {
    expect(getContrastColor('#FF0000')).toBe('#FFFFFF');
    expect(getContrastColor('#00FF00')).toBe('#000000');
    expect(getContrastColor('#0000FF')).toBe('#FFFFFF');
    expect(getContrastColor('#777777')).toBe('#FFFFFF');
  });
});
