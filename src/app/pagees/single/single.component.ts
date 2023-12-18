import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  districts=[
    {
      id:1,
      title:"Thiruvananthapuram",
      image:"../../../assets/img/trivan.jpg",
      image2:"../../../assets/img/thiru.jpg",
      description:"Thiruvananthapuram, the capital city of Kerala in southern India, captivates visitors with a blend of cultural heritage and modernity.Its crown jewel, the ancient Padmanabhaswamy Temple, stands as a testament to architectural brilliance and spiritual significance. The city's coastline boasts stunning beaches like Kovalam and Varkala, inviting travelers to relax on their golden shores. History comes alive at the Napier Museum, showcasing rare artifacts, while the adjacent Thiruvananthapuram Zoo offers a glimpse of diverse wildlife. Amidst this, the Kuthira Malika Palace showcases intricate craftsmanship and history.",
      descriptions:"Thiruvananthapuram's technological prowess shines through the Technopark, a hub for IT innovation. Amidst lush greenery, places like Neyyar Wildlife Sanctuary and Ponmudi hill station offer nature enthusiasts trekking trails and serene landscapes. The city's culinary delights, from traditional Kerala cuisine to vibrant street food, enrich the cultural experience, making Thiruvananthapuram a captivating destination that seamlessly weaves together history, natural beauty, and contemporary vibrancy.Thiruvananthapuram boasts stunning beaches like Kovalam and Varkala, attracting travelers with their sandy shores and breathtaking views."
    },
    {
      id:2,
      title:"Ernakulam",
      image:"../../../assets/img/koch.jpg",
      image2:"../../../assets/img/ko.jpg",
      description:"Ernakulam, situated in the southern Indian state of Kerala, stands as a vibrant and bustling urban center, pulsating with a rich blend of tradition, commerce, and modernity. As the commercial capital of Kerala, Ernakulam is a significant hub for trade, business, and cultural exchange. Its strategic location on the shores of the Arabian Sea has historically made it a pivotal port city, fostering connections with global trade routes.The bustling markets and streets of Ernakulam epitomize the lively essence of Kerala. Places like the Broadway and Marine Drive resonate with local life, where one can witness a vibrant interplay of commerce and cultural diversity.",
      descriptions:"Despite its urban character, Ernakulam doesn't lose touch with nature's serenity. The backwaters that border the city offer tranquility amidst the urban buzz. Boating through these picturesque waterways provides an escape into the lush greenery and idyllic landscapes that Kerala is renowned for.Moreover, Ernakulam's embrace of modernity is evident in its thriving business districts, shopping malls, and IT parks. The city has seen rapid development, welcoming advancements while preserving its cultural roots. Its educational institutions, healthcare facilities, and technological infrastructure contribute to its status as a progressive urban center."
    },
    {
      id:3,
      title:"Alappuzha",
      image:"../../../assets/img/alappy.jpg",
      image2:"../../../assets/img/alpp.jpg",
      description:"Alleppey, or Alappuzha, nestled along the serene backwaters of Kerala, embodies a unique blend of natural beauty, cultural richness, and tranquil charm. Renowned as the Venice of the East for its intricate network of canals, backwaters, and lagoons, this coastal town captivates visitors with its picturesque landscapes and vibrant local life.The backbone of Alleppey's allure lies in its intricate network of backwaters, where houseboats gracefully glide through the peaceful waters lined with swaying palm trees and lush greenery. A journey on these traditional Kettuvallams allows for an immersive experience of Kerala's backwater life, offering glimpses of rural existence, fishing activities, and serene sunsets painting the horizon.",
      descriptions:"Beyond its aquatic allure, Alleppey boasts a rich cultural heritage that's reflected in its festivities, art forms, and historic sites. The annual Nehru Trophy Boat Race, held in the Punnamada Lake, is a spectacle that draws crowds from far and wide, showcasing the competitive spirit and traditional boat races intrinsic to Kerala's culture.The town's streets hum with the vibrancy of local markets where one can savor authentic Kerala cuisine and shop for intricate handicrafts, spices, and coir products, reflecting the region's craftsmanship. The historic charm of Alleppey is evident in attractions like the Alappuzha Beach, offering a serene coastal escape, and the Mullakkal Temple, a revered shrine reflecting the town's religious diversity and architectural heritage."
    },
    
    
    {
      id:4,
      title:"Kollam",
      image:"../../../assets/img/kolam.jpg",
      image2:"../../../assets/img/kol1.jpg",
      description:"Kollam, situated in the southern Indian state of Kerala, stands as a fascinating blend of history, culture, and natural splendor. Nestled on the Malabar Coast along the tranquil waters of the Ashtamudi Lake, Kollam has been a pivotal trading port for centuries, fostering connections with ancient civilizations like the Greeks, Romans, Arabs, and Chinese.The town's historical significance is evident in its landmarks and remnants of a rich past. Tangible echoes of its trade history are found in the Thangassery Lighthouse, a beacon guiding ships since the 19th century, and the remnants of Portuguese and Dutch forts, speaking volumes about the town's strategic importance during colonial times.",
      descriptions:"Kollam's allure extends beyond its historical narrative. The town's sprawling backwaters, particularly the Ashtamudi Lake, offer a serene and picturesque landscape. Traditional houseboat cruises along these tranquil waters provide an intimate encounter with Kerala's backwater life, surrounded by lush greenery and the rhythmic life of the local communities dwelling along the banks.The town embraces its cultural heritage with fervor. The vibrant and colorful festivals like the Kollam Pooram, showcasing a spectacular procession of decorated elephants, traditional music, and dance, offer a glimpse into the region's rich cultural tapestry. Additionally, the revered temples and religious sites like the Sasthamcotta Lake and the Mahadeva Temple reflect the spiritual essence and religious diversity of Kollam."
    },
    {
      id:5,
      title:"Pathanamthitta",
      image:"../../../assets/img/pat2.jpg",
      image2:"../../../assets/img/patnam2.jpg",
      description:"Pathanamthitta, nestled in the lush landscapes of Kerala, is a district of diverse natural beauty, cultural heritage, and religious significance. Known for its pristine forests, rolling hills, and tranquil rivers, this region offers a serene escape into the heart of nature while embracing its rich historical and religious roots.The district serves as a gateway to the famous pilgrimage center of Sabarimala, attracting millions of devotees annually. Sabarimala, nestled in the Western Ghats, is revered for the Ayyappa Temple, drawing devotees who embark on a spiritual journey, especially during the revered Mandalam-Makaravilakku season. The pilgrimage to Sabarimala through the dense forests and challenging terrain is a significant cultural and religious experience for many.",
      descriptions:"Pathanamthitta isn't merely a religious center; it also boasts stunning natural landscapes. The Periyar National Park, a part of the Western Ghats, lies within its boundaries, offering biodiversity and a chance to witness various flora and fauna in their natural habitat. The serene Pamba River, flowing through this district, not only holds religious significance but also provides opportunities for tranquil boat rides amid picturesque surroundings.The district's cultural heritage is evident in its traditional art forms like Kathakali, Theyyam, and Ottamthullal, which are showcased during various festivals and cultural events. The rhythmic beats of Chenda and the graceful movements of Mohiniyattam dancers add to the cultural vibrancy of Pathanamthitta.",
    },
    
    {
      id:6,
      title:"Thrissur",
      image:"../../../assets/img/thiru.jpg",
      image2:"../../../assets/img/thri2.jpg",
      description:"Thrissur, often referred to as the cultural capital of Kerala, stands as a vibrant testament to the state's rich heritage, artistic legacy, and religious diversity. Nestled in the heart of Kerala, this historic city exudes a unique charm that seamlessly blends tradition with modernity.At the heart of Thrissur lies Vadakkunnathan Temple, an ancient Hindu temple dedicated to Lord Shiva, revered for its architectural grandeur and religious significance. The temple's iconic Koothambalam (traditional theater) and the annual Thrissur Pooram festival, a grand spectacle of elephants, percussion ensembles, and fireworks, epitomize the city's cultural splendor and draw crowds from around the world.",
      descriptions:"Thrissur's cultural tapestry extends beyond religious fervor. The city is a cradle of Kerala's performing arts, particularly Kathakali, Mohiniyattam, and Theyyam. Institutions like Kerala Kalamandalam, located nearby, preserve and promote these classical art forms, attracting enthusiasts and students eager to delve into Kerala's artistic traditions.Adding to its cultural richness, Thrissur boasts architectural marvels like the Basilica of Our Lady of Dolours, a majestic church with Gothic-style architecture, and the Palakkad Fort, a historical fortification reflecting the city's colonial past. The town's streets are adorned with ancient markets like the famed Chalai Market, bustling with activity and offering a glimpse into the local life and trade.",
    },
    {
      id:7,
      title:"Idukki",
      image:"https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      image2:"../../../assets/img/idukki.jpg",
      description:"Idukki, nestled in the picturesque Western Ghats of Kerala, is a land of breathtaking landscapes, rich biodiversity, and vibrant cultural heritage. Known for its mountainous terrain, dense forests, and majestic dams, Idukki captivates visitors with its natural beauty and diverse offerings.The district is home to the Idukki Arch Dam, an engineering marvel that stands as one of Asia's largest arch dams. This towering structure not only serves as a vital source of hydroelectric power but also offers stunning panoramic views of the surrounding valleys and the vast expanse of the Idukki Reservoir, fringed by lush green hills.",
      descriptions:"The hill stations of Idukki, including Munnar and Vagamon, are renowned for their tea plantations, mist-covered hills, and cool climate. These serene retreats offer respite from the bustling city life, inviting visitors to unwind amidst verdant landscapes and pristine air.The cultural tapestry of Idukki is woven with the traditions and customs of various indigenous tribes like the Mannans and the Malayarayans. The district preserves its cultural heritage through art forms, rituals, and festivals that showcase the vibrant traditions of its tribal communities.Idukki's culinary scene tantalizes the taste buds with its traditional Kerala cuisine, enriched with flavors of coconut, spices, and locally sourced produce. The region's authentic dishes, including appam, puttu, and fish curry, offer a delicious insight into Kerala's culinary heritage.",
    },
  ];
  
  

  constructor(public route:ActivatedRoute){}


  ngOnInit(){

    this.getDetails();
  }

  id:any;
  data:any;

  getDetails(){
    this.id=this.route.snapshot.params['id'];
    this.data= this.districts.filter((d: any)=> d.id ==this.id);
    console.log(this.id,this.data);

  }

}
