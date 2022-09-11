export function greeter(name: string): string {
  return `Olá, ${name} seja bem vindo ao TS!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(Dm: number, dm: number): number {
  return (Dm * dm) / 2;
}

export function trapezio(height: number, Base: number, base: number): number {
  return ((Base + base) * height) / 2;
}

export function circulo(r: number): number {
  return (r * r) * 3.14;
}