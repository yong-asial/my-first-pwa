const API_KEY = 'PUT_YOUR_NEWSAPI_KEY_HERE';
const source = 'google-news';
const url = 'https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + API_KEY;

async function fetchNews() {
    try {
        const result = await fetch(url).then(response => response.json());
        const articles = result.articles;
        let content = '';
        articles.forEach(article => {
            if (article && article.title && article.description) {
                let piece = `
                    <article>
                        <h1><a href="${article.url}" target="_blank">${article.title}</a></h1>
                        <img src="${article.urlToImage}" onerror="this.src='/images/no-image-icon.png'" width="100px" height="100px" />
                        <p>${article.description}</p>
                    </article>
                `;
                content += piece;
            }
        });
        document.getElementById('news').innerHTML = content;
    } catch (e) {
        console.error('could not fetch news', e);
    }
}

fetchNews();