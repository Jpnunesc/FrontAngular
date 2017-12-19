import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { RestauranteViewModel } from '../viewModel/restaurante-view.model';


@Injectable()
export class RestauranteService {

    constructor(private http: Http) { }

    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }
    consultarRestaurante() {
        debugger
        return this.http
            .get(environment.url_api + "/api/restaurante").
            map(res => res.json());
    }

    cadastrarRestaurante(data: any) {

        let header = this.pegarHeader();

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('NomeRestaurante', data.NomeRestaurante);
        let body = urlSearchParams.toString();

        let submit = this.http.post(environment.url_api + '/api/restaurante', body, { headers: header });
        return submit;

    }

    atualizarRestaurante(data: any) {

        let header = this.pegarHeader();
        let options = new RequestOptions({ headers: header });
        let body = JSON.stringify(data);
        return this.http.put(environment.url_api + 'api/Restaurante', body, options).
            map(res => res.json());
    }

    excluirRestaurante(id: number) {
        return this.http
            .delete(environment.url_api + '/api/Restaurante/' + id).map(res => res.json());

    }

    editarRestaurante(data: any) {

        debugger
        let header = this.pegarHeader();
        let options = new RequestOptions({ headers: header });

        let urlSearchParams = new URLSearchParams();
        console.log(data.NomeRestaurante);
        urlSearchParams.append('NomeRestaurante', data.NomeRestaurante);
        urlSearchParams.append('RestauranteID', data.RestauranteID);
        
        let body = urlSearchParams.toString();
        console.log(data);

        return this.http.put(environment.url_api + '/api/restaurante/' + data.RestauranteID , body, options)
        .map(res => res.json());
    }

    getRestauranteId(id: number) {
        return this.http.get(environment.url_api + '/api/restaurante/' + id)
            .map((res: Response) => res.json());
    }

    pegarHeaderJson() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    pegarHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }
}