import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports:[MatButtonModule,
             MatDialogModule,
             MatIconModule,
             MatCardModule],
    exports:[MatButtonModule,
             MatDialogModule,
             MatIconModule,
             MatCardModule]
})
export class MaterialModule{}