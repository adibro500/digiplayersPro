"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var grid_layout_1 = require("ui/layouts/grid-layout");
var stack_layout_1 = require("ui/layouts/stack-layout");
var platform_1 = require("tns-core-modules/platform");
var tns_oauth_webview_1 = require("./tns-oauth-webview");
var tns_oauth_webview_helper_1 = require("./tns-oauth-webview-helper");
var TnsOAuthPageProvider = (function () {
    function TnsOAuthPageProvider(checkCodeIntercept, authUrl, cancelEventHandler) {
        this._checkCodeIntercept = checkCodeIntercept;
        this._cancelEventHandler = cancelEventHandler;
        this._authUrl = authUrl;
    }
    TnsOAuthPageProvider.prototype.loginPageFunc = function () {
        var wv = new tns_oauth_webview_1.TnsOauthWebView(this._cancelEventHandler);
        tns_oauth_webview_helper_1.TnsOAuthWebViewHelper.initWithWebViewAndIntercept(wv, this._checkCodeIntercept);
        var grid = new grid_layout_1.GridLayout();
        grid.addChild(wv);
        var stack = new stack_layout_1.StackLayout();
        stack.addChild(grid);
        var page = new page_1.Page();
        page.content = stack;
        if (platform_1.isAndroid) {
            page.actionBarHidden = true;
        }
        wv.src = this._authUrl;
        return page;
    };
    ;
    return TnsOAuthPageProvider;
}());
exports.TnsOAuthPageProvider = TnsOAuthPageProvider;
