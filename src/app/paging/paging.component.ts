
import { Component, OnInit, Output, EventEmitter, Input, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Output() newPage = new EventEmitter();

  @Input() page: number;


  constructor() { }

  leftPageButton(){
    if(this.page>1){
      console.log(this.page);
      this.newPage.emit(this.page-1);
    }   
  }

  rightPageButton(){
    console.log(this.page);
    this.newPage.emit(this.page+1);
  }
  ngOnInit(): void {
  }

}
