class Project {
    constructor(name, tags, description, iconSrc, imageSrc) {
        this.name = name;
        this.tags = new Set(tags);
        this.description = description;
        this.iconSrc = iconSrc;
        this.imageSrc = imageSrc;
    }

    getTags() {
        return this.tags;
    }

    hasTag(tag) {
        return this.tags.has(tag);
    }

    toHTML() {
        let section = document.createElement("section");

        let title = document.createElement("h4");
        let link = document.createElement("a");
        link.href = "https://github.com/AntVil/" + this.name;
        title.appendChild(link);
        link.innerText = this.name;

        let tagList = document.createElement("div");
        tagList.classList.add("tagList");

        let icon = document.createElement("img");
        icon.src = this.iconSrc;
        icon.classList.add("icon");

        let image = document.createElement("img");
        image.src = this.imageSrc;
        image.classList.add("image");

        let descriptionElement = document.createElement("p");
        descriptionElement.classList.add("description");
        descriptionElement.innerText = this.description;

        this.tags.forEach(function (tag) {
            let tagElement = document.createElement("span");
            tagElement.classList.add("tag");
            tagElement.innerText = tag;
            tagList.appendChild(tagElement);
        });

        section.appendChild(title);
        section.appendChild(icon);
        section.appendChild(image);
        section.appendChild(document.createElement("br"));
        section.appendChild(tagList);
        section.appendChild(descriptionElement);

        return section;
    }
}

/*
<section>
    <h4><a>tap-the-black</a></h4>
    <img class="icon">
    <img class="image">
    <br>
    <div class="tagList">
        <span class="tag">game</span>
    </div>
    <p class="description"></p>
</section>
*/