import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlePreviewComponent } from "./components/article-preview/article-preview.component";

const routes: Routes = [
  {
    component: ArticlePreviewComponent,
    path: "article-preview"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
