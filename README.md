![YPBF Theme Screenshot](yourpbfriend-ss1-frontpage2.jpg)

# YPBF (YourPbFriend.com) Shopify Theme

YourPbFriend was an industry-leading online paintball retailer with a focus on the first paintball trade-in program. I developed the frontend of the web store, including adding features, creating product galleries, and developing a trade-in web application system.

[Read more...](https://www.isaacyakl.com/work/yourpbfriend)

## Changelog:

### 1.13.3 - 6/7/2016:AnmtnRmvls

=========================================

-  Remove product display/entry animation. product-list-item.liquid:32
-  Remove shadow box animation in favor of scale zoom animation for product hover. theme.scss.liquid:3775-90

### 1.13.2 - 5/24/2016:LdngTimeOptmztn

=========================================

-  Removed upsell script leftovers. theme.liquid:7
-  Remove commented out show title append. theme.liquid:20

*  Change slide sizes from 1440x640 to 1260x560. settings_schema.json:1631-2,1701-2,1771-2,1841-2,1911-2
*  Change home feature sizes from 600xX to 540xX. settings_schema.json:2083,2154,2225,2312,2383,2454,2541,2612,2683
*  Change size of product list images to medium instead of large. product-list-item.liquid:42
*  Change free shipping notification to say "U.S.A." instead of "U.S.". header.liquid:96
*  Minified and stored original source for updating inventory on product pages in update-inventor.js. +update-inventory.js;theme.liquid:148-9
*  Minified contact us information in header and stored original source in contact-us-info.js. +contact-us-info.js;header.liquid:34-5
*  Minified the modified option_selection.js script and embedded it into theme.liquid. theme.liquid:149-50

-  Remove freepik & flaticons attribution under CreativeCommons license 3.0. footer.liquid:157

*  Improve comments on code. footer.liquid:156,161
*  Minified theme.js code and made theme.min.js.liquid obsolete by moving contents into scripts-combined.min.js.liquid. theme.min.js.liquid,scripts-combined.min.js.liquid

-  Remove Facebook widget from homepage footer and Facebook script include. index.liquid:35,theme.liquid:94

*  Correct error in minified version of theme.js which ignored the number of images to display. scripts-combined.min.js.liquid:27-8

-  Preserve original theme.js in theme-BAK.js.liquid.
-  Keep theme.js.liquid for reference and modifying before minifying and embedding into scripts-combined.min.js.liquid.

*  Change instagram image sizes from standard_resolution to low_resolution. scrits-combined.min.js.lqidui:27-8;theme.js.liquid:477

-  Remove main menu from footer menus and fix the layout for three menus instead of four. footer.liquid:85-93,61

*  Move content_for_header liquid tag to scripts section of head. theme.liquid:49

### 1.13.1 - 5/10/2016:PrdctPgLnks

=========================================

-  Add link to "Free Lifetime Labor" badge on product pages. product-form.liquid:62
-  Add different warranty info for new and used guns on product pages. product-form.liquid:61-83

### 1.13.0 - 4/26/2016:UpsellInCart

=========================================

-  Add snippet "ypbf-upsell". ypbf-upsell.liquid
-  Add upsell snippet to cart.liquid. cart.liquid:1
-  Add styling for upsell. theme.scss.liquid:3017-60

*  Optimize facebook sdk include to only include on home page. theme.liquid:89-99

### 1.12.0 - 4/9/2016:RltdPrdcts&ImprvPrds

=========================================

-  Fixed extra space in product list displays around handling times. product-list-item.liquid

*  Add layaway promo to product pages. theme.scss.liquid,product-form.liquid

-  Change height of product promos to 40px. theme.scss.liquid

*  Add grey border/separators to the top and bottom of prodsellpoints. theme.scss.liquid:4074-5
*  Add 10px margin at the bottom of prodsellpoints. theme.scss.liquid:4076

-  Improve stylization of quantity box on product page. theme.scss.liquid:5574-82

*  Remove reviews and ratings for products with "Used" tag. product-list-item.liquid:161-3,product.liquid:29-31,product-form.liquid:51-3

-  Speed up product selling points animation from .5 to .4. theme.scss.liquid:4083

### 1.11.0 - 4/8/2016:PrdctPgRrngImpr

=========================================

-  Add product review badge to product page. product-form.liquid
-  Add stock level indicator to product pages. product-form.liquid,theme.liquid

*  Move quantity field next to "Add to Cart" button. product-form.liquid,theme.scss.liquid
*  Rearrange product page and improve visual appeal. product-form.liquid

-  Add handling time based on inventory levels to product pages. product-form.liquid,theme.liquid

*  Change font-size for options. theme.scss.liquid:5477
*  Add sku update when different variant is chosen. product-form.liquid,theme.liquid
*  Change color of handling time on product in collections. product-list-item.liquid:115
*  Removed "Share This!" from share buttons by making font-size: 0. theme.scss.liquid:7714

### 1.10.2 - 3/29/2016:SchmUpdt

=========================================

-  Remove "YourPbFriend.com" branding from the end of page titles.theme.liquid:28-32

*  Add schema data for sku. product-description.liquid:7

-  Move sku from inside description to above it. product-description.liquid:1-8

*  Disable sidebar menu in mobile view. theme.scss.liquid:7723

-  Updated "Release" tag to "Releases" instead. shiptime-product.liquid:4-5,shiptime-item.liqiud:4-5

### 1.10.1 - 3/15/2016:NtfctnHddnInStck

=========================================

-  Update so that notifications, buttons, and checkboxes (e.g. Pre-Order) will not show up when there is stock for a product. product-form.liquid,shiptime-product.liquid,shiptime-item.liquid,cart.liquid,product-list-item.liquid,email notifications
-  Lower z-index of select wrapper select items (filter options) on collections page to keep from interfering with drop-down menus. theme.scss.liquid:2083

*  Add price on products in a collection even when out of stock. product-list-item.liquid:117-124

-  Change date tag for when a product will be back in stock on back orders to "Back In Stock <Date>" instead of "Back <Date>" which conflicted with back order tag "Back Order". shiptime-item.liquid:13-14,shiptime-product.liquid:13-14
-  Lower z-index of featured images on homepage. theme.scss.liquid:4862
-  Add page.nofollow.liquid template for non-indexed pages.
-  Add code to detect whether to add nofollow meta element or not. theme.liquid:17-9
-  Fix double drop-down menu option arrows on product pages and in cart. Also changed dd arrow style to match main menu dd arrows. theme.scss.liquid:2060-79

### 1.10.0 - 2/19/2016:PrdctNtfsBrdcrmbs

=========================================

-  Add breadcrumbs via Uncomplicated Categories app. breadcrumbs.liquid:2-65
-  Add back order notification to product page. product-form.liquid:12-3

*  Move shipping times from individual files into shiptime-product and shiptime-item liquid files. shiptime-product.liquid,shiptime-item.liquid

-  Add flexibility for shipping times tags and optimize detection code. shiptime-product.liquid,shiptime-item.liquid
-  Add release date and back in stock date tags support for pre-orders and back order items. shiptime-product.liquid,shiptime-item.liquid
-  Add display for product types on products on collection pages. product-list-item.liquid
-  Add product notification system to cart page. cart.liquid:27-37

*  Update notification verbage for pre-order, custom order, and back order types across all pages.

-  Add hover style for disabled buttons too look disabled still. theme.scss.liquid:1925-28

*  Update email notifications theme.

-  Add product notification system for pos receipt and order confirmation email notifications.

*  Change breadcrumb separator to / instead of &rsaquo;. uncomplicated.categories.catbread.liquid.

-  Increase size of breadcrumb separators, add padding, and replace them with forward slashes. uncomplicated.categories.catbread.liquid:5639-43,scripts-combined.js:10

*  Remove animation from promo bar. header.liquid:3
*  Tone down header promo bar text. header.liquid:3,10
*  Improve right arrow in menus used to indicate further menus. Change it from > to \203A and increase size to 16px. theme.scss.liquid:5819-20,28
*  Add delay of 3s before trade now button does its dance. header.liquid:99

### 1.9.2 - 1/26/2016:WeekShipProdTags

=========================================

-  Add week shipping time estimates: 1-2,2-3,3-4,4-6,6-8. product-form.liquid:35-44
-  Add call for availability tag when out of stock and not available. product-form.liquid:53-55
-  Add blockquote style for quoting manufacturers, etc. on website and/or in descriptions. theme.scss.liquid:1625-56

*  Fix Facebook like button url issues. product_fb_like.liquid:1

-  Add Google webmaster verification tag to header. theme.liquid:26

### 1.9.1 - 1/21/2016:ProdTagFixes

=========================================

-  Fix product tag logic issues. product-form.liquid
-  Add padding below product sku on product pages. theme.scss.liquid:5479

### 1.9.0 - 1/19/2016:MoreProdTagsStatuses

=========================================

-  Format placeholder text for search box. theme.scss.liquid:7005-18
-  Add placeholder text to search box on search page. search.liquid:5

*  Move search suggestions box up 22px/change margin-top: 20px to margin-top: -2px; theme.liquid:144-6
*  Move share buttons on collections to below pagination. collection.liquid:97-9;theme.scss.liquid:7533

-  Add style for shipping time notification area. theme.scss.liquid:4000-4
-  Add shipping time tags, notification area, and clean up existing notification options. product-form.liquid:8-44

*  Change image type of featured row and footer promo to .jpg instead of .png. home-feature-row.liquid:28,footer.liquid:19

### 1.8.1 - 1/11/2016:Optmiztn

=========================================

-  Remove brand logos from footer of page. footer.liquid:92

*  Add tag for Holiday Sales message on product page. product-form.liquid:21-23

-  Disable holiday decoration from bottom of page. footer.liquid:94
-  Removed all presets.

*  Changed home-feature-_'s to generate images with 600x_ instead of 1440x\*. settings_schema.json:2083,2154,2225,2312,2383,2454,2541,2612,2683
*  Move Facebook and Instagram social widgets from the footer of every page to the front page only.

-  Add padding to bottom-flow. theme.scss.liquid:6177
-  Add padding to Facebook and Instagram social widgets. index.liquid:29

*  Remove website effects. scripts-combined.js

-  Move social icons to footer after menus. footer.liquid:105

*  Add free shipping notification to top of pages. header.liquid:14-19

-  Update information bar code. header.liquid:27-74

*  Remove trade now text next to trade button. header.liquid:85

-  Update look and feel of product notes on product page. product-form.liquid:8-29
-  Fix responsive issues with Youtube button. theme.scss.liquid:4782
-  Fixed Facebook Like button so it would show again by moving the Facebook sdk code include from Facebook feed widget to after opening <body> tag. theme.liquid:71-80
-  Update position of black-ground.jpg in header and footer to be positioned center top. theme.scss.liquid:6550,6753
-  Optimized slideshow and featured image sizes manually by uploading them to assets folder (DARN YOU SHOPIFY!)

### 1.8.0 - 12/21/2015:Holiday Themes

=========================================

-  Re-enabled Feature Row 1 and made it the main feature row to use.

*  Added fireworks effect and "Happy New Year!" to search bar if it is past New Year's Eve. theme.liquid, header.liquid, fireworks.js, home-slideshow.liquid

-  Added header item ids. header.liquid

*  Removed "snowHere" id from page footer. footer.liquid:120

-  Added feature to disable fireworks if mobile. scripts-combined.js

### 1.7.3 - 12/10/2015:Winter/Christmas Theme

=========================================

-  Added icicles to footer
-  Added snow effect to header
-  Added christmas trees to alert bar message
-  Added reindeer pattern wallpaper
-  Added christmas lights to YourPbFriend.com logo
-  Added "Merry Christmas!" to the search field

### 1.7.2 - 11/27/2015:Gft Crd Cstm

=========================================

-  Removed pointless asset which does not exist, "{% include 'fonts' %}". gift_card.liquid:13

*  Changed gift card background picture to YourPbFriend.com custom one. gift_card.liquid:63-64
*  Changed gift card container border background-color from #34aadc to #D0D0D0. gift-card.scss.liquid:328

### 1.7.1 - 10/30/2015:Shrink Menus

=========================================

-  Changed the height of each menu item in the drop-down menus. theme.scss.liquid
-  Moved share buttons on blog articles from the bottom to the top of the page. article.liquid:1

*  Added "Back Order" string to locale file. en.default.json:253

-  Changed add to cart button text for back order items to "Back Order" instead of "Order". product-form.liquid:64

*  Added Holiday Shipping delay warning for Black Friday and Christmas to all product pages. product-form.liquid:21

### 1.7.0 - 10/9/2015:Bck Ord & Lmtd Ntc

=========================================

-  Added "Order" string to the english locale file for specific order types. en.default.json:252
-  Added back order notification to product pages. product-form.liquid:11-12
-  Added "Order" button for back orders. product-form.liquid:60-62

*  Changed social media icons animation to flip. footer.liquid:57-81

-  Removed animation for company logos wrapper in footer. footer.liquid:93

*  Changed header promotional text to have 14pt and #8fca5b color font. header.liquid:4
*  Update animation for header promotional text. header.liquid:3-4

-  Added limited availability notice to product pages. product-form.liquid:14-16

### 1.6.1 - 10/1/2015:Optmz Ld Tm

=========================================

-  Moved facebook sdk script from header to widget section in footer.liquid.
-  Combined animate.min.css into bottom of theme.scss.liquid.
-  modernizr-2.8.2.min.js moved into scripts-combined.js.

*  Removed empty lines in theme.liquid.

-  wow.min.js moved into scripts-combined.js.

*  Removed empty lines in header.liquid.
*  Removed empty lines in index.liquid.
*  Removed empty lines in page-header.liquid.

-  Combined jquery-1.11.1.min.js into scripts-combined.js.
-  Combined plugins.js into scripts-combined.js.
-  Moved scripts-combined.js include to bottom of page.
-  Moved wow.init() to bottom of page just after scripts-combined.js include.
-  Changed animation from fadeInUpBig to fadeIn for YouTube channel call to action. home-video.liquid:75

*  Removed fadeIn animation from Facebook widget. footer-facebook.liquid:14

-  Added animation to call to action button in YouTube channel call to action. home-video.liquid:77

*  Removed trade now text animation. header.liquid:25

-  Changed animation parameters for trade now button. header.liquid:26

*  Removed commented out code in home-video.liquid
*  Removed empty lines in home-video.liquid
*  Removed empty lines in footer-facebook.liquid
*  Removed empty lines in social-meta.liquid
*  Removed empty lines in 404.liquid
*  Removed empty lines in article.liquid
*  Removed empty lines in blog.liquid
*  Removed empty lines in cart.liquid
*  Removed empty lines in collection.liquid
*  Removed empty lines in customers/account.liquid
*  Removed empty lines in customers/activate_account.liquid
*  Removed empty lines in customers/addresses.liquid
*  Removed empty lines in customers/login.liquid
*  Removed empty lines in customers/order.liquid
*  Removed empty lines in customers/register.liquid
*  Removed empty lines in gift_card.liquid
*  Removed empty lines in list-collections.liquid
*  Removed empty lines in page.contact.liquid
*  Removed empty lines in product.liquid
*  Removed empty lines in search.liquid
*  Removed empty lines in article-list.liquid
*  Removed empty lines in breadcrumbs.liquid
*  Removed empty lines in collection-list-item.liquid
*  Removed empty lines in footer.liquid
*  Removed empty lines in footer-connect.liquid
*  Removed empty lines in footer-facebook.liquid
*  Removed empty lines in footer-instagram.liquid
*  Removed empty lines in footer-link-lists.liquid
*  Removed empty lines in footer-text-box.liquid
*  Removed empty lines in footer-tweet.liquid
*  Removed empty lines in for-looper.liquid
*  Removed empty lines in has-dropdown.liquid
*  Removed empty lines in home-blog-osts.liquid
*  Removed empty lines in home-feature-row.liquid
*  Removed empty lines in home-featured-collections.liquid
*  Removed empty lines in home-featured-products.liquid
*  Removed empty lines in home-imported-content.liquid
*  Removed empty lines in home-slideshow.liquid
*  Removed empty lines in home-video.liquid

-  Changed "Sku" on product pages to uppercase. product-description.liquid:5

*  Removed empty lines in meg-navigation.liquid
*  Removed empty lines in pagination.liquid
*  Removed empty lines in product-description.liquid
*  Removed empty lines in product-form.liquid
*  Removed empty lines in product-images.liquid
*  Removed empty lines in product-list-item.liquid
*  Removed empty lines in share-buttons.liquid
*  Removed empty lines in shipping-calculator.liquid
*  Removed empty lines in sidebar.liquid
*  Removed empty lines in theme-options.liquid
*  Removed comments from zopim.liquid
*  Removed comments for toggle version of share icons. collection.liquid
*  Removed include for SpurIt Pre-Order app. collection.liquid:1
*  Removed files for SpurIt Pre-Order app: spurit_po-cart-snippet.liquid, spurit_po-collection-snippet.liquid, spurit_po-product-snippet.liquid, product-without-spurit_po.liquid, cart-without-spurit-po.liquid, collection-without-spurit_po.liquid
*  Removed include for SpurIt Pre-Order app. product.liquid:1
*  Removed include for SpurIt Pre-Order app. cart.liquid:1

-  Minified theme.js.liquid into theme.min.js.liquid
-  Changed theme.js.liquid script include to theme.min.js.liquid. theme.liquid

### 1.6.0 - 9/29/2015:Search Suggstns

=========================================

-  Removed livesearch branding theme.liquid:153-170

### 1.5.0 - 9/25/2015:Pre-/Cstm Ord Ntcs & Btns

=========================================

-  Added "Pre-Order", "Custom Order", and "Trade Towards" strings to the english locale file for specific order types. en.default.json:250-252
-  Added button color schemes purple, teal, and red. theme.scss.liquid:1806-1886
-  Added pre-order, customer order, and color swap notices to products when particular tags and types are added to the product. product-form.liquid

### 1.4.0 - 9/25/2015:Ltst Uplds

=========================================

-  Added a latest uploads and weekly gun show section on homepage. home-video.liquid;theme.scss.liquid:4590-4650
-  Added a call to action to checkout our YouTube channel below the latest videos section.

*  Updated and optimized animations on the homepage.

-  Removed entrance animations from social media widgets in footer.

### 1.3.1 - 9/22/2015:Optmz Imgs & Enlrg Btm Mns

=========================================

-  Optimized images in slideshow, features, background, and footer brand logos.
-  Enlarged footer menu fonts for improved mobile site ux. theme.scss.liquid:5988-5989,5996
-  Improved tap-ability of credits section for mobile site. footer.liquid:200;theme.scss.liquid:6414-6416,6420-6432

*  Animated social icons to draw more attention to them. footer.liquid:70-100

-  Improved tap-ability for mobile site ux on top menu. theme.scss.liquid:7252-7257

### 1.3.0 - 9/11/2015:Add Articles & Opt Thmbnls

=========================================

-  Added articles section to bottom of pages. footer.liquid:161-8

*  Updated embed video on front page to not use YouTube privacy mode so that it would have a higher res thumbnail. home-video.liquid:25
*  Optimized thumbnail sizes in collections for faster load time; from 'grande' to 'large'. product-list-item.liquid:49

### 1.2.0 - 9/5/2015:Add FB Like Btn To Prdcts

=========================================

-  Added file product_fb_like.liquid for product like button code.
-  Added like buttons to all products product-form.liquid:71-73
-  Added padding below home-modules especially for news blog posts on home page.theme.scss.liquid:3911

### 1.1.7 - 9/5/2015:Add Shipping Exclusions Link

=========================================

-  Added shipping exclusion link to all products product-form.liquid:68

### 1.1.6 - 8/13/2015 - Fix Prdct Rtng,Mny Twks

=========================================

-  Fixed data-id for product ratings/reviews in product-list.item.liquid:100

*  Added "variant-sku" class name to sku field on production page:8

-  Update header email to support@yourpbfriend.com in header.liquid
-  Uppercased DOCTYPE declaration in theme.liquid:1

*  Added "Share this!" to share buttons everywhere. share-buttons.liquid:19

-  Did some rendering tweaks to the share buttons. share-buttons.liquid:18 theme.scss.liquid:7261

*  Removed padding on product form. product-form.liquid:1

-  Updated/improved shipping info box on product pages. product-form.liquid:65

*  Removed sku italics on product pages. themescss.liquid:5249

-  Update dropdown menu shadows to be more shallow. themescss.liquid:5435
-  Update "Trade Now" button animation and iterations to three times. header.liquid:30

*  Removed top border of product form in tablet and mobile sizes. theme.scss.liquid:5046

-  Added code to force star ratings' caption to next line. theme.scss.liquid:3596-3612
-  Added style for job listings on job page. theme.scss.liquid:6286

### 1.1.5 - 8/13/2015 - Update Zopim

=========================================

-  Update Zopim

### 1.1.4 - 8/7/2015 - Add Tracktor,Chnglg

=========================================

-  Added this changelog
-  Improved display of number of cart items when in triple digits in theme.scss.liquid
-  Added "Track Shipment" link to Account page via Tracktor app page
-  Added "Track Shipment" link to Order details page via Tracktor app page

### 1.1.3 - 8/6/2015 - Add Reviews,Home Feat FX&URL

=========================================

-  Added review section for products
-  Added hover effects to featured banners on home page
-  Added url links to the featured banners on home page

### 1.1.2 - 8/4/2015 - Add FB, YT, & SalesRep

=========================================

-  Added Facebook widget to footer
-  Added YouTube video improvements to the home page
-  Added Salesrep selection feature at checkout

### 1.1.1 - 7/31/2015 - Improve Menu

=========================================

-  Added delay before dropdown menus close. Had to use cheap hacks to get it to work in the theme.scss file.

### 1.0 - First Production

=========================================
