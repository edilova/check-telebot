import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-consist',
  templateUrl: './account-consist.component.html',
  styleUrls: ['./account-consist.component.css']
})
export class AccountConsistComponent implements OnInit {

  links: any[] = [
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
    { community: 'sheikhaloheydan', link: 'https://www.instagram.com/sheikhaloheydan/'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
