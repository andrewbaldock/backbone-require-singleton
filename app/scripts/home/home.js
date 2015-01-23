/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'broker',
    'nav-item',
    './views/home'
], function ($, _, Backbone, broker, NavItemView, HomeView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        initialize: function() {

            var navItem = new NavItemView('Home','','showHome');

            this.route(navItem.route, navItem.handler);
            broker.channel('nav').publish('register', navItem);
        },

        showHome: function(){
            broker.channel('container').publish('show', new HomeView());
        },

        showAbout: function(){
            broker.channel('container').publish('show', new AboutView());
        }

    });

    return new MainRouter();
});