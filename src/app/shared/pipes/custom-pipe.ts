import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  //  transform(value: string, emoji: string = '✨'): string {
  //   if (!value) return value;
  //   return `${value} ${emoji}`;
  // }

  transform(fullName: string | undefined, family: string | undefined): string {
    if (!fullName) return '';

    let emoji = '';

    const fam = (family ?? '')
    .toLowerCase()
    .replace('house ', '')   // enlève "House "
    .trim();

    switch (fam) {
      case 'stark':
        emoji = '❄️';  // Glace
        break;
      case 'targaryen':
        emoji = '🔥';  // Feu
        break;
      case 'lannister':
        emoji = '🦁';  // Lion
        break;
      case 'baratheon':
        emoji = '🦌';  // Cerf
        break;
      case 'greyjoy':
        emoji = '🐙';  // Kraken
        break;
      case 'tyrell':
        emoji = '🌹';
        break;
      default:
        emoji = '✨';
    }

    return `${fullName} ${emoji}`;
  }
}

