export default function serviceModal() {
    let btns = document.querySelectorAll('#openModal');
    let containerModal = document.querySelector('.containerModal')

    if(btns.length > 0 && containerModal) {
        btns.forEach((btn) => {       
            btn.addEventListener('click', toggleModal)

            function toggleModal() {
                let templates = document.querySelectorAll('.template-modal')

                templates.forEach((template) => { 
                    if(this.dataset.valor == template.dataset.modal) {
                        containerModal.classList.add('active')
                        template.style.display = 'block'

                        closeModal(template, () => {
                            containerModal.classList.remove('active')
                        })
                    } 
                });
            }

            
            function closeModal(template, callback) {
                const html = document.documentElement;

                html.addEventListener('click', (e) => {
                    if(e.target.classList.contains('fechaModal') || e.target.classList.contains('containerModal')) {
                        template.style.display = 'none'
                        callback();
                    }
                })
            }   
        });
    }
}

