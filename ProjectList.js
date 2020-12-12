class ProjectList{
    constructor(tagSelectId, projectListId){
        this.projectList = document.getElementById(projectListId);

        this.projects = [
            new Project(
                "WebGl-Library",
                ["tag1", "tag2"],
                "description"
            ),
            new Project(
                "Title",
                ["tag"],
                "description"
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
