export function removeZorrillaPosts(): void {
    const articles = document.getElementsByClassName("abstract-article");
    for (const article of articles) {
        const authors = article.getElementsByClassName("abstract-author");
        let remove = false;
        for (const author of authors)
            if (author.getAttribute("href") == "/autor/mikel-zorrilla")
                remove = true;
        if (remove)
            article.remove();
    }
}
