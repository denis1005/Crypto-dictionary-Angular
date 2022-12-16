import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { MemeCreatorActivate } from "../shared/guards/creatorMeme.active";
import { NotMemeCreatorActivate } from "../shared/guards/notCreaterMeme.active";
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
      canActivate:[AuthActivate,MemeCreatorActivate],
      component:EditComponentComponent,  
      data:{
         'loginRequired':true,
         'creatorRequired':true,
      }

     },

     {
      path:'meme/delete/:memeId',
      canActivate:[AuthActivate,MemeCreatorActivate],
      component:DeleteMemeComponent,  
      data:{
         'loginRequired':true,
         'creatorRequired':true,
      }
     },
     { 
      
      path:'meme/like/:memeId',
      canActivate:[AuthActivate,NotMemeCreatorActivate],
      component:LikeComponent, 
      data:{
         'loginRequired':true,
         'NotCreatorRequired' :true,
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