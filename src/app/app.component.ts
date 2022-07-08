import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appOne';

  sampleProducts:any[]=[
    {
      prodName:"Product Name",
      price:1000,
      prodImage:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/JanART/GW/Desktop_QC3_1x._SY116_CB647173673_.jpg'
    },
    {
      prodName:"Product Name",
      price:1000,
      prodImage:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/JanART/GW/Desktop_QC3_1x._SY116_CB647173673_.jpg'
    },
    {
      prodName:"Product Name",
      price:1000,
      prodImage:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/JanART/GW/Desktop_QC3_1x._SY116_CB647173673_.jpg'
    },
    {
      prodName:"Product Name",
      price:1000,
      prodImage:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/JanART/GW/Desktop_QC3_1x._SY116_CB647173673_.jpg'
    },
  ]
}
