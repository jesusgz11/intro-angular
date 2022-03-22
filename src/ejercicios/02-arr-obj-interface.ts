let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: 'Jesus',
  hp: 100,
  habilidades,
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
