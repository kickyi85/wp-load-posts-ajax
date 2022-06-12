# Wordpress load Posts by Ajax
外部サイトからWordPressの記事をAjax経由で読み込むJavascript

## 使い方
https://www.fukuda-gikou.co.jp/performance/app/100/

```html
 <table class="wp_posts" data-url="https://example.com" data-category="10,15" data-limit="5" data-width="500" data-fontsize="14">
 <script src="wp-posts.js"></script>
```
## Parameter
※ `data-category`は`category id` を`カンマ区切り`で指定

|key|type|value|
|--|--|--|
|data-url|string|https://www.hoge.com|
|data-category|int（comma split）|1,5|
|data-limit|int|5|
|data-fontsize|int|14|

## sample

```html

<!DOCTYPE html>
<html lang="ja">
<head>
	<meta name="robots" content="noindex">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>wp-load-posts-ajax</title>
</head>
<body>
	<table class="wp_posts" data-url="https://www.fukuda-gikou.co.jp" data-category="10,15,1" data-limit="5" data-width="500" data-fontsize="14">
	<script src="wp-posts.js"></script>
</body>
</html>
 ```
