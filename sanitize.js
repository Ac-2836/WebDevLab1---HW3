export function normalizeInput(value, maxLength) {
  const normalizedValue = String(value)
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .slice(0, maxLength);

  return normalizedValue;
}
