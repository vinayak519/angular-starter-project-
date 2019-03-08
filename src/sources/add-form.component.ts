import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Giftcard } from '../giftcard-model';
import { GiftCardService } from '../giftcard.service';
import { ServerService } from '../../shared/server.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-giftcard',
  templateUrl: './add-giftcard.component.html',
  styleUrls: ['./add-giftcard.component.css']
})

export class AddGiftcardComponent implements OnInit {

  giftCards : Giftcard[] = [];
  addGiftCard : FormGroup;
  selectedGiftcardImage : File;

  @ViewChild('imagePath') imagePath : ElementRef;

  constructor( 
    private httpClient: HttpClient,
    private gcService: GiftCardService,
    private serverService: ServerService,
    private elem : ElementRef
  ) { }

  ngOnInit() {
    // get pre saved cards
    this.giftCards = this.gcService.getGiftcards();
    this.gcService.giftCardChanged
    .subscribe(
      (giftcard : Giftcard[]) => {
        this.giftCards = giftcard;
      }
    );

    // Add giftcard form
    this.addGiftCard = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required)
    });
  }

  onFileSelect(event :any){
    this.selectedGiftcardImage = this.imagePath.nativeElement.files[0];
  }

  // Add card method
  onAddGiftCard(){
    
    // Upload Image to server
    let files = this.elem.nativeElement.querySelector('#imagePath').files;
    let fd = new FormData();
    let file = files[0];
    console.log(file.name);
    fd.append('imagePath', file, file.name);


    // Upload the data to server entire card details
    const gcId = null;
    const gcName = this.addGiftCard.value.name;
    const gcDescription = this.addGiftCard.value.description;
    // apend the path to server where storing image
    const gcImagePath = "http://localhost/api/upload/" + file.name;
    const newCard = new Giftcard (gcId, gcName, gcDescription, gcImagePath);

    // Push to main data Giftcard and Giftcard Details
    this.serverService.uploadNewCardImage(fd);
    this.serverService.postGiftCards(newCard);


    // Reset the form at the end    
    this.addGiftCard.reset();

  }

  

}
