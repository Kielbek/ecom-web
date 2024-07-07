import { Component, OnInit } from '@angular/core';

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
  likes: number;
}

@Component({
  selector: 'app-product-opinions',
  templateUrl: './product-opinions.component.html',
  styleUrl: './product-opinions.component.css',
})
export class ProductOpinionsComponent implements OnInit {
  comments: Comment[] = [];
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.fetchSampleComments();
  }

  fetchSampleComments(): void {
    this.comments = [
      {
        id: 1,
        author: 'Jan Kowalski',
        date: '12 lipca 2024',
        text: 'Bardzo dobry produkt, szybka dostawa. Polecam!',
        likes: 25,
      },
      {
        id: 2,
        author: 'Anna Nowak',
        date: '10 lipca 2024',
        text: 'Jakość produktu bardzo wysoka, zgodna z opisem.',
        likes: 18,
      },
      {
        id: 3,
        author: 'Marek Nowicki',
        date: '8 lipca 2024',
        text: 'Nieco długa dostawa, ale produkt zgodny z oczekiwaniami.',
        likes: 10,
      },
      {
        id: 4,
        author: 'Ewa Wiśniewska',
        date: '6 lipca 2024',
        text: 'Super produkt! Szybka wysyłka.',
        likes: 30,
      },
      {
        id: 5,
        author: 'Michał Kowalczyk',
        date: '4 lipca 2024',
        text: 'Bardzo polecam. Produkt zgodny z opisem.',
        likes: 15,
      },
      {
        id: 6,
        author: 'Katarzyna Nowak',
        date: '2 lipca 2024',
        text: 'Jestem zadowolona z zakupu.',
        likes: 20,
      },
      {
        id: 7,
        author: 'Piotr Adamski',
        date: '30 czerwca 2024',
        text: 'Dobry kontakt ze sprzedawcą.',
        likes: 12,
      },
      {
        id: 8,
        author: 'Alicja Malinowska',
        date: '28 czerwca 2024',
        text: 'Kupiłam dwa razy, zawsze szybka dostawa.',
        likes: 28,
      },
      {
        id: 9,
        author: 'Artur Zieliński',
        date: '26 czerwca 2024',
        text: 'Produkt zgodny z opisem.',
        likes: 22,
      },
      {
        id: 10,
        author: 'Magdalena Dąbrowska',
        date: '24 czerwca 2024',
        text: 'Polecam, szybka realizacja zamówienia.',
        likes: 25,
      },
    ];
  }
}
