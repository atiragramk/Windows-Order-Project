
const tabs = (parentSelector, tabSelector, contentSelector, activeClass) => {
    const tabParent = document.querySelector(parentSelector),
            tabs = tabParent.querySelectorAll(tabSelector),
            tabContent = document.querySelectorAll(contentSelector);

    function showContent (i = 0) {
        tabContent[i].style.display = "block";
        tabs[i].classList.add(activeClass);
    } 

    function hideContent () {
        tabContent.forEach (item => {
            item.style.display = "none";
        });

        tabs.forEach (item => {
            item.classList.remove(activeClass);
        });
    }

    hideContent();
    showContent();

    tabParent.addEventListener('click', e => {
        const target = e.target;
        if (target && 
        (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tabs.forEach ((item , i) => {
                if (target == item || target.parentNode == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
                
    });        

};


export default tabs;