import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'floatingactionbutton',
    loadChildren: () => import('./floatingactionbutton/floatingactionbutton.module').then( m => m.FloatingactionbuttonPageModule)
  },
  {
    path: 'floatingfab',
    loadChildren: () => import('./floatingfab/floatingfab.module').then( m => m.FloatingfabPageModule)
  },
  {
    path: 'floatinglist',
    loadChildren: () => import('./floatinglist/floatinglist.module').then( m => m.FloatinglistPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'scroll-infinite',
    loadChildren: () => import('./scroll-infinite/scroll-infinite.module').then( m => m.ScrollInfinitePageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'textarea',
    loadChildren: () => import('./textarea/textarea.module').then( m => m.TextareaPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'item-divider',
    loadChildren: () => import('./item-divider/item-divider.module').then( m => m.ItemDividerPageModule)
  },
  {
    path: 'item-group',
    loadChildren: () => import('./item-group/item-group.module').then( m => m.ItemGroupPageModule)
  },
  {
    path: 'item-sliding',
    loadChildren: () => import('./item-sliding/item-sliding.module').then( m => m.ItemSlidingPageModule)
  },
  {
    path: 'label',
    loadChildren: () => import('./label/label.module').then( m => m.LabelPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
