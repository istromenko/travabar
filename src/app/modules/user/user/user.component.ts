import { Component, OnInit } from '@angular/core';
import { Product } from "../../../interface/product.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  foodList: Product[] = [
    {
      name: 'Бургер главный',
      price: 150,
      tags: 'жирная, бургер, мясная',
      compound: '200 грамм мяса, 300 грамм булки, огурци, помидорыб салат',
      imageLink: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Пица паперони',
      price: 240,
      tags: 'пица, жирная, вегитарианская',
      compound: 'мука, кабачки, помидоры салат',
      imageLink: 'https://static.wikia.nocookie.net/edopedia/images/7/7b/%D0%9F%D0%B8%D1%86%D1%86%D0%B0.JPG/revision/latest?cb=20170530063638&path-prefix=ru'
    },
    {
      name: 'Пица мясная',
      price: 221,
      tags: 'пица, мясная, жирная',
      compound: 'мука, кабачки, помидоры салат',
      imageLink: 'https://static.wikia.nocookie.net/edopedia/images/7/7b/%D0%9F%D0%B8%D1%86%D1%86%D0%B0.JPG/revision/latest?cb=20170530063638&path-prefix=ru'
    },
    {
      name: 'Картошка фри',
      price: 40,
      tags: 'картошка',
      compound: 'жирная',
      imageLink: 'https://img.povar.ru/main/64/12/b0/54/kartofel_fri_v_domashnih_usloviyah-36496.jpg'
    },
    {
      name: 'Боул',
      price: 220,
      tags: 'здоровая, вегитарианская',
      compound: 'морковь, яйцо, салат',
      imageLink: 'https://milkalliance.com.ua/blog/images/articles/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-03-07_%D0%B2_14.25.40.png'
    }
  ];
  drinkList = [
    {
      name: 'Вода моршинская 0.5',
      price: 15,
      tags: 'вода, безалкогольная',
      compound: 'вода артерианская',
      imageLink: 'https://feofanivska.com.ua/wp-content/uploads/2021/03/morshinskaya-mineralnaya-voda-negazirovannaya-1.5-l.jpg'
    },
    {
      name: 'Ром Capitan Morgan 0.1л',
      price: 15,
      tags: 'Ром, Алкоголь',
      compound: 'ром 100%',
      imageLink: 'https://sf-api.maudau.com.ua/img/600/744/resize/catalog/product/j/G/jGzwtBpM.png'
    },
    {
      name: 'Колла 0.5',
      price: 15,
      tags: 'газировка, безалкогольная',
      compound: 'сахар, вода, хрень',
      imageLink: 'data:image/jpeg;base64,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'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
