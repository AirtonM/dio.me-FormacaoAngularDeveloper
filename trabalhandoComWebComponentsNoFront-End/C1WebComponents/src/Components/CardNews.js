class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anônimo");

        const linkTitle = document.createElement("a");
        linkTitle.textContent =  (this.getAttribute("title") || "Sem Post");
        linkTitle.href = this.getAttribute("link=url");
        
        const newsContent = document.createElement("p"); 
        newsContent.textContent = (this.getAttribute("contet") || "Sem conteúdo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("photo") || "https://www.arteparacaneca.com.br/arte-para-caneca/large/306/star-wars-jedi-darth-vader.jpg");
        newsImage.alt = "Foto do vader";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    
    styles(){

    }
}

customElements.define('card-news', CardNews)