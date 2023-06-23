import { Component, OnInit, HostListener } from '@angular/core';
import { allGifts } from '../gifts';
import { AnswersService } from '../answers.service';
import { faSearch, faGift } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

const My3rdPartLib = {
  doWithCallback: function (callback) {
    this.callback = callback;
    this.callback();
  },
};

// Para casos como o de ficar aparecendo uns mangá nada a ver no meio de livros.
// Os presentes tops msm tem as tag da categoria mae neles.
// Desta forma aparecerá mais em casos nos quais nenhuma subcategoria (filtro) foi selecionada.
// Quando alguma subcategoria é clicada, cancelar a categoria.
// Desta forma, não fica aparecendo uns livros nada a ver se a pessoa clicar em mangás, por exemplo.
// (Pois assim o livro e manga teriam igualmente uma categoria (read/manga)).
// Os top ainda assim aparecerão quando forem clicadas as suas sub-categorias.

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  bookBg;
  cABg;
  eDSBg;
  fPFBg;
  hBBg;
  hGBg;
  gPCBg;
  musicBg;
  petBg;
  sportsBg;
  technologyBg;
  tPBBg;
  travelBg;
  videogameBg;
  bookSelected;
  cASelected;
  eDSSelected;
  fPFSelected;
  hBSelected;
  hGSelected;
  gPCSelected;
  musicSelected;
  petSelected;
  sportsSelected;
  technologySelected;
  tPBSelected;
  travelSelected;
  videogameSelected;
  isShow;
  answers;
  gifts;
  allTags = [
    'Book, Comic Books & Manga',
    'Clothing & Accessories',
    'Eat, Drink & Smoke',
    'Friends, Partner & Family',
    'Health & Beauty',
    'Home & Garden',
    'Geeky & Pop Culture',
    'Music',
    'Plant & Pets Supplies',
    'Sports',
    'Technology',
    'Toys, Puzzles & Boardgames',
    'Travel',
    'Videogame',
  ];
  tags;
  newTags = [];
  gift = faGift;
  search = faSearch;
  handset: boolean;
  list = [];
  subBook = [
    { name: 'Art', bg: 'a20025' },
    { name: 'Biography', bg: 'a20025' },
    { name: 'Business', bg: 'a20025' },
    { name: 'Classic', bg: 'a20025' },
    { name: 'Comics', bg: 'a20025' },
    { name: 'Economics', bg: 'a20025' },
    { name: 'Fantasy', bg: 'a20025' },
    { name: 'Fiction', bg: 'a20025' },
    { name: 'Hobbies', bg: 'a20025' },
    { name: 'LGBTQIA+', bg: 'a20025' },
    { name: 'History', bg: 'a20025' },
    { name: 'Horror', bg: 'a20025' },
    { name: 'Humor', bg: 'a20025' },
    { name: 'Manga', bg: 'a20025' },
    { name: 'Mistery', bg: 'a20025' },
    { name: 'Philosophy', bg: 'a20025' },
    { name: 'Poetry', bg: 'a20025' },
    { name: 'Politics', bg: 'a20025' },
    { name: 'Religion', bg: 'a20025' },
    { name: 'Romance', bg: 'a20025' },
    { name: 'Science', bg: 'a20025' },
    { name: 'Science Fiction', bg: 'a20025' },
    { name: 'Self-Improvement', bg: 'a20025' },
    { name: 'Sports', bg: 'a20025' },
  ];
  subCA = [
    { name: 'Activewear & Sportswear', bg: 'a20025' },
    { name: 'Blazers & Suits', bg: 'a20025' },
    { name: 'Cardigans & Sweaters', bg: 'a20025' },
    { name: 'Coats & Jackets', bg: 'a20025' },
    { name: 'Footwear', bg: 'a20025' },
    /** { name: 'Gloves', bg: 'a20025' { name: 'Hats', bg: 'a20025' }, { name: 'Jewelry', bg: 'a20025' }, { name: 'Pants', bg: 'a20025' }, { name: 'Shirts', bg: 'a20025' }, { name: 'Shorts', bg: 'a20025' },*/
    { name: 'Sleepwear', bg: 'a20025' },
    { name: 'Socks', bg: 'a20025' },
    { name: 'Sunglasses', bg: 'a20025' },
    /** { name: 'Swimwear', bg: 'a20025' }, { name: 'Top', bg: 'a20025' },*/
    /** { name: 'Underwear', bg: 'a20025' },*/
    { name: 'Wallet', bg: 'a20025' },
    { name: 'Watch', bg: 'a20025' },
  ];
  subEDS = [
    { name: 'Barbecue', bg: 'a20025' },
    { name: 'Beer', bg: 'a20025' },
    { name: 'Cocktail', bg: 'a20025' },
    { name: 'Coffee', bg: 'a20025' },
    { name: 'Cigars', bg: 'a20025' },
    { name: 'Food', bg: 'a20025' },
    { name: 'Tea', bg: 'a20025' },
    { name: 'Weed', bg: 'a20025' },
    { name: 'Wine', bg: 'a20025' },
  ];
  subFPF = [
    { name: 'Child', bg: 'a20025' },
    { name: 'Dad', bg: 'a20025' },
    { name: 'Friend', bg: 'a20025' },
    { name: 'Mom', bg: 'a20025' },
    { name: 'Others', bg: 'a20025' },
    { name: 'Partner', bg: 'a20025' },
    { name: 'Sibling', bg: 'a20025' },
  ];
  subHB = [
    { name: 'Bath & Body', bg: 'a20025' },
    { name: 'Beard', bg: 'a20025' },
    { name: 'Fragrance', bg: 'a20025' },
    { name: 'Hair', bg: 'a20025' },
    { name: 'Makeup', bg: 'a20025' },
    { name: 'Natural & Alternative Medicine', bg: 'a20025' },
    { name: 'Skin & Nail', bg: 'a20025' },
    { name: 'Sleep', bg: 'a20025' },
  ];
  subHG = [
    { name: 'Home', bg: 'a20025' },
    { name: 'Garden', bg: 'a20025' },
  ];
  subGPC = [
    { name: 'Aliens', bg: 'a20025' },
    { name: 'Cosplay', bg: 'a20025' },
    { name: 'Dragons', bg: 'a20025' },
    { name: 'DC Comics', bg: 'a20025' },
    { name: 'Disney', bg: 'a20025' },
    { name: 'Dragon Ball Z', bg: 'a20025' },
    { name: 'Harry Potter', bg: 'a20025' },
    { name: 'Marvel', bg: 'a20025' },
    { name: 'Naruto', bg: 'a20025' },
    { name: 'One Piece', bg: 'a20025' },
    { name: 'Pokemon', bg: 'a20025' },
    { name: 'Rick and Morty', bg: 'a20025' },
    { name: 'Spongebob Squarepants', bg: 'a20025' },
    { name: 'Star Wars', bg: 'a20025' },
    { name: 'The Lord of The Rings', bg: 'a20025' },
    { name: 'The Office', bg: 'a20025' },
  ];
  subMusic = [
    { name: 'Musician', bg: 'a20025' },
    { name: 'Listener', bg: 'a20025' },
  ];
  subPet = [
    { name: 'Bird', bg: 'a20025' },
    { name: 'Cat', bg: 'a20025' },
    { name: 'Dog', bg: 'a20025' },
    { name: 'Fish', bg: 'a20025' },
    { name: 'Plant', bg: 'a20025' },
    { name: 'Reptile', bg: 'a20025' },
  ];
  subSports = [
    { name: 'American Football', bg: 'a20025' },
    { name: 'Baseball', bg: 'a20025' },
    { name: 'Basketball', bg: 'a20025' },
    { name: 'Boxing, Martial Arts & MMA', bg: 'a20025' },
    { name: 'Cricket', bg: 'a20025' },
    { name: 'Curling', bg: 'a20025' },
    { name: 'Cycling', bg: 'a20025' },
    { name: 'Fishing', bg: 'a20025' },
    { name: 'Golf', bg: 'a20025' },
    { name: 'Gym', bg: 'a20025' },
    { name: 'Hunting', bg: 'a20025' },
    { name: 'Ice Hockey', bg: 'a20025' },
    { name: 'Lacrosse', bg: 'a20025' },
    { name: 'Mountain Sports', bg: 'a20025' },
    { name: 'Rugby', bg: 'a20025' },
    { name: 'Running', bg: 'a20025' },
    { name: 'Soccer', bg: 'a20025' },
    { name: 'Tennis', bg: 'a20025' },
    { name: 'Voleyball', bg: 'a20025' },
    { name: 'Water Sports', bg: 'a20025' },
    { name: 'Winter Sports', bg: 'a20025' },
    { name: 'Yoga', bg: 'a20025' },
  ];
  subTechnology = [
    { name: 'Accessories', bg: 'a20025' },
    { name: 'Audio', bg: 'a20025' },
    { name: 'Computer', bg: 'a20025' },
    { name: 'Cooking', bg: 'a20025' },
    { name: 'Exercising', bg: 'a20025' },
    { name: 'HomeTec', bg: 'a20025' },
    { name: 'Gaming', bg: 'a20025' },
    { name: 'Video', bg: 'a20025' },
    { name: 'Wearable', bg: 'a20025' },
  ];
  subTPB = [
    { name: 'Boardgames', bg: 'a20025' },
    { name: 'Collectibles', bg: 'a20025' },
    { name: 'Magic: The Gathering', bg: 'a20025' },
    { name: 'Lego', bg: 'a20025' },
    { name: 'Pokemon Trading Card', bg: 'a20025' },
    { name: 'Puzzles', bg: 'a20025' },
    { name: 'RPG', bg: 'a20025' },
    { name: 'Toys', bg: 'a20025' },
    { name: 'Yu-Gi-Oh! Trading Cards', bg: 'a20025' },
  ];
  subTravel = [
    { name: 'Business', bg: 'a20025' },
    { name: 'Vacation', bg: 'a20025' },
  ];
  subVideogame = [
    { name: 'Classic & Rarities', bg: 'a20025' },
    { name: 'Computer', bg: 'a20025' },
    { name: 'Nintendo', bg: 'a20025' },
    { name: 'PlayStation', bg: 'a20025' },
    { name: 'Xbox', bg: 'a20025' },
  ];

  constructor(private answersService: AnswersService) {}

  ngOnInit() {
    if (window.innerWidth < 1000) this.handset = true;
    else this.handset = false;
    this.answers = this.answersService.getAnswers();
    this.tags = Object.keys(this.answers[0])
      .filter((k) => this.answers[0][k])
      .splice(2);
    My3rdPartLib.doWithCallback((result) => this.chooseGifts(this.gifts));

    var $range = $('.js-range-slider'),
      instance,
      min = 10,
      max = 500;

    $range.ionRangeSlider({
      skin: 'flat',
      type: 'double',
      prefix: 'C$',
      max_postfix: '+',
      min: min,
      max: max,
      from: this.answers[1],
      to: this.answers[2],
      onStart: updateInputs,
      onChange: updateInputs,
    });
    instance = $range.data('ionRangeSlider');

    function updateInputs(data, from, to) {
      from = from;
      if (data.to != max) {
        to = to;
      } else {
        to = to + '+';
      }
      AnswersService.priceFrom = data.from;
      AnswersService.priceTo = data.to;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 1000) this.handset = true;
    else this.handset = false;
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    window.location.reload();
  }

  addToList(gift) {
    if (!this.list.includes(gift)) {
      this.list.push(gift);
      document.getElementById('alrt').innerHTML =
        gift.name + ' sucessfully added to Spotlight!';
      setTimeout(function () {
        document.getElementById('alrt').innerHTML = '';
      }, 5000);
    } else {
      let modal = document.getElementById('error-box');
      modal.style.display = 'block';
    }
  }

  chooseGifts(result) {
    this.gifts = allGifts.filter(
      (element) =>
        element.price >= AnswersService.priceFrom &&
        (AnswersService.priceTo >= this.answers[3]
          ? element.price >= AnswersService.priceFrom
          : element.price <= AnswersService.priceTo) &&
        (element.age.includes('all') ||
          element.age.includes(this.answers[0].age)) &&
        (element.gender.includes('all') ||
          element.gender.includes(this.answers[0].gender)) &&
        element.tags.some((r) => this.tags.includes(r))
    );
    this.shuffle(this.gifts);
    this.organizeGifts(this.gifts);
  }

  closeModal() {
    let modal = document.getElementById('error-box');
    modal.style.display = 'none';
  }

  openDiv(div) {
    if (this.isShow == div) {
      if (this.isShow == 'book') {
        for (let i = 0; i < this.subBook.length; i++) {
          if (this.subBook[i].bg == '5A0015') {
            this.bookBg = '#5A0015';
            this.bookSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.bookBg = '#ff416c';
            this.bookSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'cA') {
        for (let i = 0; i < this.subCA.length; i++) {
          if (this.subCA[i].bg == '5A0015') {
            this.cABg = '#5A0015';
            this.cASelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.cABg = '#ff416c';
            this.cASelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'eDS') {
        for (let i = 0; i < this.subEDS.length; i++) {
          if (this.subEDS[i].bg == '5A0015') {
            this.eDSBg = '#5A0015';
            this.eDSSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.eDSBg = '#ff416c';
            this.eDSSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'fPF') {
        for (let i = 0; i < this.subFPF.length; i++) {
          if (this.subFPF[i].bg == '5A0015') {
            this.fPFBg = '#5A0015';
            this.fPFSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.fPFBg = '#ff416c';
            this.fPFSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'hB') {
        for (let i = 0; i < this.subHB.length; i++) {
          if (this.subHB[i].bg == '5A0015') {
            this.hBBg = '#5A0015';
            this.hBSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.hBBg = '#ff416c';
            this.hBSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'hG') {
        for (let i = 0; i < this.subHG.length; i++) {
          if (this.subHG[i].bg == '5A0015') {
            this.hGBg = '#5A0015';
            this.hGSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.hGBg = '#ff416c';
            this.hGSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'gPC') {
        for (let i = 0; i < this.subGPC.length; i++) {
          if (this.subGPC[i].bg == '5A0015') {
            this.gPCBg = '#5A0015';
            this.gPCSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.gPCBg = '#ff416c';
            this.gPCSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'music') {
        for (let i = 0; i < this.subMusic.length; i++) {
          if (this.subMusic[i].bg == '5A0015') {
            this.musicBg = '#5A0015';
            this.musicSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.musicBg = '#ff416c';
            this.musicSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'pet') {
        for (let i = 0; i < this.subPet.length; i++) {
          if (this.subPet[i].bg == '5A0015') {
            this.petBg = '#5A0015';
            this.petSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.petBg = '#ff416c';
            this.petSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'sports') {
        for (let i = 0; i < this.subSports.length; i++) {
          if (this.subSports[i].bg == '5A0015') {
            this.sportsBg = '#5A0015';
            this.sportsSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.sportsBg = '#ff416c';
            this.sportsSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'technology') {
        for (let i = 0; i < this.subTechnology.length; i++) {
          if (this.subTechnology[i].bg == '5A0015') {
            this.technologyBg = '#5A0015';
            this.technologySelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.technologyBg = '#ff416c';
            this.technologySelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'tPB') {
        for (let i = 0; i < this.subTPB.length; i++) {
          if (this.subTPB[i].bg == '5A0015') {
            this.tPBBg = '#5A0015';
            this.tPBSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.tPBBg = '#ff416c';
            this.tPBSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'travel') {
        for (let i = 0; i < this.subTravel.length; i++) {
          if (this.subTravel[i].bg == '5A0015') {
            this.travelBg = '#5A0015';
            this.travelSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.travelBg = '#ff416c';
            this.travelSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
      if (this.isShow == 'videogame') {
        for (let i = 0; i < this.subVideogame.length; i++) {
          if (this.subVideogame[i].bg == '5A0015') {
            this.videogameBg = '#5A0015';
            this.videogameSelected = '#ff416c';
            this.isShow = null;
            return;
          } else {
            this.videogameBg = '#ff416c';
            this.videogameSelected = '#ff416c';
            this.isShow = null;
          }
        }
      }
    } else {
      this.isShow = div;
      this.bookSelected = '#ff416c';
      this.cASelected = '#ff416c';
      this.eDSSelected = '#ff416c';
      this.fPFSelected = '#ff416c';
      this.hBSelected = '#ff416c';
      this.hGSelected = '#ff416c';
      this.gPCSelected = '#ff416c';
      this.musicSelected = '#ff416c';
      this.petSelected = '#ff416c';
      this.sportsSelected = '#ff416c';
      this.technologySelected = '#ff416c';
      this.tPBSelected = '#ff416c';
      this.travelSelected = '#ff416c';
      this.videogameSelected = '#ff416c';

      if (this.isShow == 'book') {
        this.bookSelected = '#a20025';
        for (let i = 0; i < this.subBook.length; i++) {
          if (this.subBook[i].bg == '5A0015') {
            this.bookBg = '#5A0015';
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.bookBg = '#a20025';
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'cA') {
        this.cASelected = '#a20025';
        for (let i = 0; i < this.subCA.length; i++) {
          if (this.subCA[i].bg == '5A0015') {
            this.cABg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.cABg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'eDS') {
        this.eDSSelected = '#a20025';
        for (let i = 0; i < this.subEDS.length; i++) {
          if (this.subEDS[i].bg == '5A0015') {
            this.eDSBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.eDSBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'fPF') {
        this.fPFSelected = '#a20025';
        for (let i = 0; i < this.subFPF.length; i++) {
          if (this.subFPF[i].bg == '5A0015') {
            this.fPFBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.fPFBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'hB') {
        this.hBSelected = '#a20025';
        for (let i = 0; i < this.subHB.length; i++) {
          if (this.subHB[i].bg == '5A0015') {
            this.hBBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.hBBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'hG') {
        this.hGSelected = '#a20025';
        for (let i = 0; i < this.subHG.length; i++) {
          if (this.subHG[i].bg == '5A0015') {
            this.hGBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.hGBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'gPC') {
        this.gPCSelected = '#a20025';
        for (let i = 0; i < this.subGPC.length; i++) {
          if (this.subGPC[i].bg == '5A0015') {
            this.gPCBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.gPCBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'music') {
        this.musicSelected = '#a20025';
        for (let i = 0; i < this.subMusic.length; i++) {
          if (this.subMusic[i].bg == '5A0015') {
            this.musicBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.musicBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'pet') {
        this.petSelected = '#a20025';
        for (let i = 0; i < this.subPet.length; i++) {
          if (this.subPet[i].bg == '5A0015') {
            this.petBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.petBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'sports') {
        this.sportsSelected = '#a20025';
        for (let i = 0; i < this.subSports.length; i++) {
          if (this.subSports[i].bg == '5A0015') {
            this.sportsBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.sportsBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'technology') {
        this.technologySelected = '#a20025';
        for (let i = 0; i < this.subTechnology.length; i++) {
          if (this.subTechnology[i].bg == '5A0015') {
            this.technologyBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.technologyBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'tPB') {
        this.tPBSelected = '#a20025';
        for (let i = 0; i < this.subTPB.length; i++) {
          if (this.subTPB[i].bg == '5A0015') {
            this.tPBBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.tPBBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'travel') {
        this.travelSelected = '#a20025';
        for (let i = 0; i < this.subTravel.length; i++) {
          if (this.subTravel[i].bg == '5A0015') {
            this.travelBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            if (this.videogameBg == '#a20025') {
              this.videogameBg = '#ff416c';
            }
            return;
          }
        }
        this.travelBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        if (this.videogameBg == '#a20025') {
          this.videogameBg = '#ff416c';
        }
        return;
      }
      if (this.isShow == 'videogame') {
        this.videogameSelected = '#a20025';
        for (let i = 0; i < this.subVideogame.length; i++) {
          if (this.subVideogame[i].bg == '5A0015') {
            this.videogameBg = '#5A0015';
            if (this.bookBg == '#a20025') {
              this.bookBg = '#ff416c';
            }
            if (this.cABg == '#a20025') {
              this.cABg = '#ff416c';
            }
            if (this.eDSBg == '#a20025') {
              this.eDSBg = '#ff416c';
            }
            if (this.fPFBg == '#a20025') {
              this.fPFBg = '#ff416c';
            }
            if (this.hBBg == '#a20025') {
              this.hBBg = '#ff416c';
            }
            if (this.hGBg == '#a20025') {
              this.hGBg = '#ff416c';
            }
            if (this.gPCBg == '#a20025') {
              this.gPCBg = '#ff416c';
            }
            if (this.musicBg == '#a20025') {
              this.musicBg = '#ff416c';
            }
            if (this.petBg == '#a20025') {
              this.petBg = '#ff416c';
            }
            if (this.sportsBg == '#a20025') {
              this.sportsBg = '#ff416c';
            }
            if (this.technologyBg == '#a20025') {
              this.technologyBg = '#ff416c';
            }
            if (this.tPBBg == '#a20025') {
              this.tPBBg = '#ff416c';
            }
            if (this.travelBg == '#a20025') {
              this.travelBg = '#ff416c';
            }
            return;
          }
        }
        this.videogameBg = '#a20025';
        if (this.bookBg == '#a20025') {
          this.bookBg = '#ff416c';
        }
        if (this.cABg == '#a20025') {
          this.cABg = '#ff416c';
        }
        if (this.eDSBg == '#a20025') {
          this.eDSBg = '#ff416c';
        }
        if (this.fPFBg == '#a20025') {
          this.fPFBg = '#ff416c';
        }
        if (this.hBBg == '#a20025') {
          this.hBBg = '#ff416c';
        }
        if (this.hGBg == '#a20025') {
          this.hGBg = '#ff416c';
        }
        if (this.gPCBg == '#a20025') {
          this.gPCBg = '#ff416c';
        }
        if (this.musicBg == '#a20025') {
          this.musicBg = '#ff416c';
        }
        if (this.petBg == '#a20025') {
          this.petBg = '#ff416c';
        }
        if (this.sportsBg == '#a20025') {
          this.sportsBg = '#ff416c';
        }
        if (this.technologyBg == '#a20025') {
          this.technologyBg = '#ff416c';
        }
        if (this.tPBBg == '#a20025') {
          this.tPBBg = '#ff416c';
        }
        if (this.travelBg == '#a20025') {
          this.travelBg = '#ff416c';
        }
        return;
      }
    }
  }

  organizeGifts(giftsArray) {
    var organizedByTags = [];

    for (let i = 0; i < giftsArray.length; i++) {
      //compare tags array and gift.tags array to see the number of tags on the gift that were selected by the user
      const res = this.tags.reduce((a, b) => {
        const l = giftsArray[i].tags.filter((e) => e === b).length;
        if (l) a[b] = l;
        return a;
      }, {});

      //add the number of tags selected by the user that exists in the gift.
      giftsArray[i].tagsOccurrence = Object.keys(res).length;

      //add the present in the correct position of organizedByTags Array.
      if (organizedByTags.length == 0) {
        organizedByTags.push(giftsArray[i]);
      } else {
        for (let j = 0; j < organizedByTags.length; j++) {
          if (
            giftsArray[i].tagsOccurrence >= organizedByTags[j].tagsOccurrence
          ) {
            organizedByTags.splice(j, 0, giftsArray[i]);
            break;
          }
          if (j + 1 == organizedByTags.length) {
            organizedByTags.push(giftsArray[i]);
            break;
          }
        }
      }
    }
    this.gifts = organizedByTags;
  }

  removeFromList(gift) {
    var index = this.list.indexOf(gift);
    if (index > -1) {
      this.list.splice(index, 1);
    }
    return this.list;
  }

  shuffle(giftsArray) {
    for (let i = giftsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [giftsArray[i], giftsArray[j]] = [giftsArray[j], giftsArray[i]];
    }
    return giftsArray;
  }

  toggleTags(e: HTMLElement, category) {
    if (category == 'book') {
      for (let i = 0; i < this.subBook.length; i++) {
        if (e.id == this.subBook[i].name) {
          this.subBook[i].bg == 'a20025'
            ? (this.subBook[i].bg = '5A0015')
            : (this.subBook[i].bg = 'a20025');
          if (this.subBook[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.bookBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subBook.find((x) => x.bg === '5A0015')) {
              this.bookBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'cA') {
      for (let i = 0; i < this.subCA.length; i++) {
        if (e.id == this.subCA[i].name) {
          this.subCA[i].bg == 'a20025'
            ? (this.subCA[i].bg = '5A0015')
            : (this.subCA[i].bg = 'a20025');
          if (this.subCA[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.cABg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subCA.find((x) => x.bg === '5A0015')) {
              this.cABg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'eDS') {
      for (let i = 0; i < this.subEDS.length; i++) {
        if (e.id == this.subEDS[i].name) {
          this.subEDS[i].bg == 'a20025'
            ? (this.subEDS[i].bg = '5A0015')
            : (this.subEDS[i].bg = 'a20025');
          if (this.subEDS[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.eDSBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subEDS.find((x) => x.bg === '5A0015')) {
              this.eDSBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'fPF') {
      for (let i = 0; i < this.subFPF.length; i++) {
        if (e.id == this.subFPF[i].name) {
          this.subFPF[i].bg == 'a20025'
            ? (this.subFPF[i].bg = '5A0015')
            : (this.subFPF[i].bg = 'a20025');
          if (this.subFPF[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.fPFBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subFPF.find((x) => x.bg === '5A0015')) {
              this.fPFBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'hB') {
      for (let i = 0; i < this.subHB.length; i++) {
        if (e.id == this.subHB[i].name) {
          this.subHB[i].bg == 'a20025'
            ? (this.subHB[i].bg = '5A0015')
            : (this.subHB[i].bg = 'a20025');
          if (this.subHB[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.hBBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subHB.find((x) => x.bg === '5A0015')) {
              this.hBBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'hG') {
      for (let i = 0; i < this.subHG.length; i++) {
        if (e.id == this.subHG[i].name) {
          this.subHG[i].bg == 'a20025'
            ? (this.subHG[i].bg = '5A0015')
            : (this.subHG[i].bg = 'a20025');
          if (this.subHG[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.hGBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subHG.find((x) => x.bg === '5A0015')) {
              this.hGBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'gPC') {
      for (let i = 0; i < this.subGPC.length; i++) {
        if (e.id == this.subGPC[i].name) {
          this.subGPC[i].bg == 'a20025'
            ? (this.subGPC[i].bg = '5A0015')
            : (this.subGPC[i].bg = 'a20025');
          if (this.subGPC[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.gPCBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subGPC.find((x) => x.bg === '5A0015')) {
              this.gPCBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'music') {
      for (let i = 0; i < this.subMusic.length; i++) {
        if (e.id == this.subMusic[i].name) {
          this.subMusic[i].bg == 'a20025'
            ? (this.subMusic[i].bg = '5A0015')
            : (this.subMusic[i].bg = 'a20025');
          if (this.subMusic[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.musicBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subMusic.find((x) => x.bg === '5A0015')) {
              this.musicBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'pet') {
      for (let i = 0; i < this.subPet.length; i++) {
        if (e.id == this.subPet[i].name) {
          this.subPet[i].bg == 'a20025'
            ? (this.subPet[i].bg = '5A0015')
            : (this.subPet[i].bg = 'a20025');
          if (this.subPet[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.petBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subPet.find((x) => x.bg === '5A0015')) {
              this.petBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'sports') {
      for (let i = 0; i < this.subSports.length; i++) {
        if (e.id == this.subSports[i].name) {
          this.subSports[i].bg == 'a20025'
            ? (this.subSports[i].bg = '5A0015')
            : (this.subSports[i].bg = 'a20025');
          if (this.subSports[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.sportsBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subSports.find((x) => x.bg === '5A0015')) {
              this.sportsBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'technology') {
      for (let i = 0; i < this.subTechnology.length; i++) {
        if (e.id == this.subTechnology[i].name) {
          this.subTechnology[i].bg == 'a20025'
            ? (this.subTechnology[i].bg = '5A0015')
            : (this.subTechnology[i].bg = 'a20025');
          if (this.subTechnology[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.technologyBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subTechnology.find((x) => x.bg === '5A0015')) {
              this.technologyBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'tPB') {
      for (let i = 0; i < this.subTPB.length; i++) {
        if (e.id == this.subTPB[i].name) {
          this.subTPB[i].bg == 'a20025'
            ? (this.subTPB[i].bg = '5A0015')
            : (this.subTPB[i].bg = 'a20025');
          if (this.subTPB[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.tPBBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subTPB.find((x) => x.bg === '5A0015')) {
              this.tPBBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'travel') {
      for (let i = 0; i < this.subTravel.length; i++) {
        if (e.id == this.subTravel[i].name) {
          this.subTravel[i].bg == 'a20025'
            ? (this.subTravel[i].bg = '5A0015')
            : (this.subTravel[i].bg = 'a20025');
          if (this.subTravel[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.travelBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subTravel.find((x) => x.bg === '5A0015')) {
              this.travelBg = '#a20025';
            }
          }
        }
      }
    }
    if (category == 'videogame') {
      for (let i = 0; i < this.subVideogame.length; i++) {
        if (e.id == this.subVideogame[i].name) {
          this.subVideogame[i].bg == 'a20025'
            ? (this.subVideogame[i].bg = '5A0015')
            : (this.subVideogame[i].bg = 'a20025');
          if (this.subVideogame[i].bg == '5A0015') {
            this.newTags.push(e.id);
            this.videogameBg = '#5A0015';
          } else {
            this.newTags = this.newTags.filter((tag) => tag !== e.id);
            if (!this.subVideogame.find((x) => x.bg === '5A0015')) {
              this.videogameBg = '#a20025';
            }
          }
        }
      }
    }
  }

  updateGifts() {
    this.tags = this.newTags;
    My3rdPartLib.doWithCallback((result) => this.chooseGifts(result));
    this.newTags = [];

    this.bookBg = '#ff416c';
    this.cABg = '#ff416c';
    this.eDSBg = '#ff416c';
    this.fPFBg = '#ff416c';
    this.hBBg = '#ff416c';
    this.hGBg = '#ff416c';
    this.gPCBg = '#ff416c';
    this.musicBg = '#ff416c';
    this.petBg = '#ff416c';
    this.sportsBg = '#ff416c';
    this.technologyBg = '#ff416c';
    this.tPBBg = '#ff416c';
    this.travelBg = '#ff416c';
    this.videogameBg = '#ff416c';

    for (let i = 0; i < this.subBook.length; i++) {
      this.subBook[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subCA.length; i++) {
      this.subCA[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subEDS.length; i++) {
      this.subEDS[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subFPF.length; i++) {
      this.subFPF[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subHB.length; i++) {
      this.subHB[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subHG.length; i++) {
      this.subHG[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subGPC.length; i++) {
      this.subGPC[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subMusic.length; i++) {
      this.subMusic[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subPet.length; i++) {
      this.subPet[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subSports.length; i++) {
      this.subSports[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subTechnology.length; i++) {
      this.subTechnology[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subTPB.length; i++) {
      this.subTPB[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subTravel.length; i++) {
      this.subTravel[i].bg = 'a20025';
    }
    for (let i = 0; i < this.subVideogame.length; i++) {
      this.subVideogame[i].bg = 'a20025';
    }

    this.openDiv(null);
  }
}
