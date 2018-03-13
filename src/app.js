var Renderer = (function(){
    var renderer = function(domElementsIds){
        this.headerDiv = document.getElementById(domElementsIds.headerId);
        this.experienceDiv = document.getElementById(domElementsIds.experienceId);
        this.trainingsDiv = document.getElementById(domElementsIds.trainingsId);

        renderer.prototype.renderHeader = function(headerData) {
            this.headerDiv.innerText = "First name: " + headerData.firstName + "\n";
            this.headerDiv.innerText += " Last name: " + headerData.lastName;
        }

        renderer.prototype.renderExperience = function(experience) {
            var experienceList = document.createElement("ul");
                for (var i=0; i<experience.length; i++) {
                    var currentExperience = experience[i];
                    var listItem = document.createElement("li");
                    listItem.innerText = currentExperience;

                    experienceList.appendChild(listItem);
                }

                this.experienceDiv.appendChild(experienceList);
        }
        
    } 

    return renderer;
})();

var elementsIds = {
    headerId : "cv-header",
    experienceId: "cv-experience",
    trainingsId: "cv-trainings"
}

var headerData = {
    firstName: "Magda",
    lastName: "Badura"
}

var cvExperience = ["SP Wieliczka", "PKP", "Mama"];
var cvRenderer = new Renderer(elementsIds);

cvRenderer.renderHeader(headerData);
cvRenderer.renderExperience(cvExperience);