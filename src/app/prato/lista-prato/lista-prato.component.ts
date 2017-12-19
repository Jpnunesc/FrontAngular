import { Component, OnInit, Input } from '@angular/core';
import { PratoService } from '../../services/prato.service';
import { Http } from '@angular/http';
import { PratoViewModel } from '../../viewModel/prato-view.model';




@Component({
  selector: 'app-lista-prato',
  templateUrl: './lista-prato.component.html',
  styleUrls: ['./lista-prato.component.css'],
  providers: [PratoService]
})
export class ListaPratoComponent implements OnInit {

  listPratos = new Array<PratoViewModel>();
  mensagem: string = "";
  msg: string = "";


  constructor(private PratoService: PratoService, private http: Http) {

  }

  listarPratos() {
    this.PratoService.consultarPratos()
      .subscribe(res => {
        console.log(res);
        this.listPratos = res;
      })
  }
  
  atualizar(prato: PratoViewModel) {
    this.PratoService.atualizarPrato(prato)
      .subscribe(res => {
        console.log(res);
        this.listPratos = res;
      }, erro => console.log(erro));
  }

  atualizarLista() {

  }

  excluir(prato: PratoViewModel = new PratoViewModel()) {
    this.PratoService.excluirPrato(prato.PratoID)
      .subscribe(() => {
        let indiceDoPrato = this.listPratos.indexOf(prato);

        if (indiceDoPrato > -1) {
          this.msg = 'Excluido com sucesso!';
          console.log('Prato removido');
          this.listPratos.slice(indiceDoPrato, 1);
          this.listarPratos();
        }
      }, erro => {
        console.log(erro);
        this.mensagem = 'Não foi possível excluir!';
      });
  }



  ngOnInit() {
    this.listarPratos();
  }


}
