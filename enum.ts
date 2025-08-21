enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function showColor(color: Color): string {
  return `El color seleccionado es ${color}.`;
}

console.log(showColor(Color.Red));
