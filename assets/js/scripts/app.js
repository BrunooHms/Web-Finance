document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#main-nav a[data-page]');
    const contentDiv = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPageContent(page);
        });
    });

    
    loadPageContent('visao_geral');

    function loadPageContent(page) {
        const url = `conteudo/conteudo_${page}.html`;  
        showLoading();

        fetch(url)
            .then(response => {
                hideLoading();
                if (!response.ok) {
                    throw new Error('Erro ao buscar o conteúdo');
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;  
                loadScriptForPage(page);
            })
            .catch(error => {
                console.error('Erro:', error);
                contentDiv.innerHTML = 'Erro ao carregar o conteúdo.';
            });
    }

    function loadScriptForPage(page) {
        
        const existingScript = document.getElementById('dynamic-script');
        if (existingScript) {
            existingScript.parentNode.removeChild(existingScript);
        }

        // Cria um novo elemento script
        const script = document.createElement('script');
        script.id = 'dynamic-script';
        script.src = `assets/js/scripts/script_${page}.js`;  
        script.onload = () => {
            console.log(`Script para ${page} carregado.`);
        };

        
        document.body.appendChild(script);
    }

    

    function showLoading() {
        const loadingIndicator = document.createElement('div');
        loadingIndicator.id = 'loading-indicator';
        loadingIndicator.innerHTML = 'Carregando...';
        document.body.appendChild(loadingIndicator);
    }

    function hideLoading() {

        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
            document.body.removeChild(loadingIndicator);
        }
    }
});