const isHexColor = (color: string) => {
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (hexPattern.test(color)) {
    return true;
  }

  return false;
}

export {
  isHexColor,
};
