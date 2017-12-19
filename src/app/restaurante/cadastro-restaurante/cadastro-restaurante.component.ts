import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { Http } from '@angular/http';
import { RestauranteViewModel } from '../../viewModel/restaurante-view.model';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.css'],
  providers: [RestauranteService]
})
export class CadastroRestauranteComponent implements OnInit {

  
  restaurante = new RestauranteViewModel();
  validateForm: boolean;
  mensagem: string = "";
  msg: string = "";

  
  
  constructor(private restauranteService: RestauranteService, http: Http) {
    http = http;
    this.validateForm = false;
  }


  cadastrar() {    
    if (this.restaurante.NomeRestaurante && this.restaurante !== undefined) {
      this.validateForm = false;
      this.restauranteService.cadastrarRestaurante(this.restaurante).subscribe(result => {
       this.validateForm = true;
       this.restaurante.NomeRestaurante = "";
       this.msg = "Restaurante cadastrado com sucesso!";       
      },
      
        error => {
          var data = JSON.parse(error._body);
        });
    } else { 
      this.validateForm = true;
      this.mensagem = "Informe o nome do restaurante.";
    }
  }


  ngOnInit() {
  }

}
