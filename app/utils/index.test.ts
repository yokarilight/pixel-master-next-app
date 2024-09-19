import { isHexColor } from '@/utils';

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
