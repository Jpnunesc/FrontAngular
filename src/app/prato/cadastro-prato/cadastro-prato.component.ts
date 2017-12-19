import { Component, OnInit } from '@angular/core';
import { PratoComponent } from '../prato.component';
import { PratoService } from '../../services/prato.service';
import { Http } from '@angular/http';
import { PratoViewModel } from '../../viewModel/prato-view.model';
import { RestauranteService } from '../../services/restaurante.service';
import { RestauranteViewModel } from '../../viewModel/restaurante-view.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prato',
  templateUrl: './cadastro-prato.component.html',
  styleUrls: ['./cadastro-prato.component.css'],
  providers: [PratoService, RestauranteService]
})
export class CadastroPratoComponent implements OnInit {

  restaurantes = new Array<RestauranteViewModel>();
  prato = new PratoViewModel();
  validateForm: boolean;
  mensagem: string = "";
  msg: string = "";
  
  constructor(private pratoService: PratoService, private restauranteService: RestauranteService, http: Http) {
    http = http
    this.restaurantes = [];
    this.restauranteService.consultarRestaurante().subscribe(result => {
      this.restaurantes = result;
      console.log(result);
      console.log(this.restaurantes);
    }, erro => console.log(erro));
  }


  cadastrar() {
    if (this.prato && this.prato !== undefined) {
      this.validateForm = false;
      this.pratoService.cadastrarPrato(this.prato)
      .subscribe(result => {
        this.validateForm = true;
        this.prato.NomePrato = "";
        this.prato.PrecoPrato = "";
        this.prato.RestauranteID = ""; 
        this.msg = "Prato cadastrado com sucesso!";
      },
        error => {
          var data = JSON.parse(error._body);
        });
    } else {
      this.validateForm = true;
      this.mensagem = "Informe o nome do Prato.";
    }
  }


  ngOnInit() {
  
  }

}
