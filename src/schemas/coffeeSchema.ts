type CoffeeItem = {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  src: string
}

export const coffeeSchema: CoffeeItem[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    tags: ['TRADICIONAL'],
    src: 'src/assets/coffee-types/expresso-tradicional.svg',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    tags: ['TRADICIONAL'],
    src: 'src/assets/coffee-types/expresso-americano.svg',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    tags: ['TRADICIONAL'],
    src: 'src/assets/coffee-types/expresso-cremoso.svg',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    tags: ['TRADICIONAL', 'GELADO'],
    src: 'src/assets/coffee-types/expresso-gelado.svg',
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/cafe-com-leite.svg',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/latte.svg',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/capuccino.svg',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/macchiato.svg',
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
    tags: ['TRADICIONAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/mocaccino.svg',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    tags: ['ESPECIAL', 'COM LEITE'],
    src: 'src/assets/coffee-types/chocolate-quente.svg',
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    src: 'src/assets/coffee-types/cubano.svg',
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    tags: ['ESPECIAL'],
    src: 'src/assets/coffee-types/havaiano.svg',
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café e especiarias',
    price: 990,
    tags: ['ESPECIAL'],
    src: 'src/assets/coffee-types/arabe.svg',
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    src: 'src/assets/coffee-types/irlandes.svg',
  },
]
