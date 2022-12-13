import { RouterModule, Routes } from "@angular/router";
import { NewsComponentComponent } from "./news-component/news-component.component";




const routes:Routes = [
    {
       path:'news',
       component:NewsComponentComponent
       
    },
    
]

export const NewsRoutingModule = RouterModule.forChild(routes);