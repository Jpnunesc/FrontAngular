import { Component, OnInit } from '@angular/core';
import { PratoService } from '../../services/prato.service';
import { Http } from '@angular/http';
import { PratoViewModel } from '../../viewModel/prato-view.model';
import { RestauranteViewModel } from '../../viewModel/restaurante-view.model';
import { RestauranteService } from '../../services/restaurante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-editar-prato',
  templateUrl: './editar-prato.component.html',
  styleUrls: ['./editar-prato.component.css'],
  providers: [PratoService, RestauranteService]
})
export class EditarPratoComponent implements OnInit {

  mensagem: string = '';
  restaurantes = new Array<RestauranteViewModel>();
  prato = new PratoViewModel();
  id: number;
  validateForm: boolean;
  
  constructor(private pratoService: PratoService, private restauranteService: RestauranteService, private http: Http, private rota: ActivatedRoute) {
    this.validateForm = false;
     this.id = rota.snapshot.params['id'];
     this.pratoService.getPratoId(this.id)
     .subscribe(res => {
      this.prato = res;
      console.log(res);
    },
      erro => console.log(erro));

    this.restaurantes = [];
    this.restauranteService.consultarRestaurante()
    .subscribe(result => {
      this.restaurantes = result;
    }, erro => console.log(erro));
  }


  editar() {
    this.pratoService.editarPrato(this.prato)
      .subscribe(() => {
        console.log(this.prato);
        this.validateForm = true;
        this.mensagem = 'Dados atualizados!';
      });
  }


  ngOnInit() {
  }

}
