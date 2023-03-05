import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading : boolean = false;

  constructor(private _loaderService : LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loaderStatus
                        .subscribe(res => {
                          this.isLoading = res;
                        })
  }

}
