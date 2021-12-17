import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://site-cdn.givemesport.com/images/21/12/06/1619217055e44d77d13a90496d52c54c/960.jpg'
  image2 = 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
  image3 = 'https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2020/09/29/9fc5dc69/605027-genshinimpact.jpg';

  constructor() { }

  ngOnInit() {
  }

}