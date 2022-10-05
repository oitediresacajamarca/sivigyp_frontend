import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-idioma',
  templateUrl: './selector-idioma.component.html',
  styleUrls: ['./selector-idioma.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectorIdiomaComponent),
    multi: true
  }]
})
export class SelectorIdiomaComponent implements OnInit,ControlValueAccessor {
  lengua=''

  constructor() { }
  onChange = (data: any) => { }
  onTouched = (data: any) => { }
  estado = false;
  writeValue(obj: any): void {
    this.lengua = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.estado=isDisabled
  }


  idiomas= ['CASTELLANO',
    'AIMARA',
    'AWAJÚN',
  'AMAHUACA',
  'ARABELA',
  'ASHANINKA',
  'ASHENINKA',

  'BORA',
  'CASHINAHUA',
  'CHAMIKURO',
  'ESE EJA',
  'HARAKBUT',
  'IKITU',
  'IÑAPARI',
  'ISKONAWA',
  'JAQARU',
  'KAKATAIBO',
  'KAKINTE',
  'KANDOZI-CHAPRA',
  'KAPANAWA',
  'KAWKI',
  'KUKAMA KUKAMIRIA',
  'MADIJA',
  'MAIJƗKI',
  'MATSÉS',
  'MATSIGENKA',
  'MATSIGENKA',
  'MONTETOKUNIRIRA',
  'MUNICHI',
  'MURUI-MUINANƗ',
  'NAHUA',
  'NOMATSIGENGA',
  'OCAINA',
  'OMAGUA',
  'QUECHUA',
  'RESÍGARO',
  'SECOYA',
  'SHARANAHUA',
  'SHAWI',
  'SHIPIBO-KONIBO',
  'SHIWILU',
  'TAUSHIRO',
  'TICUNA',
  'URARINA',
  'WAMPIS',
  'YAGUA',
  'YAMINAHUA',
  'YANESHA',
  'YINE',

  ]

  selecciono_idioma(e:any){
    this.onChange(e)

  }


  ngOnInit(): void {
  }

}
