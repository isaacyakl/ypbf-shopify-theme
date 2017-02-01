# YPBF (YourPbFriend.com) Shopify Theme

1.6.1 - 10/1/2015:Optmz Ld Tm
=========================================
* Moved facebook sdk script from header to widget section in footer.liquid.
* Combined animate.min.css into bottom of theme.scss.liquid.
* modernizr-2.8.2.min.js moved into scripts-combined.js.
- Removed empty lines in theme.liquid.
* wow.min.js moved into scripts-combined.js.
- Removed empty lines in header.liquid.
- Removed empty lines in index.liquid.
- Removed empty lines in page-header.liquid.
* Combined jquery-1.11.1.min.js into scripts-combined.js.
* Combined plugins.js into scripts-combined.js.
* Moved scripts-combined.js include to bottom of page.
* Moved wow.init() to bottom of page just after scripts-combined.js include.
* Changed animation from fadeInUpBig to fadeIn for YouTube channel call to action. home-video.liquid:75
- Removed fadeIn animation from Facebook widget. footer-facebook.liquid:14
+ Added animation to call to action button in YouTube channel call to action. home-video.liquid:77
- Removed trade now text animation. header.liquid:25
* Changed animation parameters for trade now button. header.liquid:26
- Removed commented out code in home-video.liquid
- Removed empty lines in home-video.liquid
- Removed empty lines in footer-facebook.liquid
- Removed empty lines in social-meta.liquid
- Removed empty lines in 404.liquid
- Removed empty lines in article.liquid
- Removed empty lines in blog.liquid
- Removed empty lines in cart.liquid
- Removed empty lines in collection.liquid
- Removed empty lines in customers/account.liquid
- Removed empty lines in customers/activate_account.liquid
- Removed empty lines in customers/addresses.liquid
- Removed empty lines in customers/login.liquid
- Removed empty lines in customers/order.liquid
- Removed empty lines in customers/register.liquid
- Removed empty lines in gift_card.liquid
- Removed empty lines in list-collections.liquid
- Removed empty lines in page.contact.liquid
- Removed empty lines in product.liquid
- Removed empty lines in search.liquid
- Removed empty lines in article-list.liquid
- Removed empty lines in breadcrumbs.liquid
- Removed empty lines in collection-list-item.liquid
- Removed empty lines in footer.liquid
- Removed empty lines in footer-connect.liquid
- Removed empty lines in footer-facebook.liquid
- Removed empty lines in footer-instagram.liquid
- Removed empty lines in footer-link-lists.liquid
- Removed empty lines in footer-text-box.liquid
- Removed empty lines in footer-tweet.liquid
- Removed empty lines in for-looper.liquid
- Removed empty lines in has-dropdown.liquid
- Removed empty lines in home-blog-osts.liquid
- Removed empty lines in home-feature-row.liquid
- Removed empty lines in home-featured-collections.liquid
- Removed empty lines in home-featured-products.liquid
- Removed empty lines in home-imported-content.liquid
- Removed empty lines in home-slideshow.liquid
- Removed empty lines in home-video.liquid
* Changed "Sku" on product pages to uppercase. product-description.liquid:5
- Removed empty lines in meg-navigation.liquid
- Removed empty lines in pagination.liquid
- Removed empty lines in product-description.liquid
- Removed empty lines in product-form.liquid
- Removed empty lines in product-images.liquid
- Removed empty lines in product-list-item.liquid
- Removed empty lines in share-buttons.liquid
- Removed empty lines in shipping-calculator.liquid
- Removed empty lines in sidebar.liquid
- Removed empty lines in theme-options.liquid
- Removed comments from zopim.liquid
- Removed comments for toggle version of share icons. collection.liquid
- Removed include for SpurIt Pre-Order app. collection.liquid:1
- Removed files for SpurIt Pre-Order app: spurit_po-cart-snippet.liquid, spurit_po-collection-snippet.liquid, spurit_po-product-snippet.liquid, product-without-spurit_po.liquid, cart-without-spurit-po.liquid, collection-without-spurit_po.liquid
- Removed include for SpurIt Pre-Order app. product.liquid:1
- Removed include for SpurIt Pre-Order app. cart.liquid:1
* Minified theme.js.liquid into theme.min.js.liquid
* Changed theme.js.liquid script include to theme.min.js.liquid. theme.liquid

