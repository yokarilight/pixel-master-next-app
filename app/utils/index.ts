const isHexColor = (color: string) => {
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (hexPattern.test(color)) {
    return true;
  }

  return false;
}

// get contrast color
function getContrastColor(hexColor: string) {
  // transform hex color to rgb
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 128 ? '#000000' : '#FFFFFF';
}

export {
  isHexColor,
  getContrastColor,
};
