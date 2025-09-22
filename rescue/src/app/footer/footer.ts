import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  imports: [RouterModule,CommonModule]
})
export class Footer {}
