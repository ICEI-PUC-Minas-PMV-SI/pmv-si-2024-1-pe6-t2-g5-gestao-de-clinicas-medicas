import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css'],
})
export class ProntuarioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
