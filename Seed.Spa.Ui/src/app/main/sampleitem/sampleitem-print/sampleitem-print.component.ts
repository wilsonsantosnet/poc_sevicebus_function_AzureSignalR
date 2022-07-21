import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { SampleItemService } from '../sampleitem.service';
import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampleitem-print',
    templateUrl: './sampleitem-print.component.html',
    styleUrls: ['./sampleitem-print.component.css'],
})
export class SampleItemPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleItemService: SampleItemService, private route: ActivatedRoute) {
        this.vm = this.sampleItemService.initVM();
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id)
        {
            this.sampleItemService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            });
        }
        
        this.updateCulture();

    }
    
	updateCulture(culture: string = null) {
        this.sampleItemService.updateCulture(culture).then((infos: any) => {
					this.vm.infos = infos;
					this.vm.grid = this.sampleItemService.getInfoGrid(infos);
        });
        this.sampleItemService.updateCultureMain(culture).then((infos: any) => {
					this.vm.generalInfo = infos;
        });
    }
    
    onPrint() {
        window.print();
    }
   


}
