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
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 10px
            }
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            .card__left > span {
                font-weight: 400;
            }
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-wight: bold;
            }
            .card__left > p {
                color: rgba(70,70,70);
            }
            .card__right > img {
                width: 600px!important;
                heigth: 400px!important;
            }
        `;
        return style;
    }
}

customElements.define('card-news', CardNews)