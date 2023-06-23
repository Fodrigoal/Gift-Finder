import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';
import { allGifts } from '../gifts';


declare var $: any;


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
})
export class FinderComponent implements OnInit {
  gifts;
  password: string = '';
  c_password: string = '';
  toggle1: boolean = false;
  toggle2: boolean = false;
  checkoutForm;
  status: boolean = false;
  bgBook = 'a20025';
  iconBook = 'plus';
  bgCA = 'a20025';
  iconCA = 'plus';
  bgEDS = 'a20025';
  iconEDS = 'plus';
  bgFPF = 'a20025';
  iconFPF = 'plus';
  bgHB = 'a20025';
  iconHB = 'plus';
  bgHG = 'a20025';
  iconHG = 'plus';
  bgGPC = 'a20025';
  iconGPC = 'plus';
  bgMusic = 'a20025';
  iconMusic = 'plus';
  bgPet = 'a20025';
  iconPet = 'plus';
  bgSports = 'a20025';
  iconSports = 'plus';
  bgTech = 'a20025';
  iconTech = 'plus';
  bgTPB = 'a20025';
  iconTPB = 'plus';
  bgTravel = 'a20025';
  iconTravel = 'plus';
  bgVideogame = 'a20025';
  iconVideogame = 'plus';

  constructor(
    private answersService: AnswersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      gender: [null, Validators.required],
      age: [null, Validators.required],
      book: false,
      cA: false,
      eDS: false,
      fPF: false,
      hB: false,
      hG: false,
      gPC: false,
      music: false,
      pet: false,
      sports: false,
      technology: false,
      tPB: false,
      travel: false,
      videogame: false,
    });
  }

  ngOnInit(): void {
    var $range = $('.js-range-slider'),
      $inputFrom = $('.js-input-from'),
      $inputTo = $('.js-input-to'),
      instance,
      min = 1,
      max = 500,
      from,
      to;

    $range.ionRangeSlider({
      skin: 'flat',
      type: 'double',
      prefix: 'C$',
      max_postfix: '+',
      min: min,
      max: max,
      from: min,
      to: max,
      onStart: updateInputs,
      onChange: updateInputs,
    });
    instance = $range.data('ionRangeSlider');

    function updateInputs(data) {
      from = data.from;
      if (data.to != max) {
        to = data.to;
      } else {
        to = data.to + '+';
      }

      AnswersService.priceFrom = data.from;
      AnswersService.priceTo = data.to;
      AnswersService.maxPrice = data.max;

      $inputFrom.prop('value', from);
      $inputTo.prop('value', to);
    }

    $inputFrom.on('input', function () {
      var val = $(this).prop('value');

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val,
      });
    });

    $inputTo.on('input', function () {
      var val = $(this).prop('value');

      // validate
      if (val < from) {
        val = from;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        to: val,
      });
    });
  }

  checkData(customerData) {
    if (customerData.gender == null && customerData.age == null) {
      document.getElementById('popup1').style.visibility = 'visible';
      return;
    }
    if (customerData.gender == null) {
      document.getElementById('popup2').style.visibility = 'visible';
      return;
    }
    if (customerData.age == null) {
      document.getElementById('popup3').style.visibility = 'visible';
      return;
    } else {
      return true;
    }
  }

  clickEvent() {
    this.status = !this.status;
  }

  closeAlert() {
    document.getElementById('popup1').style.visibility = 'hidden';
    document.getElementById('popup2').style.visibility = 'hidden';
    document.getElementById('popup3').style.visibility = 'hidden';
  }

  goResults(customerData) {
    if (
      this.checkData(customerData) &&
      this.checkoutForm.dirty &&
      this.checkoutForm.valid
    ) {
      this.answersService.addAnswers(customerData);
      this.checkoutForm.reset();
      this.router.navigate(['/results']);
    }
  }

  firstStepClick(customerData) {
    if (
      this.checkData(customerData) &&
      this.checkoutForm.dirty &&
      this.checkoutForm.valid
    ) {
      this.clickEvent();
    }
  }

  public toggleIcon(e: HTMLElement) {
    switch (e.id) {
      case 'book':
        if (this.iconBook === 'plus') {
          this.iconBook = 'check';
          this.bgBook = 'ed5565';
        } else {
          this.iconBook = 'plus';
          this.bgBook = 'a20025';
        }
        break;
      case 'cA':
        if (this.iconCA === 'plus') {
          this.iconCA = 'check';
          this.bgCA = 'ed5565';
        } else {
          this.iconCA = 'plus';
          this.bgCA = 'a20025';
        }
        break;
      case 'eDS':
        if (this.iconEDS === 'plus') {
          this.iconEDS = 'check';
          this.bgEDS = 'ed5565';
        } else {
          this.iconEDS = 'plus';
          this.bgEDS = 'a20025';
        }
        break;
      case 'fPF':
        if (this.iconFPF === 'plus') {
          this.iconFPF = 'check';
          this.bgFPF = 'ed5565';
        } else {
          this.iconFPF = 'plus';
          this.bgFPF = 'a20025';
        }
        break;
      case 'hB':
        if (this.iconHB === 'plus') {
          this.iconHB = 'check';
          this.bgHB = 'ed5565';
        } else {
          this.iconHB = 'plus';
          this.bgHB = 'a20025';
        }
        break;
      case 'hG':
        if (this.iconHG === 'plus') {
          this.iconHG = 'check';
          this.bgHG = 'ed5565';
        } else {
          this.iconHG = 'plus';
          this.bgHG = 'a20025';
        }
        break;
      case 'gPC':
        if (this.iconGPC === 'plus') {
          this.iconGPC = 'check';
          this.bgGPC = 'ed5565';
        } else {
          this.iconGPC = 'plus';
          this.bgGPC = 'a20025';
        }
        break;
      case 'music':
        if (this.iconMusic === 'plus') {
          this.iconMusic = 'check';
          this.bgMusic = 'ed5565';
        } else {
          this.iconMusic = 'plus';
          this.bgMusic = 'a20025';
        }
        break;
      case 'pet':
        if (this.iconPet === 'plus') {
          this.iconPet = 'check';
          this.bgPet = 'ed5565';
        } else {
          this.iconPet = 'plus';
          this.bgPet = 'a20025';
        }
        break;
      case 'sports':
        if (this.iconSports === 'plus') {
          this.iconSports = 'check';
          this.bgSports = 'ed5565';
        } else {
          this.iconSports = 'plus';
          this.bgSports = 'a20025';
        }
        break;
      case 'technology':
        if (this.iconTech === 'plus') {
          this.iconTech = 'check';
          this.bgTech = 'ed5565';
        } else {
          this.iconTech = 'plus';
          this.bgTech = 'a20025';
        }
        break;
      case 'tPB':
        if (this.iconTPB === 'plus') {
          this.iconTPB = 'check';
          this.bgTPB = 'ed5565';
        } else {
          this.iconTPB = 'plus';
          this.bgTPB = 'a20025';
        }
        break;
      case 'travel':
        if (this.iconTravel === 'plus') {
          this.iconTravel = 'check';
          this.bgTravel = 'ed5565';
        } else {
          this.iconTravel = 'plus';
          this.bgTravel = 'a20025';
        }
        break;
      case 'videogame':
        if (this.iconVideogame === 'plus') {
          this.iconVideogame = 'check';
          this.bgVideogame = 'ed5565';
        } else {
          this.iconVideogame = 'plus';
          this.bgVideogame = 'a20025';
        }
    }
  }

  changeType(input_field_password, num) {
    if (input_field_password.type == 'password')
      input_field_password.type = 'text';
    else input_field_password.type = 'password';

    if (num == 1) this.toggle1 = !this.toggle1;
    else this.toggle2 = !this.toggle2;
  }
}
