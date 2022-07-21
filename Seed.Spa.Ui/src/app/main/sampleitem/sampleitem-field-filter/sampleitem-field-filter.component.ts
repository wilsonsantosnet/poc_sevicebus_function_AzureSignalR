import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampleitem-field-filter',
    templateUrl: './sampleitem-field-filter.component.html',
    styleUrls: ['./sampleitem-field-filter.component.css']
})
export class SampleItemFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
