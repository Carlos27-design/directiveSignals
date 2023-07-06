import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private HtmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null | undefined;

  @Input()
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  public set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private ele: ElementRef) {
    // console.log('Constructor de la directiva');

    this.HtmlElement = ele;
  }
  ngOnInit(): void {
    console.log('Directiva - NgOnInit');
  }

  public setStyle(): void {
    if (!this.HtmlElement) return;

    this.HtmlElement!.nativeElement.style.color = this._color;
  }

  public setErrorMessage(): void {
    if (!this.HtmlElement) return;
    if (!this._errors) {
      this.color = 'green';
      this.HtmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.HtmlElement.nativeElement.innerText = 'Este Campo es requerido';
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];

      if (current < min) {
        this.HtmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres`;
        return;
      }
    }

    if (errors.includes('email')) {
      this.HtmlElement.nativeElement.innerText =
        'Debe ser formato de correo electronico';
    }
  }
}
