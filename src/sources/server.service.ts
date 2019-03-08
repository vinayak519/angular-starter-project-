import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Giftcard } from "../admin/giftcard-model";
import { GiftCardService } from "../admin/giftcard.service";


@Injectable()
export class ServerService{

    // private giftcardJson = JSON.stringify(this.gcService.getGiftcards());

    constructor(private httpClient: HttpClient,
        private gcService : GiftCardService
    ){}

    // Post added giftcard
    postGiftCards(giftcard : Giftcard){
        return this.httpClient.post(
            'http://localhost:81/api/post.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { console.log(data) }
        )
    }

    // get all the giftcards
    getGiftCards(){
        return this.httpClient.get(
            'http://localhost:81/api/get.php', 
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (giftcard : Giftcard[]) => { 
                const giftcards : Giftcard[] = giftcard;
                // get and add to giftcards
                this.gcService.addNewGiftCard(giftcards);
            }
        )    
    }

    // Post added giftcard
    updateGiftCards(giftcard : any){
        return this.httpClient.post(
            'http://localhost:81/api/update.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        // .subscribe(
        //     (data) => { console.log(data) }
        // )    
    }

    // Delete giftcard
    deleteGiftCards(giftcard : Giftcard){
        return this.httpClient.post(
            'http://localhost:81/api/delete.php', 
            // this.gcService.getGiftcards(),
            giftcard,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        // .subscribe(
        //     (data) => { console.log(data) }
        // )    
    }


    //Post IMage to server
    uploadNewCardImage(formData: any) {
        return this.httpClient.post(
            'http://localhost:81/api/upload.php',
            formData
        )
        // .subscribe(
        //   res => console.log(res)
        // ),
        // (err: HttpErrorResponse)=> {console.log(err)}
    }

    //User Giftcard Save for Later Date
    postGcDetailsLater(gc_details : any){
        return this.httpClient.post(
            'http://localhost:81/api/gc_user.php', 
            // this.gcService.getGiftcards(),
            gc_details,
            {
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => { 
                //console.log(data)
                return data;
            }
        )
    }


}