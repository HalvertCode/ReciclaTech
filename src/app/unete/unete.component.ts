import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UneteService} from "../services/unete/unete.service";
import {NgIf} from "@angular/common";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-unete',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './unete.component.html',
  styleUrl: './unete.component.css'
})
export class UneteComponent {

  uneteForm: FormGroup;

  constructor(
    private formularioService: UneteService,
    private fb: FormBuilder
  ) {
    // Asegúrate de que los nombres de los controles coincidan con los nombres del backend
    this.uneteForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.uneteForm.valid) {
      // Si el formulario es válido, enviar los datos
      this.formularioService.enviarFormulario(this.uneteForm.value).subscribe(
        response => {
          Swal.fire({
            title: '¡Gracias por unirte!',
            text: 'Informarte sera un buen paso!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

        },
        error => {
          console.error('Error al enviar el formulario', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
