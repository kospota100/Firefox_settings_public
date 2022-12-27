// user.js ## Custom




/*
====================

一般 config 設定

====================
*/

user_pref("browser.tabs.loadBookmarksInBackground", true);
// 在背景開啟書籤

user_pref("browser.bookmarks.openInTabClosesMenu", false);
// 開啟書籤後不收回資料夾

user_pref("browser.tabs.insertAfterCurrent", true);
// 在當前分頁的右側開啟新分頁，而不是所有分頁的最右側
// 當在書籤列上對書籤點擊右鍵選單，並選擇「用新分頁開啟」時，將值設為 True 時會在目前分頁的右側開啟分頁

user_pref("browser.tabs.warnOnClose", true);
// 啟用/停用關閉多個分頁時的警告

user_pref("extensions.pocket.enabled", false);
// 啟用/停用 Pocket

user_pref("browser.proton.enabled", false);
// 啟用/停用 Proton UI (僅作用於 89.0 以前的版本)

user_pref("browser.proton.contextmenus.enabled", false);
// 啟用/停用 Proton UI Context menu(僅作用於 89.0 以前的版本)

user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
// 啟用/停用播放影片時出現的子母畫面開關

user_pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true);
// 啟用/停用子母畫面的音量控制鈕

user_pref("accessibility.typeaheadfind", false);
user_pref("accessibility.typeaheadfind.manual", false);
// 停用 Quick Find （隨打隨找）

// user_pref("", );
// user_pref("", );
// user_pref("", );
// user_pref("", );
// user_pref("", );



/*
==========================

偏好設定（preferences）

==========================
*/

user_pref("browser.download.autohideButton", false);
// 在沒有下載內容時保持顯示下載按鈕

// user_pref("browser.download.lastDir", "");
// 設定下載路徑

user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.tabs", false);
// 設定搜尋欄要在 This time, search with 隱藏的搜尋引擎按鈕

user_pref("browser.search.hiddenOneOffs", "Google");
// 設定搜尋欄要在 This time, search with 隱藏的搜尋引擎按鈕

user_pref("browser.startup.homepage", "about:blank");
// 設定首頁與新視窗開啟的預設頁面
user_pref("browser.newtabpage.enabled", false);
// 設定新分頁開啟時的預設頁面為空白頁

user_pref("font.name.monospace.zh-TW", "Microsoft JhengHei");
user_pref("font.name.sans-serif.zh-TW", "Microsoft JhengHei");
// 設定無襯線字型與等寬字型

user_pref("browser.toolbars.bookmarks.visibility", "always");
// 設定書籤列是否保持顯示

user_pref("layout.spellcheckDefault", 0);
// 是否檢查拼字

user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// 是否讓 Firefox 推薦新 Addon 或新功能

user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// 自訂 Firefox 首頁的顯示內容

user_pref("browser.search.suggest.enabled", false);
// 不顯示來自搜尋引擎的搜尋建議
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
// 讓搜尋建議顯示在瀏覽紀錄的搜尋建議前面

user_pref("browser.urlbar.suggest.bookmark", true);
// 書籤
user_pref("browser.urlbar.suggest.engines", false);
// 搜尋引擎
user_pref("browser.urlbar.suggest.history", false);
// 歷史紀錄
user_pref("browser.urlbar.suggest.openpage", false);
// 開啟的分頁
user_pref("browser.urlbar.suggest.topsites", false);
// 捷徑
// 選擇要在網址列顯示的搜尋建議

user_pref("privacy.donottrackheader.enabled", true);
// 是否預設傳送 Do not track 信號

user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"zoom-controls\",\"sidebar-button\",\"stop-reload-button\",\"urlbar-container\",\"save-to-pocket-button\",\"downloads-button\",\"library-button\",\"fxa-toolbar-menu-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"customizableui-special-spring7\",\"customizableui-special-spring8\",\"alltabs-button\",\"tabbrowser-tabs\",\"new-tab-button\"],\"PersonalToolbar\":[\"customizableui-special-spring5\",\"customizableui-special-spring6\",\"preferences-button\",\"history-panelmenu\",\"bookmarks-menu-button\",\"add-ons-button\",\"personal-bookmarks\",\"customizableui-special-spring2\",\"sync-button\"]},\"seen\":[\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\",\"toolbar-menubar\",\"TabsToolbar\"],\"currentVersion\":17,\"newElementCount\":8}");
// 自訂 Toolbar