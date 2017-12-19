import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PratoService {

    constructor(private http: Http) { }

    private extractData(res: Response) {
        return res.text() ? res.json() : {};
    }

    consultarPratos() {
        return this.http
            .get(environment.url_api + "/api/Prato").
            map(res => res.json());
    }

    cadastrarPrato(data: any) {

        let header = this.pegarHeader();

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('NomePrato', data.NomePrato);
        urlSearchParams.append('PrecoPrato', data.PrecoPrato);
        urlSearchParams.append('RestauranteID', data.RestauranteID);
        let body = urlSearchParams.toString();

        let submit = this.http.post(environment.url_api + '/api/prato', body, { headers: header });
        return submit;


    }

    atualizarPrato(data: any) {

        let header = this.pegarHeader();
        let options = new RequestOptions({ headers: header });
        let body = JSON.stringify(data);
        return this.http.put(environment.url_api + '/api/prato', body, options).
            map(res => res.json());
    }

    excluirPrato(id: number) {
        return this.http
            .delete(environment.url_api + '/api/Prato/' + id).map(res => res.json());

    }


    editarPrato(data: any) {

        debugger
        let header = this.pegarHeader();
        let options = new RequestOptions({ headers: header });

        let urlSearchParams = new URLSearchParams();
        console.log(data.NomePrato);
        urlSearchParams.append('PratoID', data.PratoID);
        urlSearchParams.append('NomePrato', data.NomePrato);
        urlSearchParams.append('PrecoPrato', data.PrecoPrato);
        urlSearchParams.append('RestauranteID', data.RestauranteID);

        let body = urlSearchParams.toString();
        console.log(data);

        return this.http.put(environment.url_api + '/api/Prato/' + data.PratoID, body, options)
            .map(res => res.json());
    }

    getPratoId(id: number) {
        return this.http.get(environment.url_api + '/api/Prato/' + id)
            .map((res: Response) => res.json());
    }

    pegarHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }

    pegarHeaderJson() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}