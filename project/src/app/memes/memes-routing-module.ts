import { RouterModule, Routes } from "@angular/router";
import { MemesComponentComponent } from "./memes-component/memes-component.component";



const routes:Routes = [
    {
       path:'memes',
       component:MemesComponentComponent,
       
    },
    
]

export const MemesRoutingModule = RouterModule.forChild(routes);