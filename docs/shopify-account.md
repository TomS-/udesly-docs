---
id: shopify-account
title: Account Page
---

In this guide we’re going to focus on how to configure the account page in Webflow to get it ready to be converted to Shopify by the Adapter. 

The following elements can be entered in the Account page only. This page is defined with the following attribute attached to the Body:

> page=account

To enable accounts follow the path **Shopify > settings > Checkout > Select**. 

These are the most common elements of an account page. For each element, you can find the custom attribute that you must add in Webflow to allow a proper conversion by the Adapter.

## User Name
Insert a Text item and add the attribute:

> account=user-name

## User First Name
Insert a Text item and add the attribute:

> account=user-first-name

## User Last Name
Insert a Text item and add the attribute:

> account=user-last-name

## User Email
Insert a Text item and add the attribute:

> account=user-email

## User Orders Count
If you want to display the number of orders a user has placed in the shop, insert a Text Item in the account page of your Webflow project and add the attribute:

> account=user-orders-count

## User Default Address
Shopify gives you the opportunity to add several shipping addresses and set one of them as main address: this is the Default address.

In Webflow, insert a Text item and add the attribute:

> account=user-default-address

## User Total Spent
if you want to display the total spent by customer on the shop, insert a Text item in the account page of your Webflow project and and add the attribute:

> account=user-total-spent

## Orders
if you want to list the customer’s orders in the account page, insert a Collection List Wrapper item and add the attribute:

> account=orders

To enable pagination just add the pagination to the collection and you can control the number of orders from *Shopify -> Online Store > Themes > Customize*.

Inside each single collection item you can add the following attributes on Text elements:

> item=name
> 
> item=date
> 
> item=payment-status
>
> item=fulfillment-status
>
> item=total  

On Link elements:

> item=link


## Logout Link
This attribute can be entered in all the pages.

Insert a Link item and add the attribute:

> account=logout-link