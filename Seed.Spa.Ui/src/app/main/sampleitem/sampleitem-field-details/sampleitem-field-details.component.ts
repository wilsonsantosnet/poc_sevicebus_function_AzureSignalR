
import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampleitem-field-details',
    templateUrl: './sampleitem-field-details.component.html',
    styleUrls: ['./sampleitem-field-details.component.css']
})
export class SampleItemFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
