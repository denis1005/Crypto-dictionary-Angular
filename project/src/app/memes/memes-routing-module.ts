import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { AddMemeComponent } from "./add-meme/add-meme.component";
import { DeleteMemeComponent } from "./delete-meme/delete-meme.component";
import { EditComponentComponent } from "./edit-component/edit-component.component";
import { LikeComponent } from "./like/like.component";
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
      canActivate:[AuthActivate],
      component:EditComponentComponent,  
      data:{
         'loginRequired':true,
      }

     },

     {
      path:'meme/delete/:memeId',
      canActivate:[AuthActivate],
      component:DeleteMemeComponent,  
      data:{
         'loginRequired':true,
      }
     },
     { 
      
      path:'meme/like/:memeId',
      canActivate:[AuthActivate],
      component:LikeComponent, 
      data:{
         'loginRequired':true,
      }
     },
     { 
      path:'memes/add',
      canActivate:[AuthActivate],
      component:AddMemeComponent, 
      data:{
         'loginRequired':true,
      }
     },
    
]

export const MemesRoutingModule = RouterModule.forChild(routes);