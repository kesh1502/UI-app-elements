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
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-header',
    loadChildren: () => import('./list-header/list-header.module').then( m => m.ListHeaderPageModule)
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./virtual-scroll/virtual-scroll.module').then( m => m.VirtualScrollPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'thumbnail',
    loadChildren: () => import('./thumbnail/thumbnail.module').then( m => m.ThumbnailPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-panels',
    loadChildren: () => import('./menu-panels/menu-panels.module').then( m => m.MenuPanelsPageModule)
  },
  {
    path: 'menu-split-pane',
    loadChildren: () => import('./menu-split-pane/menu-split-pane.module').then( m => m.MenuSplitPanePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'backdrop',
    loadChildren: () => import('./backdrop/backdrop.module').then( m => m.BackdropPageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: "details/:id",
    loadChildren: () => import("./details/details.module").then(m => m.DetailsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'skeleton-text',
    loadChildren: () => import('./skeleton-text/skeleton-text.module').then( m => m.SkeletonTextPageModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'radio-group',
    loadChildren: () => import('./radio-group/radio-group.module').then( m => m.RadioGroupPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'reorder-group',
    loadChildren: () => import('./reorder-group/reorder-group.module').then( m => m.ReorderGroupPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'segment-button',
    loadChildren: () => import('./segment-button/segment-button.module').then( m => m.SegmentButtonPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  },
  {
    path: 'back-button',
    loadChildren: () => import('./back-button/back-button.module').then( m => m.BackButtonPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
