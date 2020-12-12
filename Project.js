class Project {
    constructor(name, tags, description) {
        this.name = name;
        this.tags = new Set(tags);
        this.description = description;
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
        title.innerText = this.name;

        let tagList = document.createElement("div");
        tagList.classList.add("tagList");

        let descriptionElement = document.createElement("article");
        descriptionElement.innerText = this.description;

        this.tags.forEach(function (tag) {
            let tagElement = document.createElement("span");
            tagElement.classList.add("tag");
            tagElement.innerText = tag;
            tagList.appendChild(tagElement);
        });

        section.appendChild(title);
        section.appendChild(tagList);
        section.appendChild(descriptionElement);

        return section;
    }
}

/*
<section>
    <h4>tap-the-black</h4>
    <div class="tagList">
        <span class="tag">game</span>
    </div>

</section>
*/