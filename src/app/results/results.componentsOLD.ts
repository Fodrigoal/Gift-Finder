import { Component, OnInit, HostListener } from '@angular/core';
import { allGifts } from '../gifts';
import { AnswersService } from '../answers.service';
import { faAngleRight, faPlusCircle, faMinusCircle, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

const My3rdPartLib = {
    doWithCallback: function (callback) {
        this.callback = callback;
        this.callback();
    }
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
    styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    bookBg = 'red';
    cABg = 'red';
    eDSBg = 'red';
    hBBg = 'red';
    hGBg = 'red';
    gPCBg = 'red';
    petBg = 'red';
    sportsBg = 'red';
    technologyBg = 'red';
    tPBBg = 'red';
    videogameBg = 'red';
    isShow;
    answers;
    gifts;
    allTags = ['Book, Comic Books & Manga', 'Clothing & Accessories', 'Eat, Drink & Smoke', 'Health & Beauty', 'Home & Garden', 'Geeky and Pop Culture', 'Pet Supplies', 'Sports', 'Technology', 'Toys, Puzzles & Boardgames', 'Videogame']
    tags;
    newTags = [];
    angleRight = faAngleRight;
    angleLeft = faAngleLeft;
    add = faPlusCircle;
    remove = faMinusCircle;
    handset: boolean;
    list = [];
    subBook = [{ name: 'Art', bg: 'blue' }, { name: 'Biography', bg: 'blue' }, { name: 'Business', bg: 'blue' }, { name: 'Classic', bg: 'blue' }, { name: 'Comedy', bg: 'blue' }, { name: 'Comics', bg: 'blue' }, { name: 'Economics', bg: 'blue' }, { name: 'Fantasy', bg: 'blue' }, { name: 'Fiction', bg: 'blue' }, { name: 'LGBTQ', bg: 'blue' }, { name: 'History', bg: 'blue' }, { name: 'Horror', bg: 'blue' }, { name: 'Humor', bg: 'blue' }, { name: 'Manga', bg: 'blue' }, { name: 'Mistery', bg: 'blue' }, { name: 'Philosophy', bg: 'blue' }, { name: 'Poetry', bg: 'blue' }, { name: 'Political', bg: 'blue' }, { name: 'Religion', bg: 'blue' }, { name: 'Romance', bg: 'blue' }, { name: 'Science', bg: 'blue' }, { name: 'Science Fiction', bg: 'blue' }, { name: 'Sports', bg: 'blue' }, { name: 'Self-Improvement', bg: 'blue' },];
    subCA = [{ name: 'Active Wear', bg: 'blue' }, { name: 'Bottom', bg: 'blue' }, { name: 'Footwear', bg: 'blue' }, { name: 'Gloves', bg: 'blue' }, { name: 'Hats', bg: 'blue' }, { name: 'Jewelry', bg: 'blue' }, { name: 'Outer Wear', bg: 'blue' }, { name: 'Pants', bg: 'blue' }, { name: 'Sleep Wear', bg: 'blue' }, { name: 'Social Wear', bg: 'blue' }, { name: 'Sport Wear', bg: 'blue' }, { name: 'Sunglasses', bg: 'blue' }, { name: 'Swimwear', bg: 'blue' }, { name: 'Top', bg: 'blue' }, { name: 'Travel', bg: 'blue' }, { name: 'Underwear', bg: 'blue' }, { name: 'Wallet', bg: 'blue' }, { name: 'Watch', bg: 'blue' }];
    subEDS = [{ name: 'Alcohol', bg: 'blue' }, { name: 'Cigars', bg: 'blue' }, { name: 'Weed', bg: 'blue' }];
    subHB = [{ name: 'Bath & Body', bg: 'blue' }, { name: 'Beard', bg: 'blue' }, { name: 'Fragance', bg: 'blue' }, { name: 'Hair', bg: 'blue' }, { name: 'Makeup', bg: 'blue' }, { name: 'Natural & Alternative Remedies', bg: 'blue' }, { name: 'Skin & Nail', bg: 'blue' }];
    subHG = [{ name: 'Inside', bg: 'blue' }, { name: 'Outdoor', bg: 'blue' }];
    subGPC = [{ name: 'Anime', bg: 'blue' }, { name: 'Batman', bg: 'blue' }, { name: 'Captain America', bg: 'blue' }, { name: 'Captain Marvel', bg: 'blue' }, { name: 'Cartoons', bg: 'blue' }, { name: 'Cosplay', bg: 'blue' }, { name: 'DC Comics', bg: 'blue' }, { name: 'Disney', bg: 'blue' }, { name: 'Dragon Ball Z', bg: 'blue' }, { name: 'Friends', bg: 'blue' }, { name: 'Harry Potter', bg: 'blue' }, { name: 'Horror', bg: 'blue' }, { name: 'Hulk', bg: 'blue' }, { name: 'Iron Man', bg: 'blue' }, { name: 'Marvel', bg: 'blue' }, { name: 'Naruto', bg: 'blue' }, { name: 'One Piece', bg: 'blue' }, { name: 'Pokemon', bg: 'blue' }, { name: 'Rick and Morty', bg: 'blue' }, { name: 'Spongebob Squarepants', bg: 'blue' }, { name: 'Star Wars', bg: 'blue' }, { name: 'Superheroes', bg: 'blue' }, { name: 'Superman', bg: 'blue' }, { name: 'Spider-Man', bg: 'blue' }, { name: 'The Office', bg: 'blue' }, { name: 'Thor', bg: 'blue' }, { name: 'Wonder Woman', bg: 'blue' }];
    subPet = [{ name: 'Bird', bg: 'blue' }, { name: 'Cat', bg: 'blue' }, { name: 'Dog', bg: 'blue' }, { name: 'Fish', bg: 'blue' }, { name: 'Reptile', bg: 'blue' }];
    subSports = [{ name: 'Baseball', bg: 'blue' }, { name: 'Basketball', bg: 'blue' }, { name: 'Boxing, Martial Arts & MMA', bg: 'blue' }, { name: 'Curling', bg: 'blue' }, { name: 'Cricket', bg: 'blue' }, { name: 'Fishing', bg: 'blue' }, { name: 'Golf', bg: 'blue' }, { name: 'Hunting', bg: 'blue' }, { name: 'Ice Hockey', bg: 'blue' }, { name: 'Lacrosse', bg: 'blue' }, { name: 'Rugby', bg: 'blue' }, { name: 'Running', bg: 'blue' }, { name: 'Soccer', bg: 'blue' }, { name: 'Tennis', bg: 'blue' }, { name: 'Water Sports', bg: 'blue' }, { name: 'Winter Sports', bg: 'blue' }, { name: 'Yoga', bg: 'blue' }];
    subTechnology = [{ name: 'Audio', bg: 'blue' }, { name: 'Computer', bg: 'blue' }, { name: 'Cooking', bg: 'blue' }, { name: 'Home', bg: 'blue' }, { name: 'Gaming', bg: 'blue' }, { name: 'Sports', bg: 'blue' }, { name: 'Video', bg: 'blue' }, { name: 'Wearable', bg: 'blue' }];
    subTPB = [{ name: 'Boardgames', bg: 'blue' }, { name: 'Collectibles', bg: 'blue' }, { name: 'Magic: The Gathering', bg: 'blue' }, { name: 'Lego', bg: 'blue' }, { name: 'Pokemon Trading Card', bg: 'blue' }, { name: 'Puzzles', bg: 'blue' }, { name: 'RPG', bg: 'blue' }, { name: 'Toys', bg: 'blue' }, { name: 'Yu-Gi-Oh! Trading Cards', bg: 'blue' }];
    subVideogame = [{ name: 'Classic & Rarities', bg: 'blue' }, { name: 'Computer', bg: 'blue' }, { name: 'Nintendo', bg: 'blue' }, { name: 'PlayStation', bg: 'blue' }, { name: 'Xbox', bg: 'blue' }];

    constructor(
        private answersService: AnswersService,
    ) {
    }

    ngOnInit() {
        if (window.innerWidth < 1000) this.handset = true; else this.handset = false;
        this.answers = this.answersService.getAnswers();
        this.tags = Object.keys(this.answers[0]).filter(k => this.answers[0][k]).splice(2);
        My3rdPartLib.doWithCallback(result => this.chooseGifts(this.gifts));

        var $range = $(".js-range-slider"),
            instance,
            min = 10,
            max = 500;

        $range.ionRangeSlider({
            skin: "flat",
            type: "double",
            prefix: "C$",
            max_postfix: "+",
            min: min,
            max: max,
            from: this.answers[1],
            to: this.answers[2],
            onStart: updateInputs,
            onChange: updateInputs,
        });
        instance = $range.data("ionRangeSlider");

        function updateInputs(data, from, to) {
            from = from;
            if (data.to != max) {
                to = to;
            }
            else {
                to = to + "+";
            }
            AnswersService.priceFrom = data.from;
            AnswersService.priceTo = data.to;
        }
    }



    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (window.innerWidth < 1000) this.handset = true; else this.handset = false;
    }

    @HostListener('window:popstate', ['$event'])
    onPopState(event) {
        window.location.reload();
    }

    addToList(gift) {
        if (!this.list.includes(gift)) {
            this.list.push(gift);
        }
        else {
            alert("gift is there already you dumb!")
        }
    }

    chooseGifts(result) {
        this.gifts = allGifts.filter(element => element.price >= AnswersService.priceFrom
            && ((AnswersService.priceTo >= this.answers[3]) ? element.price >= AnswersService.priceFrom : element.price <= AnswersService.priceTo)
            && element.age.includes(this.answers[0].age)
            && element.gender.includes(this.answers[0].gender)
            && element.tags.some(r => this.tags.includes(r)));
        this.shuffle(this.gifts);
        this.organizeGifts(this.gifts);
    }

    openDiv(div) {

        if (this.isShow == div) {
            if (this.isShow == 'book') {
                if (this.subBook.find(o => o.bg == 'yellow')) {
                    this.bookBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.bookBg = "red";
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'cA') {
                if (this.subCA.find(o => o.bg == 'yellow')) {
                    this.cABg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.cABg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'eDS') {
                if (this.subEDS.find(o => o.bg == 'yellow')) {
                    this.eDSBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.eDSBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'hB') {
                if (this.subHB.find(o => o.bg == 'yellow')) {
                    this.hBBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.hBBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'hG') {
                if (this.subHG.find(o => o.bg == 'yellow')) {
                    this.hGBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.hGBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'gPC') {
                if (this.subGPC.find(o => o.bg == 'yellow')) {
                    this.gPCBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.gPCBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'pet') {
                if (this.subPet.find(o => o.bg == 'yellow')) {
                    this.petBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.petBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'sports') {
                if (this.subSports.find(o => o.bg == 'yellow')) {
                    this.sportsBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.sportsBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'technology') {
                if (this.subTechnology.find(o => o.bg == 'yellow')) {
                    this.technologyBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.technologyBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'tPB') {
                if (this.subTPB.find(o => o.bg == 'yellow')) {
                    this.tPBBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.tPBBg = "red"
                    this.isShow = null;
                    return;
                }
            }
            if (this.isShow == 'videogame') {
                if (this.subVideogame.find(o => o.bg == 'yellow')) {
                    this.videogameBg = "green";
                    this.isShow = null;
                    return;
                }
                else {
                    this.videogameBg = "red"
                    this.isShow = null;
                    return;
                }
            }
        }
        else {
            this.isShow = div;
            if (this.subBook.find(o => o.bg == 'yellow')) {
                this.bookBg = "green";
                if (!this.newTags.includes('book')) {
                    this.newTags.push('book');
                }
            } else {
                this.bookBg = "red";
                this.newTags = this.newTags.filter(tag => tag !== 'book');
            }
            if (this.subCA.find(o => o.bg == 'yellow')) {
                this.cABg = "green";
            } else {
                this.cABg = "red";
            }
            if (this.subEDS.find(o => o.bg == 'yellow')) {
                this.eDSBg = "green";
            } else {
                this.eDSBg = "red";
            }
            if (this.subHB.find(o => o.bg == 'yellow')) {
                this.hBBg = "green";
            } else {
                this.hBBg = "red";
            }
            if (this.subHG.find(o => o.bg == 'yellow')) {
                this.hGBg = "green";
            } else {
                this.hGBg = "red";
            }
            if (this.subGPC.find(o => o.bg == 'yellow')) {
                this.gPCBg = "green";
            } else {
                this.gPCBg = "red";
            }
            if (this.subPet.find(o => o.bg == 'yellow')) {
                this.petBg = "green";
            } else {
                this.petBg = "red";
            }
            if (this.subSports.find(o => o.bg == 'yellow')) {
                this.sportsBg = "green";
            } else {
                this.sportsBg = "red";
            }
            if (this.subTechnology.find(o => o.bg == 'yellow')) {
                this.technologyBg = "green";
            } else {
                this.technologyBg = "red";
            }
            if (this.subTPB.find(o => o.bg == 'yellow')) {
                this.tPBBg = "green";
            } else {
                this.tPBBg = "red";
            }
            if (this.subVideogame.find(o => o.bg == 'yellow')) {
                this.videogameBg = "green";
            } else {
                this.videogameBg = "red";
            }
            if (this.isShow == 'book') {
                this.bookBg = "green";
                return;
            }
            if (this.isShow == 'cA') {
                this.cABg = "green";
                return;
            }
            if (this.isShow == 'eDS') {
                this.eDSBg = "green";
                return;
            }
            if (this.isShow == 'hB') {
                this.hBBg = "green";
                return;
            }
            if (this.isShow == 'hG') {
                this.hGBg = "green";
                return;
            }
            if (this.isShow == 'gPC') {
                this.gPCBg = "green";
                return;
            }
            if (this.isShow == 'pet') {
                this.petBg = "green";
                return;
            }
            if (this.isShow == 'sports') {
                this.sportsBg = "green";
                return;
            }
            if (this.isShow == 'technology') {
                this.technologyBg = "green";
                return;
            }
            if (this.isShow == 'tPB') {
                this.tPBBg = "green";
                return;
            }
            if (this.isShow == 'videogame') {
                this.videogameBg = "green";
                return;
            }
        }
    }


    organizeGifts(giftsArray) {
        var organizedByTags = [];

        for (let i = 0; i < giftsArray.length; i++) {
            //compare tags array and gift.tags array to see the number of tags on the gift that were selected by the user
            const res = this.tags.reduce((a, b) => {
                const l = giftsArray[i].tags.filter(e => e === b).length;
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
                    if (giftsArray[i].tagsOccurrence >= organizedByTags[j].tagsOccurrence) {
                        organizedByTags.splice(j, 0, giftsArray[i]);
                        break;
                    }
                    if ((j + 1) == (organizedByTags.length)) {
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
                    this.subBook[i].bg == 'blue' ? this.subBook[i].bg = "yellow" : this.subBook[i].bg = "blue";
                    if (this.subBook[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('book')) {
                            this.newTags.push('book');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'book');
                        for (var t = 0; t < this.subBook.length; t++) {
                            if (this.newTags.includes(this.subBook[t].name)) {
                                if (!this.newTags.includes('book')) {
                                    this.newTags.push('book');
                                }
                            }
                        }
                    }
                }
            }
            console.log(this.newTags);
        }
        if (category == 'cA') {
            for (let i = 0; i < this.subCA.length; i++) {
                if (e.id == this.subCA[i].name) {
                    this.subCA[i].bg == 'blue' ? this.subCA[i].bg = "yellow" : this.subCA[i].bg = "blue";
                    if (this.subCA[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('cA')) {
                            this.newTags.push('cA');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'cA');
                        for (var t = 0; t < this.subCA.length; t++) {
                            if (this.newTags.includes(this.subCA[t].name)) {
                                if (!this.newTags.includes('cA')) {
                                    this.newTags.push('cA');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'eDS') {
            for (let i = 0; i < this.subEDS.length; i++) {
                if (e.id == this.subEDS[i].name) {
                    this.subEDS[i].bg == 'blue' ? this.subEDS[i].bg = "yellow" : this.subEDS[i].bg = "blue";
                    if (this.subEDS[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('eDS')) {
                            this.newTags.push('eDS');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'eDS');
                        for (var t = 0; t < this.subEDS.length; t++) {
                            if (this.newTags.includes(this.subEDS[t].name)) {
                                if (!this.newTags.includes('eDS')) {
                                    this.newTags.push('eDS');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'hB') {
            for (let i = 0; i < this.subHB.length; i++) {
                if (e.id == this.subHB[i].name) {
                    this.subHB[i].bg == 'blue' ? this.subHB[i].bg = "yellow" : this.subHB[i].bg = "blue";
                    if (this.subHB[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('hB')) {
                            this.newTags.push('hB');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'hB');
                        for (var t = 0; t < this.subHB.length; t++) {
                            if (this.newTags.includes(this.subHB[t].name)) {
                                if (!this.newTags.includes('hB')) {
                                    this.newTags.push('hB');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'hG') {
            for (let i = 0; i < this.subHG.length; i++) {
                if (e.id == this.subHG[i].name) {
                    this.subHG[i].bg == 'blue' ? this.subHG[i].bg = "yellow" : this.subHG[i].bg = "blue";
                    if (this.subHG[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('hG')) {
                            this.newTags.push('hG');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'hG');
                        for (var t = 0; t < this.subHG.length; t++) {
                            if (this.newTags.includes(this.subHG[t].name)) {
                                if (!this.newTags.includes('hG')) {
                                    this.newTags.push('hG');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'gPC') {
            for (let i = 0; i < this.subGPC.length; i++) {
                if (e.id == this.subGPC[i].name) {
                    this.subGPC[i].bg == 'blue' ? this.subGPC[i].bg = "yellow" : this.subGPC[i].bg = "blue";
                    if (this.subGPC[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('gPC')) {
                            this.newTags.push('gPC');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'gPC');
                        for (var t = 0; t < this.subGPC.length; t++) {
                            if (this.newTags.includes(this.subGPC[t].name)) {
                                if (!this.newTags.includes('gPC')) {
                                    this.newTags.push('gPC');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'pet') {
            for (let i = 0; i < this.subPet.length; i++) {
                if (e.id == this.subPet[i].name) {
                    this.subPet[i].bg == 'blue' ? this.subPet[i].bg = "yellow" : this.subPet[i].bg = "blue";
                    if (this.subPet[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('pet')) {
                            this.newTags.push('pet');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'pet');
                        for (var t = 0; t < this.subPet.length; t++) {
                            if (this.newTags.includes(this.subPet[t].name)) {
                                if (!this.newTags.includes('pet')) {
                                    this.newTags.push('pet');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'sports') {
            for (let i = 0; i < this.subSports.length; i++) {
                if (e.id == this.subSports[i].name) {
                    this.subSports[i].bg == 'blue' ? this.subSports[i].bg = "yellow" : this.subSports[i].bg = "blue";
                    if (this.subSports[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('sports')) {
                            this.newTags.push('sports');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'sports');
                        for (var t = 0; t < this.subSports.length; t++) {
                            if (this.newTags.includes(this.subSports[t].name)) {
                                if (!this.newTags.includes('sports')) {
                                    this.newTags.push('sports');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'technology') {
            for (let i = 0; i < this.subTechnology.length; i++) {
                if (e.id == this.subTechnology[i].name) {
                    this.subTechnology[i].bg == 'blue' ? this.subTechnology[i].bg = "yellow" : this.subTechnology[i].bg = "blue";
                    if (this.subTechnology[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('technology')) {
                            this.newTags.push('technology');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'technology');
                        for (var t = 0; t < this.subTechnology.length; t++) {
                            if (this.newTags.includes(this.subTechnology[t].name)) {
                                if (!this.newTags.includes('technology')) {
                                    this.newTags.push('technology');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'tPB') {
            for (let i = 0; i < this.subTPB.length; i++) {
                if (e.id == this.subTPB[i].name) {
                    this.subTPB[i].bg == 'blue' ? this.subTPB[i].bg = "yellow" : this.subTPB[i].bg = "blue";
                    if (this.subTPB[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('tPB')) {
                            this.newTags.push('tPB');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'tPB');
                        for (var t = 0; t < this.subTPB.length; t++) {
                            if (this.newTags.includes(this.subTPB[t].name)) {
                                if (!this.newTags.includes('tPB')) {
                                    this.newTags.push('tPB');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (category == 'videogame') {
            for (let i = 0; i < this.subVideogame.length; i++) {
                if (e.id == this.subVideogame[i].name) {
                    this.subVideogame[i].bg == 'blue' ? this.subVideogame[i].bg = "yellow" : this.subVideogame[i].bg = "blue";
                    if (this.subVideogame[i].bg == "yellow") {
                        this.newTags.push(e.id);
                        if (!this.newTags.includes('videogame')) {
                            this.newTags.push('videogame');
                        }
                    }
                    else {
                        this.newTags = this.newTags.filter(tag => tag !== e.id);
                        this.newTags = this.newTags.filter(tag => tag !== 'videogame');
                        for (var t = 0; t < this.subVideogame.length; t++) {
                            if (this.newTags.includes(this.subVideogame[t].name)) {
                                if (!this.newTags.includes('videogame')) {
                                    this.newTags.push('videogame');
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    updateGifts() {
        this.tags = this.newTags;
        My3rdPartLib.doWithCallback(result => this.chooseGifts(result));
        this.newTags = [];
        this.bookBg = 'red';
        this.cABg = 'red';
        this.eDSBg = 'red';
        this.hBBg = 'red';
        this.hGBg = 'red';
        this.gPCBg = 'red';
        this.petBg = 'red';
        this.sportsBg = 'red';
        this.technologyBg = 'red';
        this.tPBBg = 'red';
        this.videogameBg = 'red';

        for (let i = 0; i < this.subBook.length; i++) {
            this.subBook[i].bg = "blue";
        }
        for (let i = 0; i < this.subCA.length; i++) {
            this.subCA[i].bg = "blue";
        }
        for (let i = 0; i < this.subEDS.length; i++) {
            this.subEDS[i].bg = "blue";
        }
        for (let i = 0; i < this.subHB.length; i++) {
            this.subHB[i].bg = "blue";
        }
        for (let i = 0; i < this.subHG.length; i++) {
            this.subHG[i].bg = "blue";
        }
        for (let i = 0; i < this.subGPC.length; i++) {
            this.subGPC[i].bg = "blue";
        }
        for (let i = 0; i < this.subPet.length; i++) {
            this.subPet[i].bg = "blue";
        }
        for (let i = 0; i < this.subSports.length; i++) {
            this.subSports[i].bg = "blue";
        }
        for (let i = 0; i < this.subTechnology.length; i++) {
            this.subTechnology[i].bg = "blue";
        }
        for (let i = 0; i < this.subTPB.length; i++) {
            this.subTPB[i].bg = "blue";
        }
        for (let i = 0; i < this.subVideogame.length; i++) {
            this.subVideogame[i].bg = "blue";
        }

        this.openDiv(null);
    }

}


