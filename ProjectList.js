class ProjectList{
    constructor(tagSelectId, projectListId){
        this.projectList = document.getElementById(projectListId);

        this.projects = [
            new Project(
                "Programming",
                ["JavaScript", "DHBW", "NodeJS", "Game", "done"],
                "a simple textadventure",
                "images/Programming.png",
                "images/Programming.png"
            ),
            new Project(
                "chatserver",
                ["JavaScript", "DHBW", "Server", "NodeJS", "done"],
                "a simple chat server",
                "images/chatserver-Icon.png",
                "images/chatserver.png"
            ),
            new Project(
                "Arduino-Tutorial",
                ["HTML", "Tutorial", "done"],
                "This is a little Arduino Tutorial Page.",
                "images/Arduino-Tutorial-Icon.png",
                "images/Arduino-Tutorial.png"
            ),
            new Project(
                "WebGl-Library",
                ["JavaScript", "Library", "done"],
                "JavaScript Library for simple 3d Objects using WebGl",
                "images/WebGl-Library-Icon.png",
                "images/WebGl-Library.png"
            ),
            new Project(
                "Magic-vs-Monsters",
                ["JavaScript", "Game", "unfinished"],
                "A open-source grid-based tower-defense game.",
                "images/none.jpeg",
                "images/none.jpeg"
            ),
            new Project(
                "tap-the-black",
                ["JavaScript", "Game", "done"],
                "",
                "images/none.jpeg",
                "images/tap-the-black.png"
            ),
            new Project(
                "world-eater",
                ["JavaScript", "Game", "unfinished"],
                "a game",
                "images/none.jpeg",
                "images/world-eater.png"
            ),
            new Project(
                "HabiHase-Web",
                ["JavaScript", "Game", "scrapped"],
                "description",
                "images/none.jpeg",
                "images/none.jpeg"
            ),
            new Project(
                "python-tutorial",
                ["HTML", "Tutorial", "done"],
                "description",
                "images/none.jpeg",
                "images/none.jpeg"
            ),
            new Project(
                "oddly-satisfying",
                ["JavaScript", "Animation", "done"],
                "description",
                "images/none.jpeg",
                "images/oddly-satisfying.png"
            ),
            new Project(
                "KellerAutomat",
                ["Java", "scrapped"],
                "Ein Kellerautomat Beispiel",
                "images/none.jpeg",
                "images/none.jpeg"
            ),
            new Project(
                "HabiHase",
                ["Java", "Game", "scrapped"],
                "abigame.com projekt",
                "images/none.jpeg",
                "images/none.jpeg"
            )
        ];

        this.select = document.getElementById(tagSelectId);
	
        let allTags = new Set();
        for (let i = 0; i < this.projects.length; i++) {
            let tags = this.projects[i].getTags();
            tags.forEach(function(tag){
                allTags.add(tag);
            });
        }

        let option = document.createElement("option");
        option.innerText = "-no filter-";
        option.value = "";
        this.select.appendChild(option);

        let iterator = allTags.values();
        for(let tag of iterator){
            let option = document.createElement("option");
            option.innerText = tag;
            option.value = tag;
            this.select.appendChild(option);
        }

        this.updateProjectList();
    }

    updateProjectList(){
        this.projectList.innerHTML = "";
    
        let searchTag = this.select.value;
        if(searchTag === ""){
            for(let i=0;i<this.projects.length;i++){
                this.projectList.appendChild(this.projects[i].toHTML());
            }
        }else{
            for(let i=0;i<this.projects.length;i++){
                if(this.projects[i].hasTag(searchTag)){
                    this.projectList.appendChild(this.projects[i].toHTML());
                }
            }
        }
    }
}
