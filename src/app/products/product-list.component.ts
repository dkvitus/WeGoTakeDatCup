import { Component, OnDestroy, OnInit, ViewChild, ElementRef, Renderer2, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Group Stage';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;
  isSelectGroupWinners = false;
  isSelectGroupRunnersUp = false;
  A1=""; A2="";
  B1=""; B2="";
  C1=""; C2="";
  D1=""; D2="";
  E1=""; E2="";
  F1=""; F2="";
  G1=""; G2="";
  H1=""; H2="";

  W49=""; W50="";
  W51=""; W52="";
  W53=""; W54="";
  W55=""; W56="";

  btnColor = "gray";
  isGreen = false;
  isWinner = false;
  isRunnerUp = false;
  Num1 = 1;
  Num2 = 2;


  teams = [
    {
      "teamISO": 'AR',
      "teamId": 1,
      "teamCountryId": 1,
      "teamName": "Argentina",
      "teamOriginID": 4,
      "teamHomeJerseyColor": "white/blue",
      "teamAwayJerseyColor": "lavender",
      "teamGroupID": 3,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "la Albiceleste",
      "teamNotes": "“the White and Sky Blues” (in Spanish)"
    },
    {
      "teamISO": "AU",
      "teamId": 2,
      "teamCountryId": 2,
      "teamName": "Australia",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "yellow",
      "teamAwayJerseyColor": "dark blue",
      "teamGroupID": 4,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "the Socceroos",
      "teamNotes": "a hybrid word from Soccer and Kangaroo (a native animal to Australia)"
    },
    {
      "teamISO": "BE",
      "teamId": 3,
      "teamCountryId": 3,
      "teamName": "Belgium",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 6,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "les Diables Rouges / Rode Duivels",
      "teamNotes": "meaning 'the Red Devils' (in French and Dutch)"
    },
    {
      "teamISO": "BR",
      "teamId": 4,
      "teamCountryId": 4,
      "teamName": "Brazil",
      "teamOriginID": 4,
      "teamHomeJerseyColor": "yellow",
      "teamAwayJerseyColor": "paramount blue",
      "teamGroupID": 7,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Canarinho, or Seleção",
      "teamNotes": "Canarinho means 'little canary', and Seleção means The Selection/Team (in Portuguese)"
    },
    {
      "teamISO": "CM",
      "teamId": 5,
      "teamCountryId": 5,
      "teamName": "Cameroon",
      "teamOriginID": 2,
      "teamHomeJerseyColor": "green",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 7,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Lions indomitables",
      "teamNotes": "meaning Indomitable Lions (in French)"
    },
    {
      "teamISO": "CA",
      "teamId": 6,
      "teamCountryId": 6,
      "teamName": "Canada",
      "teamOriginID": 3,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 6,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "the Canucks",
      "teamNotes": "Canucks is a slang term for Canadians. Also Les Rouges, meaning 'The Reds'"
    },
    {
      "teamISO": "CR",
      "teamId": 7,
      "teamCountryId": 7,
      "teamName": "Costa Rica",
      "teamOriginID": 3,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 5,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Los Ticos",
      "teamNotes": "Spanish slang for natives of Costa Rica. Also la Tricolor (“the Tricolors” in Spanish), la Roja (“the Reds”)"
    },
    {
      "teamISO": "HR",
      "teamId": 8,
      "teamCountryId": 8,
      "teamName": "Croatia",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "white/red",
      "teamAwayJerseyColor": "blue/dark blue",
      "teamGroupID": 6,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Vatreni",
      "teamNotes": "meaning Fiery boys. Also sometimes Kockasti (The Chequereds)"
    },
    {
      "teamISO": "DK",
      "teamId": 9,
      "teamCountryId": 9,
      "teamName": "Denmark",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 4,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Danish Dynamite",
      "teamNotes": ""
    },
    {
      "teamISO": "EC",
      "teamId": 10,
      "teamCountryId": 10,
      "teamName": "Ecuador",
      "teamOriginID": 4,
      "teamHomeJerseyColor": "yellow",
      "teamAwayJerseyColor": "blue",
      "teamGroupID": 1,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "la Tri, or la Tricolor",
      "teamNotes": "the Tricolor (in Spanish)"
    },
    {
      "teamISO": "GB",
      "teamId": 11,
      "teamCountryId": 11,
      "teamName": "England",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "red",
      "teamGroupID": 2,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "the Three Lions",
      "teamNotes": ""
    },
    {
      "teamISO": "FR",
      "teamId": 12,
      "teamCountryId": 12,
      "teamName": "France",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "blue",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 4,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "les Bleus",
      "teamNotes": "meaning 'the blues' in French"
    },
    {
      "teamISO": "DE",
      "teamId": 13,
      "teamCountryId": 13,
      "teamName": "Germany",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "white/black",
      "teamAwayJerseyColor": "cherry red/black",
      "teamGroupID": 5,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Die Nationalmannschaft, or Die Nationalelf",
      "teamNotes": "meaning 'The National Team', 'The National Eleven' (in German). Outside of Germany, simply 'Die Mannschaft' (The Team) is commonly used."
    },
    {
      "teamISO": "GH",
      "teamId": 14,
      "teamCountryId": 14,
      "teamName": "Ghana",
      "teamOriginID": 2,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "red",
      "teamGroupID": 8,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "the Black Stars",
      "teamNotes": "a reference to the sole black star on Ghana's flag"
    },
    {
      "teamISO": "IR",
      "teamId": 15,
      "teamCountryId": 15,
      "teamName": "Iran",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "",
      "teamGroupID": 2,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Team Melli",
      "teamNotes": "meaning the National Team (in Persian). Also Shirants Perse / Shiran-e Pars (“the Persian Lions” in Persian)."
    },
    {
      "teamISO": "JP",
      "teamId": 16,
      "teamCountryId": 16,
      "teamName": "Japan",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "blue",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 5,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Samurai Blues",
      "teamNotes": "also Nihon Daihyo (“Japanese Representatives” in Japanese)"
    },
    {
      "teamISO": "MX",
      "teamId": 17,
      "teamCountryId": 17,
      "teamName": "Mexico",
      "teamOriginID": 3,
      "teamHomeJerseyColor": "green",
      "teamAwayJerseyColor": "white/red",
      "teamGroupID": 3,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "el Tri / el Tricolor / Tricolores",
      "teamNotes": "also less commonly uses the alternative nickname of \"Los Aztecas\"."
    },
    {
      "teamISO": "MA",
      "teamId": 18,
      "teamCountryId": 18,
      "teamName": "Morocco",
      "teamOriginID": 2,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 6,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "les Lions de l’Atlas, Atlas Lions",
      "teamNotes": "“the Lions of Atlas” (in French), named after the Atlas Mountains"
    },
    {
      "teamISO": "NL",
      "teamId": 19,
      "teamCountryId": 19,
      "teamName": "Netherlands",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "Laser Orange",
      "teamAwayJerseyColor": "Deep Royal",
      "teamGroupID": 1,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Oranje",
      "teamNotes": "meaning 'orange' (in Dutch)"
    },
    {
      "teamISO": "PL",
      "teamId": 20,
      "teamCountryId": 20,
      "teamName": "Poland",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "red",
      "teamGroupID": 3,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Bialo-Czerwoni",
      "teamNotes": "White-Reds (in Polish). Also Polskie Orly (“the Polish Eagles” in Polish)"
    },
    {
      "teamISO": "PT",
      "teamId": 21,
      "teamCountryId": 21,
      "teamName": "Portugal",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red/green",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 8,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Selecção das Quinas",
      "teamNotes": "in Portuguese the word \"QUINAS\" is a 5 sided Polyhedron, representing the \"Forts\" (Castles) Conquered from the Moors, in the \"Foundation\" of Portugal in 1143."
    },
    {
      "teamISO": "QA",
      "teamId": 22,
      "teamCountryId": 22,
      "teamName": "Qatar",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "desert maroon",
      "teamAwayJerseyColor": "beige/white",
      "teamGroupID": 1,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Al Ennabi",
      "teamNotes": "“the Crimsons” in Arabic"
    },
    {
      "teamISO": "SA",
      "teamId": 23,
      "teamCountryId": 23,
      "teamName": "Saudi Arabia",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "green",
      "teamGroupID": 3,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Al Sogour Al Akhdar",
      "teamNotes": "“the Green Hawks/Falcons” (in Arabic). Also Ouilad Al Sahraa (“the Sons of the Desert” in Arabic)"
    },
    {
      "teamISO": "SN",
      "teamId": 24,
      "teamCountryId": 24,
      "teamName": "Senegal",
      "teamOriginID": 2,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "green",
      "teamGroupID": 1,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Les Lions de la Teranga",
      "teamNotes": "The Lions of Teranga / the Lions of Hospitality (in French). “Teranga” originates from the Wolof language."
    },
    {
      "teamISO": "RS",
      "teamId": 25,
      "teamCountryId": 25,
      "teamName": "Serbia",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 7,
      "groupPosition": 2,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Plavi",
      "teamNotes": "the blue, or Orlovi (“the eagles” in Serbian)"
    },
    {
      "teamISO": "KR",
      "teamId": 26,
      "teamCountryId": 26,
      "teamName": "South Korea",
      "teamOriginID": 1,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "multicolored",
      "teamGroupID": 8,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Asian Tigers or Taeguk Warriors",
      "teamNotes": "also the Red Devils. The Taeguk symbol of two hands clasping is in the middle of the Korean flag."
    },
    {
      "teamISO": "ES",
      "teamId": 27,
      "teamCountryId": 27,
      "teamName": "Spain",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "bubblegum blue",
      "teamGroupID": 5,
      "groupPosition": 1,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "La Furia Roja",
      "teamNotes": "meaning 'The Red Fury'. Also la Seleccion (“the Selection” in Spanish)."
    },
    {
      "teamISO": "CH",
      "teamId": 28,
      "teamCountryId": 28,
      "teamName": "Switzerland",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 7,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Schweizer Nati, or just Nati",
      "teamNotes": "meaning 'The Nats' – short for Nationals"
    },
    {
      "teamISO": "TN",
      "teamId": 29,
      "teamCountryId": 29,
      "teamName": "Tunisia",
      "teamOriginID": 2,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 4,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Les Aigles de Carthage",
      "teamNotes": "The Eagles of Carthage (in French)"
    },
    {
      "teamISO": "UY",
      "teamId": 30,
      "teamCountryId": 30,
      "teamName": "Uruguay",
      "teamOriginID": 4,
      "teamHomeJerseyColor": "sky blue",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 8,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "Charrúas",
      "teamNotes": "The Charrúas are the indigenous people of present-day Uruguay. Another nickname sometimes used is La Celeste Olímpica (The Olympic Sky Blue)"
    },
    {
      "teamISO": "US",
      "teamId": 31,
      "teamCountryId": 31,
      "teamName": "USA",
      "teamOriginID": 3,
      "teamHomeJerseyColor": "white",
      "teamAwayJerseyColor": "royal blue",
      "teamGroupID": 2,
      "groupPosition": 3,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "The Stars and Stripes",
      "teamNotes": "Other names that are used are Team USA and The Yanks. There does not appear to be an official name."
    },
    {
      "teamISO": "GB-WLS",
      "teamId": 32,
      "teamCountryId": 32,
      "teamName": "Wales",
      "teamOriginID": 6,
      "teamHomeJerseyColor": "red",
      "teamAwayJerseyColor": "white",
      "teamGroupID": 2,
      "groupPosition": 4,
      "matchesPlayed": "",
      "matchesWon": "",
      "matchesDrawn": "",
      "matchesLost": "",
      "goalsFor": "",
      "goalsAgainst": "",
      "goalsDiff": "",
      "teamPoints": "",
      "teamNickname": "the Dragons",
      "teamNotes": ""
    }
   ];

  groups =[
    {
      "groupID": 1,
      "groupName": "Group A",
      "groupCode":"A"
    },
    {
      "groupID": 2,
      "groupName": "Group B",
      "groupCode":"B"
    },
    {
      "groupID": 3,
      "groupName": "Group C",
      "groupCode":"C"
    },
    {
      "groupID": 4,
      "groupName": "Group D",
      "groupCode":"D"
    },
    {
      "groupID": 5,
      "groupName": "Group E",
      "groupCode":"E"
    },
    {
      "groupID": 6,
      "groupName": "Group F",
      "groupCode":"F"
    },
    {
      "groupID": 7,
      "groupName": "Group G",
      "groupCode":"G"
    },
    {
      "groupID": 8,
      "groupName": "Group H",
      "groupCode":"H"
    }

  ];


  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  
  teamSelected(theTeam:string, theGroup:string, theID:string): void {
    let selectedPosition = '';
    let selectedVariable = '';
    
    const theButton = document.getElementById(theID);

    if(this.isSelectGroupWinners){
      selectedPosition = 'WINNER';
      selectedVariable = theGroup+'1';
      // this.btnColor = 'green';
      // this.isGreen = true;
      
      // const button = document.getElementById(theID);
      // button!.setAttribute("backgroud-color", "green");
      // button!.setAttribute("disabled", "");  

    }
    else if (this.isSelectGroupRunnersUp){
      selectedPosition = 'RUNNER-UP';
      selectedVariable = theGroup+'2';
      //this.btnColor = 'yellow';
    }



    console.log(theTeam + ' is '+selectedPosition+' from '+ theGroup);
    console.log();
    console.log("The button ID is: "+theID)
    //alert("Selection " + selectedVariable + " : "+theTeam + ' is '+selectedPosition+' from '+ theGroup);
    
    switch(selectedVariable){
      case 'A1':
        this.A1 = theTeam;
        
        break;
      case 'B1':
        this.B1 = theTeam;
        break;
      case 'C1':
        this.C1 = theTeam;
        break;
      case 'D1':
        this.D1 = theTeam;
        break;  
      case 'E1':
        this.E1 = theTeam;
        break;
      case 'F1':
        this.F1 = theTeam;
        break;
      case 'G1':
        this.G1 = theTeam;
        break;
      case 'H1':
        this.H1 = theTeam;
        break; 
        case 'A2':
        this.A2 = theTeam;
        break;
      case 'B2':
        this.B2 = theTeam;
        break;
      case 'C2':
        this.C2 = theTeam;
        break;
      case 'D2':
        this.D2 = theTeam;
        break;  
      case 'E2':
        this.E2 = theTeam;
        break;
      case 'F2':
        this.F2 = theTeam;
        break;
      case 'G2':
        this.G2 = theTeam;
        break;
      case 'H2':
        this.H2 = theTeam;
        break; 
    }

  }
  round16Selected(theWinner:string, theMatch:string):void{
    console.log(theWinner + ' is clicked from '+ theMatch);
    alert(theWinner + ' is clicked from '+ theMatch);

  }
  selectGroupWinners():void{
    this.isSelectGroupWinners = true;
    this.isSelectGroupRunnersUp = false;
  }
  selectGroupRunnersUp():void{
    this.isSelectGroupWinners = false;
    this.isSelectGroupRunnersUp = true;
  }
  submitRoundOf16():void{
    
  }
  selectRound16Winners():void{

  }
  teamClicked():void{

  }
}
