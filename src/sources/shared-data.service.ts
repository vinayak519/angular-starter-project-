export class SharedDataService{
    //added brackets for memories and used in giftcard thankyou page
    sharedData : any[];

    setData(data: any){
        //set to empty first then add data
        this.sharedData = [];
        this.sharedData.push(data);
    }

    getData(){
        return this.sharedData;
    }


    // Shared Sent Data for Admin Sent Giftcards - SENT GIFTCARDS
    sentGiftcards : any [];

    getSentGc(){
        return this.sentGiftcards;
    }

    setSentGc(sentGc : any){
        this.sentGiftcards = [];
        this.sentGiftcards.push(sentGc);
    }    

    // Shared Sent Data for Admin Sent Giftcards - PENDING
    pendingGiftcards : any [];

    getPendingGc(){
        return this.pendingGiftcards;
    }

    setPendingGc(sentGc : any){
        this.pendingGiftcards = [];
        this.pendingGiftcards.push(sentGc);
    }

}