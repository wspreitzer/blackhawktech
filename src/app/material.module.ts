import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
];

@NgModule({
    declarations: [],
    imports: [...MODULES],
    exports: [...MODULES],
})
export class MaterialModule {}