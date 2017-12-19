import { Pipe, PipeTransform } from '@angular/core';
import { ListaRestauranteComponent } from './lista-restaurante.component';



@Pipe({
    name: 'filtroRestaurante'
})
export class FiltroRestaurante implements PipeTransform {

    transform(items: any[], criteria: any): any {

        return items.filter(item => {
            for (let key in item) {
                if (("" + item[key]).includes(criteria)) {
                    return true;
                }
            }
            return false;
        });
    }

}