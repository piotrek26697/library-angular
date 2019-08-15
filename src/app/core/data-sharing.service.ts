import { Injectable } from '@angular/core';
import { Link } from '../shared/link';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  link:Link;
  
  constructor() { }
}
