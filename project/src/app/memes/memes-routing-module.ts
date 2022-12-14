import { RouterModule, Routes } from "@angular/router";
import { EditComponentComponent } from "./edit-component/edit-component.component";
import { MemeDetailsComponent } from "./meme-details/meme-details.component";
import { MemesComponentComponent } from "./memes-component/memes-component.component";



const routes:Routes = [
    {
       path:'memes',
       component:MemesComponentComponent,
    },

    {
        path:'meme/details/:memeId',
        component:MemeDetailsComponent,
     },

     {
      path:'meme/edit/:memeId',
      component:EditComponentComponent,  
     },
    
]

export const MemesRoutingModule = RouterModule.forChild(routes);