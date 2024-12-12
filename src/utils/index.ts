export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
