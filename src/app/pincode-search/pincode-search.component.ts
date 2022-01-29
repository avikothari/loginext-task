import { ChangeDetectorRef, Component, Inject, OnInit, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pincode-search',
  templateUrl: './pincode-search.component.html',
  styleUrls: ['./pincode-search.component.scss']
})
export class PincodeSearchComponent implements OnInit {

  offset = 0;
  limit = 10;

  search_text!: FormControl

  @ViewChildren('code_row') createdItems!: any;
  row_count: any;



  constructor(@Inject('LOCATIONS') public postal_codes: any[],
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.search_text = new FormControl('')

  }

  ngAfterViewChecked() {
    this.row_count = this.createdItems.toArray().length
    this.cdRef.detectChanges()
  }

  ngAfterViewInit() {
  }


  paginateData(key: string) {
    if (key === 'prev')
      this.offset -= this.limit
    else if (key === 'next')
      this.offset += this.limit

  }

}

