import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-incidents',
  templateUrl: './manage-incidents.component.html',
  styleUrls: ['./manage-incidents.component.scss']
})
export class ManageIncidentsComponent {

  incidentList = [
    {
      userName: 'Sara Acuña Benavides',
      state: 'Pendiente',
      location: 'Barranquilla, Colombia',
      description: 'Se ha identificado un bache de aproximadamente 1 metro de diámetro y 20 cm de profundidad en la intersección de la Calle 45 con Carrera 18. El bache representa un peligro significativo para los conductores y motociclistas, especialmente durante la noche, debido a la falta de iluminación en el área. En las últimas semanas, se han reportado varios incidentes menores relacionados con este bache.',
      imageUrl: 'https://cdn.milenio.com/uploads/media/2023/01/11/escurrimientos-dejan-calles-danadas-tampico.jpg'
    },
    {
      userName: 'Daniel Mercado',
      state: 'Completado',
      location: 'Bogotá, Colombia',
      description: 'Se ha identificado un bache de aproximadamente 1 metro de diámetro y 20 cm de profundidad en la intersección de la Calle 45 con Carrera 18. El bache representa un peligro significativo para los conductores y motociclistas, especialmente durante la noche, debido a la falta de iluminación en el área. En las últimas semanas, se han reportado varios incidentes menores relacionados con este bache.',
      imageUrl: 'https://estaticos.elcolombiano.com/binrepository/830x600/0c0/0d0/none/11101/UILD/whatsapp-image-2023-11-09-at-5-00-48-pm_43739799_20231112184551.jpg'
    },
  ]

}
