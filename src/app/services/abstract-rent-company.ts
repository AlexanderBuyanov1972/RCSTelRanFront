import {Observable} from 'rxjs';
import {ResponseFrom} from '../dto/response-from';

export abstract class AbstractRentCompany {
  abstract getAllLocationBranches(): Observable<ResponseFrom>;
  abstract getAllModelCars(): Observable<ResponseFrom>;

}
