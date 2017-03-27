import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<IncludeContent>
  <header> I'm the header </header>
  </IncludeContent>
   <router-outlet></router-outlet>
  `,

})
export class AppComponent  { 
  name = 'Angular';
  myPhone = 185;
  
}
