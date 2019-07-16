---
id: shopify-collections-list
title: Collections List Page
---

These items can be used only in the page set as **Collections List page**.
Collections List page must have the following attribute entered on the body:

> page=list-collections

## Collections

These elements must be set on a Collection List wrapper and can be paginated. Limit will be set on *Shopify -> Online Store > Themes > Customize* Collection list wrapper must have this attribute:

> shop=collections

This is the list of all collections of your shop.

Inside Collection item you can use the following attributes:

- ### Description

   On Text elements:

   > item=description

- ### Title

   On Text or Link:

   > item=title

- ### Products Count 

   On Text elements:

   > item=products-count

- ### Featured Image

   On Div, Link or img elements:

   > item=featured-image

   To handle featured image settings, there are several optional attributes you can use.

   > [dimension={dimension}](shopify-optional-filters#dimension)

   > [scale={scale}](shopify-optional-filters#scale)

   > [format={format}](shopify-optional-filters#format)

   > [crop={crop}](shopify-optional-filters#crop)

   *For further info on how to set these optional attributes, please take a look on this [document](shopify-optional-filters)*