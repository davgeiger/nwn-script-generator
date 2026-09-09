export function indent(text: string, spaces = 4): string {
  const indentation = " ".repeat(spaces)

  return text
    .split("\n")
    .map((line) => (line.length > 0 ? indentation + line : line))
    .join("\n")
}
