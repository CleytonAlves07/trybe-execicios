// ./length.ts

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    console.log(`O fronIndex é: ${fromIndex}`);
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    console.log(`O toIndex é: ${toIndex}`);
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    console.log(`O exponent é: ${exponent}`);

    return value * Math.pow(10, exponent);
}

console.log(`A resposta é: ${convert(5, "m", "km")}`);
