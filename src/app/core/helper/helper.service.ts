import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() {
  }

  priceText(price: number) {

    if (!price) {
      return '';
    }

    const number = price.toFixed(2);
    return number.replace('.', ',');
  }

  friendlyUrl(phrase: string, key: string): string {
    const words = phrase.split(' ');

    let retValue = '';
    words.forEach(uri => {
      retValue += this.removeTurkishChars(uri) + '-';
    });


    return retValue + key;
  }

  private removeTurkishChars(text: string) {
    const s = text.toLowerCase();

    return s.replace('ö', 'o').replace('ş', 's').replace('ğ', 'g').replace('ç', 'c').replace('ü', 'u').replace('ı', 'i');
  }

}
