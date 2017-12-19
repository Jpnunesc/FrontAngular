import { Component, OnInit } from '@angular/core';
import { RestauranteViewModel } from '../../viewModel/restaurante-view.model';
import { RestauranteService } from '../../services/restaurante.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-resteurante',
  templateUrl: './editar-resteurante.component.html',
  styleUrls: ['./editar-resteurante.component.css'],
  providers: [RestauranteService]
  
})
export class EditarResteuranteComponent implements OnInit {

  mensagem: string = '';
  restaurante = new RestauranteViewModel();
  id: number;
  validateForm: boolean;
 

  constructor( private restauranteService: RestauranteService, private http: Http, private rota: ActivatedRoute) {
     this.validateForm = false;

     this.id = rota.snapshot.params['id'];
     this.restauranteService.getRestauranteId(this.id)
     .subscribe(res => {
      this.restaurante = res;
      console.log(res);
    }, erro => console.log(erro));
  }

  editar() {
    this.restauranteService.editarRestaurante(this.restaurante)
      .subscribe(() => {
        console.log(this.restaurante);
        this.validateForm = true;
        this.mensagem = 'Dados atualizados!';
      });
  }

  

  ngOnInit() {
  }

}
