<template>
    <header>
        <!-- Header top area start -->
        <div class="header-top">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col">
                        <div class="welcome-text">
                            <p>World Wide Completely Free Returns and Shipping</p>
                        </div>
                    </div>
                    <div class="col d-none d-lg-block">
                        <div class="top-nav">
                            <ul>
                                <li><a href="tel:0123456789"><i class="fa fa-phone"></i> +012 3456 789</a></li>
                                <li><a><i class="fa fa-envelope-o"></i>
                                        demo@example.com</a></li>
                                <li>
                            <router-link :to="{ name: 'Account' }"><i class="fa fa-user"></i> Account</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header top area end -->
        <!-- Header action area start -->
        <div class="header-bottom  d-none d-lg-block">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-3 col">
                        <div class="header-logo">

                            <router-link :to="{ name: 'Home' }"></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="search-element">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button><i class="pe-7s-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col">
                        <div class="header-actions">
                            <!-- Single Wedge Start -->
                            <router-link :to="{name:'Wishlist'}" class="header-action-btn offcanvas-toggle">
                                <i class="pe-7s-like"></i>
                            </router-link>
                            <!-- Single Wedge End -->
                            <router-link :to="{name : 'Cart'}" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="pe-7s-shopbag"></i>
                                <span class="header-action-num">01</span>
                                <!-- <span class="cart-amount">€30.00</span> -->
                            </router-link>
                            <a href="#offcanvas-mobile-menu"
                                class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i class="pe-7s-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header action area end -->
        <!-- Header action area start -->
        <div class="header-bottom d-lg-none sticky-nav style-1">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-3 col">
                        <div class="header-logo">
                            <a href="index.html"><img src="/src/assets/images/logo/logo.png" alt="Site Logo" /></a>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="search-element">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button><i class="pe-7s-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col">
                        <div class="header-actions">
                            <!-- Single Wedge Start -->
                            <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                <i class="pe-7s-like"></i>
                            </a>
                            <!-- Single Wedge End -->
                            <a href="#offcanvas-cart"
                                class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="pe-7s-shopbag"></i>
                                <span class="header-action-num">01</span>
                                <!-- <span class="cart-amount">€30.00</span> -->
                            </a>
                            <a href="#offcanvas-mobile-menu"
                                class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i class="pe-7s-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header action area end -->
        <!-- header navigation area start -->
        <div class="header-nav-area d-none d-lg-block sticky-nav">
            <div class="container">
                <div class="header-nav">
                    <div class="main-menu position-relative">
                        <ul>
                            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>

                            <li><router-link :to="{ name: 'About' }">About</router-link></li>

                            <li class="dropdown position-static"><a href="#">Pages <i class="fa fa-angle-down"></i></a>
                                <ul class="mega-menu d-block">
                                    <li class="d-flex">
                                        <ul class="d-block">
                                            <li class="title"><router-link :to="{ name: 'Home' }">Inner
                                                    Pages</router-link></li>
                                            <li><router-link :to="{ name: 'notfound' }">404</router-link></li>
                                            <li><router-link :to="{ name: 'OrderTracking' }">OrderTracking</router-link>
                                            </li>
                                            <li><router-link :to="{ name: 'Faq' }">Faq</router-link></li>
                                            <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                                        </ul>
                                        <ul class="d-block">
                                            <li class="title"><a href="#">Other Shop Pages</a></li>
                                            <li><router-link :to="{ name: 'Cart' }">Cart</router-link></li>
                                            <li><router-link :to="{ name: 'Checkout' }">Checkout</router-link></li>
                                            <li><router-link :to="{ name: 'Wishlist' }">Wishlist</router-link></li>
                                        </ul>
                                        <ul class="d-block">
                                            <li><router-link :to="{ name: 'Account' }">Account</router-link></li>
                                            <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
                                            <li><router-link :to="{ name: 'ThankYou' }">ThankYou</router-link></li>
                                        </ul>
                                        <ul
                                            class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                            <li>
                                                <a class="p-0" href="shop-left-sidebar.html"><img
                                                        class="img-responsive w-100"
                                                        src="/src/assets/images/banner/menu-banner.png" alt=""></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                          
                            <li class="dropdown "><a href="#">Shop <i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li class="dropdown position-static"><router-link :to="{ name: 'ProductList' }">Product
                                            <i class="fa fa-angle-right"></i></router-link>
                                        <ul class="sub-menu sub-menu-2">
                                            <li><router-link :to="{ name: 'ProductList' }">Product List</router-link></li>
                                        </ul>
                                    </li>
                                   
                                </ul>
                            </li>

                            <li class="dropdown "><a href="#">Blog <i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li class="dropdown position-static"><router-link :to="{ name: 'BlogList' }">Blog
                                            <i class="fa fa-angle-right"></i></router-link>
                                        <ul class="sub-menu sub-menu-2">
                                            <li><router-link :to="{ name: 'BlogList' }">Blog List</router-link></li>
                                        </ul>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- header navigation area end -->
        <div class="mobile-search-box d-lg-none">
            <div class="container">
                <!-- mobile search start -->
                <div class="search-element max-width-100">
                    <form action="#">
                        <input type="text" placeholder="Search" />
                        <button><i class="pe-7s-search"></i></button>
                    </form>
                </div>
                <!-- mobile search start -->
            </div>
        </div>
    </header>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

</script>