1.6.0 - 9/29/2015:Search Suggstns
=========================================
+ Removed livesearch branding theme.liquid:153-170

1.5.0 - 9/25/2015:Pre-/Cstm Ord Ntcs & Btns
=========================================
+ Added "Pre-Order", "Custom Order", and "Trade Towards" strings to the english locale file for specific order types. en.default.json:250-252
+ Added button color schemes purple, teal, and red. theme.scss.liquid:1806-1886
+ Added pre-order, customer order, and color swap notices to products when particular tags and types are added to the product. product-form.liquid

1.4.0 - 9/25/2015:Ltst Uplds
=========================================
+ Added a latest uploads and weekly gun show section on homepage. home-video.liquid;theme.scss.liquid:4590-4650
+ Added a call to action to checkout our YouTube channel below the latest videos section.
* Updated and optimized animations on the homepage.
- Removed entrance animations from social media widgets in footer.

1.3.1 - 9/22/2015:Optmz Imgs & Enlrg Btm Mns
=========================================
* Optimized images in slideshow, features, background, and footer brand logos.
* Enlarged footer menu fonts for improved mobile site ux. theme.scss.liquid:5988-5989,5996
* Improved tap-ability of credits section for mobile site. footer.liquid:200;theme.scss.liquid:6414-6416,6420-6432
+ Animated social icons to draw more attention to them. footer.liquid:70-100
* Improved tap-ability for mobile site ux on top menu. theme.scss.liquid:7252-7257

1.3.0 - 9/11/2015:Add Articles & Opt Thmbnls
=========================================
+ Added articles section to bottom of pages. footer.liquid:161-8
* Updated embed video on front page to not use YouTube privacy mode so that it would have a higher res thumbnail. home-video.liquid:25
* Optimized thumbnail sizes in collections for faster load time; from 'grande' to 'large'. product-list-item.liquid:49

1.2.0 - 9/5/2015:Add FB Like Btn To Prdcts
=========================================
+ Added file product_fb_like.liquid for product like button code.
+ Added like buttons to all products product-form.liquid:71-73
+ Added padding below home-modules especially for news blog posts on home page.theme.scss.liquid:3911

1.1.7 - 9/5/2015:Add Shipping Exclusions Link
=========================================
+ Added shipping exclusion link to all products product-form.liquid:68

1.1.6 - 8/13/2015 - Fix Prdct Rtng,Mny Twks
=========================================
* Fixed data-id for product ratings/reviews in product-list.item.liquid:100
+ Added "variant-sku" class name to sku field on production page:8
* Update header email to support@yourpbfriend.com in header.liquid
* Uppercased DOCTYPE declaration in theme.liquid:1
+ Added "Share this!" to share buttons everywhere. share-buttons.liquid:19
* Did some rendering tweaks to the share buttons. share-buttons.liquid:18 theme.scss.liquid:7261
- Removed padding on product form. product-form.liquid:1
* Updated/improved shipping info box on product pages. product-form.liquid:65
- Removed sku italics on product pages. themescss.liquid:5249
* Update dropdown menu shadows to be more shallow. themescss.liquid:5435
* Update "Trade Now" button animation and iterations to three times. header.liquid:30
- Removed top border of product form in tablet and mobile sizes. theme.scss.liquid:5046
+ Added code to force star ratings' caption to next line. theme.scss.liquid:3596-3612
+ Added style for job listings on job page. theme.scss.liquid:6286

1.1.5 - 8/13/2015 - Update Zopim
=========================================
+ Update Zopim

1.1.4 - 8/7/2015 - Add Tracktor,Chnglg
=========================================
+ Added this changelog
+ Improved display of number of cart items when in triple digits in theme.scss.liquid
+ Added "Track Shipment" link to Account page via Tracktor app page
+ Added "Track Shipment" link to Order details page via Tracktor app page

1.1.3 - 8/6/2015 - Add Reviews,Home Feat FX&URL
=========================================
+ Added review section for products
+ Added hover effects to featured banners on home page
+ Added url links to the featured banners on home page

1.1.2 - 8/4/2015 - Add FB, YT, & SalesRep
=========================================
+ Added Facebook widget to footer
+ Added YouTube video improvements to the home page
+ Added Salesrep selection feature at checkout

1.1.1 - 7/31/2015 - Improve Menu
=========================================
+ Added delay before dropdown menus close. Had to use cheap hacks to get it to work in the theme.scss file.


1.0 - First Production
=========================================
