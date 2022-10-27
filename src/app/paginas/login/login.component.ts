import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private auth_serv:AutenticacionService,private fb:FormBuilder) { }
  formGroup!:FormGroup

  ngOnInit(): void {
  this.formGroup=  this.fb.group({user:'',password:''})

  }


  Iniciar_Sesion(){
    this.auth_serv.login(this.formGroup.value.user,this.formGroup.value.password).subscribe(async respuesta=>{



      localStorage.setItem('LOGIN',JSON.stringify(respuesta))
      localStorage.setItem('TOKEN',JSON.stringify(respuesta.access_token))

    await  this.router.navigate(['sivigyp/principal/ninio']).then(()=>{ window.location.reload();})
    console.log(respuesta)
    })


  //  this.router.navigate(['/sivigyp/principal/inicio'])

  }
}
