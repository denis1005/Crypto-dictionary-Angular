import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesComponentComponent } from './memes-component/memes-component.component';
import { MemesRoutingModule } from './memes-routing-module';
import { SharedModule } from "../shared/shared.module";
import { MemeDetailsComponent } from './meme-details/meme-details.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { FormsModule } from '@angular/forms';
import { DeleteMemeComponent } from './delete-meme/delete-meme.component';
import { LikeComponent } from './like/like.component';



@NgModule({
    declarations: [
        MemesComponentComponent,
        MemeDetailsComponent,
        EditComponentComponent,
        DeleteMemeComponent,
        LikeComponent
    ],
    imports: [
        CommonModule,
        MemesRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class MemesModule { }
