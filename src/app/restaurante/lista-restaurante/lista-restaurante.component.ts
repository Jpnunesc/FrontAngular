import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { Http } from '@angular/http';
import { RestauranteViewModel } from '../../viewModel/restaurante-view.model';

@Component({
  selector: 'app-lista-restaurante',
  templateUrl: './lista-restaurante.component.html',
  styleUrls: ['./lista-restaurante.component.css'],
  providers: [RestauranteService]
})
export class ListaRestauranteComponent implements OnInit {

  listRestaurante: Array<any>;
  mensagem: string = "";
  msg: string = "";
  
  constructor( private restauranteService: RestauranteService, http: Http) {
  }

  listarRestaurante(){
    this.restauranteService.consultarRestaurante()
    .subscribe(res =>{
      console.log(res);
      this.listRestaurante = res;
    })
  }
  atualizar(restaurante: RestauranteViewModel){
    this.restauranteService.atualizarRestaurante(restaurante)
        .subscribe(res =>{
      console.log(res);
      this.listRestaurante = res;
    }, erro => console.log(erro));
   }

 
  excluir(restaurante: RestauranteViewModel = new RestauranteViewModel()) {
        this.restauranteService.excluirRestaurante(restaurante.RestauranteID)
          .subscribe(() => {
            let indiceDoPrato = this.listRestaurante.indexOf(restaurante);
    
            if (indiceDoPrato > -1) {
                this.msg = 'Excluido com sucesso!';
                console.log('Prato removido');
                this.listRestaurante.slice(indiceDoPrato, 1);
                this.listarRestaurante();
            }
        }, erro => {
             console.log(erro);
             this.mensagem = 'Não foi possível excluir!';
        });
     }


  ngOnInit() {
    this.listarRestaurante();
  }

  
}
