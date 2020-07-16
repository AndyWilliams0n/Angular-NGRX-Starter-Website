import {Component} from '@angular/core';
import {HomeHelperService} from '../../services/helper.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-base-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})

export class HomePageComponent {
    public regions$: Observable<any>;
    public regionsNGRX$: Observable<any>;

    constructor(
        public homeHelperService: HomeHelperService
    ) {}

    fetch() {
        this.regions$ = this.homeHelperService.fetchUsingHttp();
    }

    fetchNGRX() {
        this.regionsNGRX$ = this.homeHelperService.fetchUsingHttpAndNGRX();
    }
}
