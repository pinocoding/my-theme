# Installation

```
Open the my-theme project in VsCode

npm install (npm install --force)

ng serve

enjoy !
```

# Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂aboutme
 ┃ ┃ ┃ ┣ 📜aboutme.component.html
 ┃ ┃ ┃ ┣ 📜aboutme.component.scss
 ┃ ┃ ┃ ┗ 📜aboutme.component.ts
 ┃ ┃ ┣ 📂aboutmeinfo
 ┃ ┃ ┃ ┣ 📜aboutmeinfo.component.html
 ┃ ┃ ┃ ┣ 📜aboutmeinfo.component.scss
 ┃ ┃ ┃ ┗ 📜aboutmeinfo.component.ts
 ┃ ┃ ┣ 📂advertisingside
 ┃ ┃ ┃ ┣ 📜advertisingside.component.html
 ┃ ┃ ┃ ┣ 📜advertisingside.component.scss
 ┃ ┃ ┃ ┗ 📜advertisingside.component.ts
 ┃ ┃ ┣ 📂articlecart
 ┃ ┃ ┃ ┣ 📜articlecart.component.html
 ┃ ┃ ┃ ┣ 📜articlecart.component.scss
 ┃ ┃ ┃ ┗ 📜articlecart.component.ts
 ┃ ┃ ┣ 📂articleside
 ┃ ┃ ┃ ┣ 📜articleside.component.html
 ┃ ┃ ┃ ┣ 📜articleside.component.scss
 ┃ ┃ ┃ ┗ 📜articleside.component.ts
 ┃ ┃ ┣ 📂artinfor
 ┃ ┃ ┃ ┣ 📜artinfor.component.html
 ┃ ┃ ┃ ┣ 📜artinfor.component.scss
 ┃ ┃ ┃ ┗ 📜artinfor.component.ts
 ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┣ 📜banner.component.html
 ┃ ┃ ┃ ┣ 📜banner.component.scss
 ┃ ┃ ┃ ┗ 📜banner.component.ts
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜button.component.html
 ┃ ┃ ┃ ┣ 📜button.component.scss
 ┃ ┃ ┃ ┗ 📜button.component.ts
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜card.component.html
 ┃ ┃ ┃ ┣ 📜card.component.scss
 ┃ ┃ ┃ ┗ 📜card.component.ts
 ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┃ ┣ 📜carousel.component.html
 ┃ ┃ ┃ ┣ 📜carousel.component.scss
 ┃ ┃ ┃ ┣ 📜carousel.component.ts
 ┃ ┃ ┃ ┗ 📜productservice.ts
 ┃ ┃ ┣ 📂container
 ┃ ┃ ┃ ┣ 📜container.component.html
 ┃ ┃ ┃ ┣ 📜container.component.scss
 ┃ ┃ ┃ ┗ 📜container.component.ts
 ┃ ┃ ┣ 📂followme
 ┃ ┃ ┃ ┣ 📜followme.component.html
 ┃ ┃ ┃ ┣ 📜followme.component.scss
 ┃ ┃ ┃ ┗ 📜followme.component.ts
 ┃ ┃ ┣ 📂followmeitem
 ┃ ┃ ┃ ┣ 📜followmeitem.component.html
 ┃ ┃ ┃ ┣ 📜followmeitem.component.scss
 ┃ ┃ ┃ ┗ 📜followmeitem.component.ts
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜footer.component.html
 ┃ ┃ ┃ ┣ 📜footer.component.scss
 ┃ ┃ ┃ ┗ 📜footer.component.ts
 ┃ ┃ ┣ 📂footerbot
 ┃ ┃ ┃ ┣ 📜footerbot.component.html
 ┃ ┃ ┃ ┣ 📜footerbot.component.scss
 ┃ ┃ ┃ ┗ 📜footerbot.component.ts
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜header.component.html
 ┃ ┃ ┃ ┣ 📜header.component.scss
 ┃ ┃ ┃ ┗ 📜header.component.ts
 ┃ ┃ ┣ 📂menu-sidebar
 ┃ ┃ ┃ ┣ 📜menu-sidebar.component.html
 ┃ ┃ ┃ ┣ 📜menu-sidebar.component.scss
 ┃ ┃ ┃ ┗ 📜menu-sidebar.component.ts
 ┃ ┃ ┣ 📂sidebar
 ┃ ┃ ┃ ┣ 📜sidebar.component.html
 ┃ ┃ ┃ ┣ 📜sidebar.component.scss
 ┃ ┃ ┃ ┗ 📜sidebar.component.ts
 ┃ ┃ ┣ 📂socialside
 ┃ ┃ ┃ ┣ 📜socialside.component.html
 ┃ ┃ ┃ ┣ 📜socialside.component.scss
 ┃ ┃ ┃ ┗ 📜socialside.component.ts
 ┃ ┃ ┣ 📂subcribe
 ┃ ┃ ┃ ┣ 📜subcribe.component.html
 ┃ ┃ ┃ ┣ 📜subcribe.component.scss
 ┃ ┃ ┃ ┗ 📜subcribe.component.ts
 ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┣ 📜table.component.html
 ┃ ┃ ┃ ┣ 📜table.component.scss
 ┃ ┃ ┃ ┗ 📜table.component.ts
 ┃ ┃ ┣ 📂tagcloud
 ┃ ┃ ┃ ┣ 📜tagcloud.component.html
 ┃ ┃ ┃ ┣ 📜tagcloud.component.scss
 ┃ ┃ ┃ ┗ 📜tagcloud.component.ts
 ┃ ┃ ┣ 📂tagclouditem
 ┃ ┃ ┃ ┣ 📜tagclouditem.component.html
 ┃ ┃ ┃ ┣ 📜tagclouditem.component.scss
 ┃ ┃ ┃ ┗ 📜tagclouditem.component.ts
 ┃ ┃ ┣ 📂tagcloudside
 ┃ ┃ ┃ ┣ 📜tagcloudside.component.html
 ┃ ┃ ┃ ┣ 📜tagcloudside.component.scss
 ┃ ┃ ┃ ┗ 📜tagcloudside.component.ts
 ┃ ┃ ┣ 📂tagcloudsideitem
 ┃ ┃ ┃ ┣ 📜tagcloudsideitem.component.html
 ┃ ┃ ┃ ┣ 📜tagcloudsideitem.component.scss
 ┃ ┃ ┃ ┗ 📜tagcloudsideitem.component.ts
 ┃ ┃ ┗ 📂title
 ┃ ┃ ┃ ┣ 📜title.component.html
 ┃ ┃ ┃ ┣ 📜title.component.scss
 ┃ ┃ ┃ ┗ 📜title.component.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜about-info.ts
 ┃ ┃ ┣ 📜card.ts
 ┃ ┃ ┣ 📜follow.ts
 ┃ ┃ ┣ 📜latest-article.ts
 ┃ ┃ ┣ 📜mockup-data.model.ts
 ┃ ┃ ┣ 📜product.ts
 ┃ ┃ ┗ 📜tag-cloud.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📂product
 ┃ ┃ ┃ ┣ 📜avatar.jpg
 ┃ ┃ ┃ ┣ 📜banner.jpg
 ┃ ┃ ┃ ┣ 📜dumb.jpg
 ┃ ┃ ┃ ┣ 📜girl.jpg
 ┃ ┃ ┃ ┣ 📜lady.jpg
 ┃ ┃ ┃ ┣ 📜man.jpg
 ┃ ┃ ┃ ┣ 📜pic1.jpg
 ┃ ┃ ┃ ┣ 📜pic2.jpg
 ┃ ┃ ┃ ┣ 📜pic3.jpg
 ┃ ┃ ┃ ┣ 📜pic4.jpg
 ┃ ┃ ┃ ┣ 📜tree.jpg
 ┃ ┃ ┃ ┗ 📜woman.jpg
 ┃ ┣ 📜.gitkeep
 ┃ ┗ 📜products-small.json
 ┣ 📂environments
```
