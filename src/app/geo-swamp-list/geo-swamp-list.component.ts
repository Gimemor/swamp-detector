import { Component, OnInit } from '@angular/core';

export interface AreaElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: AreaElement[] = [
  { position: 1, name: 'Вашингтон' },
  { position: 2, name: 'Орегон' },
  { position: 3, name: 'Калифорния' },
  { position: 4, name: 'Огайо' }
];

@Component({
  selector: 'app-geo-swamp-list',
  templateUrl: './geo-swamp-list.component.html',
  styleUrls: ['./geo-swamp-list.component.scss']
})
export class GeoSwampListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
