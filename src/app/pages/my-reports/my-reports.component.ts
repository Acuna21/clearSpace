import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.scss']
})
export class MyReportsComponent {
  reportsList= [
  {
    userName: 'Daniel Mercado',
    description: 'Se ha identificado un bache de aproximadamente 1 metro de diámetro y 20 cm de profundidad en la intersección de la Calle 45 con Carrera 18. El bache representa un peligro significativo para los conductores y motociclistas, especialmente durante la noche, debido a la falta de iluminación en el área. En las últimas semanas, se han reportado varios incidentes menores relacionados con este bache.'
  },
  {
    userName: 'Daniel Mercado',
    description: 'Se ha identificado un bache de aproximadamente 1 metro de diámetro y 20 cm de profundidad en la intersección de la Calle 45 con Carrera 18. El bache representa un peligro significativo para los conductores y motociclistas, especialmente durante la noche, debido a la falta de iluminación en el área. En las últimas semanas, se han reportado varios incidentes menores relacionados con este bache.'
  },
  {
    userName: 'Daniel Mercado',
    description: 'Se ha identificado un bache de aproximadamente 1 metro de diámetro y 20 cm de profundidad en la intersección de la Calle 45 con Carrera 18. El bache representa un peligro significativo para los conductores y motociclistas, especialmente durante la noche, debido a la falta de iluminación en el área. En las últimas semanas, se han reportado varios incidentes menores relacionados con este bache.'
  },
  ];

  getUniqueDate(index: number): string {
    const baseDate = new Date(); 
    baseDate.setDate(baseDate.getDate() + index); 
    return baseDate.toLocaleDateString(); 
}
}
