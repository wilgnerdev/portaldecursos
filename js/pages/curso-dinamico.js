// js/pages/curso-dinamico.js
// Lê o parâmetro ?curso= da URL, busca o curso em cursos.js
// e injeta os dados no template estático de detalhe do curso

import { getCursoPorId, notaPcD } from "../data/cursos.js";

function montarPaginaCurso() {
    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get("curso");
    const curso = getCursoPorId(cursoId);

    if (!curso) {
        exibirCursoNaoEncontrado();
        return;
    }

    preencherTextos(curso);
    preencherBanner(curso);
    preencherHabilidades(curso.habilidades);
    preencherFicha(curso);
}

function preencherTextos(curso) {
    document.title = `${curso.titulo} | Pão dos Pobres`;
    document.getElementById("curso-titulo").textContent = curso.titulo;
    document.getElementById("curso-resumo").textContent = curso.resumoBanner;
    document.getElementById("curso-sobre").textContent = curso.sobre;
    document.getElementById("curso-sidebar-titulo").textContent = curso.titulo;
}

function preencherBanner(curso) {
    const banner = document.getElementById("curso-banner");
    if (curso.imagemBanner) {
        banner.style.setProperty(
            "--curso-imagem-banner",
            `url('../../assets/images/${curso.imagemBanner}')`
        );
    }
}

function preencherHabilidades(habilidades) {
    const container = document.getElementById("curso-skills");
    container.innerHTML = "";

    if (!habilidades || habilidades.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "secao-texto";
        aviso.textContent = "Conteúdo programático em atualização.";
        container.appendChild(aviso);
        return;
    }

    habilidades.forEach((habilidade, indice) => {
        container.appendChild(criarLinhaHabilidade(habilidade, indice));
    });
}

function criarLinhaHabilidade(habilidade, indice) {
    const temTopicos = Array.isArray(habilidade.topicos) && habilidade.topicos.length > 0;

    const row = document.createElement("div");
    row.className = "skill-row";

    // Cabeçalho: <button> se expansível, <div> se não houver tópicos
    const cabecalho = document.createElement(temTopicos ? "button" : "div");
    cabecalho.className = "skill-cabecalho";

    const titulo = document.createElement("p");
    titulo.className = "skill-titulo";
    titulo.textContent = habilidade.titulo;

    cabecalho.appendChild(titulo);
    row.appendChild(cabecalho);

    if (!temTopicos) {
        // Fallback: mantém o comportamento antigo com descrição estática
        if (habilidade.descricao) {
            const sub = document.createElement("p");
            sub.className = "skill-sub";
            sub.textContent = habilidade.descricao;
            row.appendChild(sub);
        }
        return row;
    }

    // Seta
    const seta = document.createElement("i");
    seta.className = "ti ti-chevron-down skill-seta";
    seta.setAttribute("aria-hidden", "true");
    cabecalho.appendChild(seta);

    // Painel expansível
    const painelId = `skill-painel-${indice}`;
    cabecalho.type = "button";
    cabecalho.setAttribute("aria-expanded", "false");
    cabecalho.setAttribute("aria-controls", painelId);

    const painel = document.createElement("div");
    painel.className = "skill-painel";
    painel.id = painelId;

    const interno = document.createElement("div");
    interno.className = "skill-painel-interno";

    const lista = document.createElement("ul");
    lista.className = "skill-topicos";
    habilidade.topicos.forEach((texto) => {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);
    });

    interno.appendChild(lista);
    painel.appendChild(interno);
    row.appendChild(painel);

    cabecalho.addEventListener("click", () => {
        const aberto = row.classList.toggle("aberto");
        cabecalho.setAttribute("aria-expanded", String(aberto));
    });

    return row;
}

function preencherFicha(curso) {
    const { fichaTecnica, turnos } = curso;

    document.getElementById("curso-carga-horaria").textContent = fichaTecnica.cargaHoraria;
    document.getElementById("curso-modalidade").textContent = fichaTecnica.modalidade;
    document.getElementById("curso-idade").textContent = fichaTecnica.idade;
    document.getElementById("curso-escolaridade").textContent = fichaTecnica.escolaridadeMinima;
    document.getElementById("curso-nota-pcd").textContent = `*${notaPcD}`;

    const textoTurnos = turnos
        .map((t) => (t.observacao ? `${t.turno} (${t.observacao})` : t.turno))
        .join(" · ");
    document.getElementById("curso-turnos").textContent = textoTurnos;
}

function exibirCursoNaoEncontrado() {
    const main = document.querySelector(".curso-detalhes-main");
    const banner = document.getElementById("curso-banner");
    const formulario = document.querySelector("site-form");

    if (banner) banner.style.display = "none";
    if (formulario) formulario.style.display = "none";

    main.innerHTML = `
        <div class="secao-curso" style="grid-column: 1 / -1; text-align: center;">
            <h2 class="secao-titulo">Curso não encontrado</h2>
            <p class="secao-texto" style="max-width: 100%">
                O link acessado não corresponde a nenhum curso disponível.
                Volte para a <a href="/index.html">página inicial</a> e escolha um curso na lista.
            </p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", montarPaginaCurso);