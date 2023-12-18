import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  district: any= [
    {
      id:1,
      title:"Trivandrum",
      image:"../../../assets/img/triv2.jpg",
      description:"Trivandrum, the capital city of Kerala is the best place to start the visit."
    },
    {
      id:2,
      title:"Ernakulam",
      image:"../../../assets/img/koch.jpg",
      description:"Apart from Kochi there are so many interesting places in Ernakulam."
    },
    {
      id:3,
      title:"Alappuzha",
      image:"https://wallpapercave.com/wp/wp7877187.jpg",
      description:"Alleppey vacations promise to offer loads of fun, beauty and adventure."
    },
    
    
    {
      id:4,
      title:"Kollam",
      image:"https://www.careinsurance.com/kitextproxy/cms-careinsurance-com/upload_master/localagent/bg-1627297641.jpg",
      description:"Kollam, situated in the southern Indian state of Kerala, stands as a fascinating blend of history, culture, and natural splendor.Nestled on the Malabar Coast along the tranquil water"
    },
    {
      id:5,
      title:"Pathanamthitta",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuJcpK2AYj5jz3x8367Td5Xip76yFrRrKIQ&usqp=CAU",
      description:"Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes. Blessed by nature, also called beauty of kerala, its famous for its scenic beauty, festivals."
    },
    
    {
      id:6,
      title:"Thrissur",
      image:"https://tse2.mm.bing.net/th?id=OIP.6U4UN0KH5pVU7JEwY19OqQHaDt&pid=Api&P=0&h=180",
      description:"Officially known as the cultural capital of Kerala, Thrissur is famous for fostering classical Keralan performing arts, religious sites and the renowned  Thrissur Pooram festival, Onam festival."
    },
    {
      id:7,
      title:"Idukki",
      image:"https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      description:"A landlocked district, Idukki is one of the most nature rich areas of Kerala. High ranges and wooded valleys are girded by three main rivers – Periyar, Thalayar and Thodupuzhayar – and their tributaries." 
    },
  ];
}