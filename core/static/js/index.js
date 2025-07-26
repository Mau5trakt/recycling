document.addEventListener("DOMContentLoaded", () => {



    let galleryModal = document.getElementById("galleryModal");
    let modal= document.getElementById("modal");

    let displayModalForm = () =>{
        modal.showModal();
    }

    let displayImg = () =>{
        let target = galleryModal.querySelector("#imgTarget");
        if (target.childNodes.length > 0 ) {
            target.removeChild(target.childNodes[0]);
        }
        let imageTag = document.createElement("img");
        imageTag.setAttribute("src", event.target.src);
        target.appendChild(imageTag);
        galleryModal.showModal();

    }


    galleryModal.addEventListener("cancel", () =>{
        galleryModal.close();
    })



    document.addEventListener("click",()=>{
        console.log(event.target)
    if (event.target.closest("#galleryImg")){
        displayImg();
    }else if(event.target.closest("#closeGalleryIcon")){
        galleryModal.close();
    }else if(event.target.closest("#formRegistration")){
        displayModalForm();
    }

})


})

