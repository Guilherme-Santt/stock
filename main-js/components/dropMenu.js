export default function dropMenu() { 
    let dataMenu = document.querySelectorAll('[data-dropdown]');    
    dataMenu.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active')
        outside(this, () => { 
            this.classList.remove('active'); 
        });
    }

    function outside(element, callback) {
        const html = document.documentElement;
        const outside = 'data-outside';

        if(!element.hasAttribute(outside)) {
            html.addEventListener('click', handleOutsideClick);
            element.setAttribute(outside, '');
        }

        // Verifica se o elemento clicado não está dentro do dropdown
        function handleOutsideClick(event){
            if(!element.contains(event.target)) {
                callback()
                removeEventListener('click', handleOutsideClick);
                element.removeAttribute(outside);
            }
        }   
    }
}