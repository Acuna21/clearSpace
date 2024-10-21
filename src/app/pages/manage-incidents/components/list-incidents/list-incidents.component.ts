import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-incidents',
  templateUrl: './list-incidents.component.html',
  styleUrls: ['./list-incidents.component.scss']
})
export class ListIncidentsComponent {
  @Input() incidents: any[] = []; // Recibe la lista de incidencias

}
