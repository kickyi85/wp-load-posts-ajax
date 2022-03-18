/*
 * SHOW WP-Posts
 *
 * PARMS
 *  - category（Comma separated）
 *  - limit
 *  - width
 *  - fontsize
 * 
 * USAGE
 * <table class="wp_posts" data-url="https://example.com" data-category="10,15" data-limit="5" data-width="500" data-fontsize="14">
 * <script src="wp-posts.js"></script>
 * 
 *  AUTHOR : Fukuda-Gikou
 *  CREATED : 2022/03/18
 */

const addRaw = (elm) => {
  const wp_target = elm;
  const wp_url = wp_target.dataset.url;
  const wp_categories = wp_target.dataset.category;
  const wp_limit = (wp_target.dataset.limit) ? wp_target.dataset.limit : 5;
  const wp_width = (wp_target.dataset.width) ? wp_target.dataset.width : 700;
  const wp_fontsize = (wp_target.dataset.fontsize) ? wp_target.dataset.fontsize : 12;
  wp_target.style.cssText = `
            display: block;
            margin: 0 auto;
            max-width: ${wp_width}px;
        `;

  const url = `${wp_url}/wp-json/wp/v2/posts?categories=${wp_categories}&filter[orderby]=date&order=desc`;
  const imageLinksAsync = async() => {
    const fetchLinksUrl = await fetch(url);
    const linksUrlData = await fetchLinksUrl.json();
    for (var i = 0; i < linksUrlData.length; i++) {
      let wp_date = linksUrlData[i].date.replace(/(\d\d\d\d)-(\d\d)-(\d\d)T.*/, "$1/$2/$3");
      let wp_title = linksUrlData[i].title.rendered;
      let wp_link = linksUrlData[i].link;
      wp_target.insertAdjacentHTML('beforeend', '<tr><th style="font-size:' + wp_fontsize + 'px; border:none; white-space: nowrap;font-weight:100;padding:10px 15px 0 10px;vertical-align: top;">' + wp_date + '</th><td style="font-size:' + wp_fontsize + 'px; border:none; font-weight:100;padding:10px 10px 15px 0;"><a href=' + wp_link + ' target="_blank" >' + wp_title + '</a></td></tr>');
    }
  };
  imageLinksAsync();
}
const wp_classes = document.getElementsByClassName("wp_posts");
for (var i = 0; i < wp_classes.length; i++) {
  addRaw(wp_classes[i])
}
