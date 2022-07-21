//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleItemService } from '../sampleitem.service';

@Component({
    selector: 'app-sampleitem-container-filter',
    templateUrl: './sampleitem-container-filter.component.html',
    styleUrls: ['./sampleitem-container-filter.component.css'],
})
export class SampleItemContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private sampleItemService: SampleItemService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleItemService.initVM();
    }

    ngOnInit() {

       
    }

}
