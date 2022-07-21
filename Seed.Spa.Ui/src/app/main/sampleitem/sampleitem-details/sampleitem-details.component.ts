import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleItemService } from '../sampleitem.service';

@Component({
    selector: 'app-sampleitem-details',
    templateUrl: './sampleitem-details.component.html',
    styleUrls: ['./sampleitem-details.component.css'],
})
export class SampleItemDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleItemService: SampleItemService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleItemService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id) {
            this.sampleItemService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            })
        };
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.sampleItemService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.sampleItemService.getInfoGrid(infos);
        });
    }

    
}
