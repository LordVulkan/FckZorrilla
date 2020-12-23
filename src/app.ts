export function removeZorrillaPosts(): void {
    const articles = document.getElementsByClassName("abstract-article");
    for (const article of articles) {
        const authors = article.getElementsByClassName("abstract-author");
        console.log("test");
        let remove = false;
        for (const author of authors)
            if (author.getAttribute("href") == "/autor/mikel-zorrilla")
                remove = true;
        if (remove)
            article.remove();
    }
}

export function deletePostersTitles(): void {
    const posters = document.getElementsByClassName("poster-title");
    for (const poster of posters) {
        const titles = poster.getElementsByTagName("a");
        for (const title of titles) {
            title.innerText = "";
        }
    }
}