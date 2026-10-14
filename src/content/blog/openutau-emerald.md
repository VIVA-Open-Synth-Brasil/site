---
title: "OpenUtau Emerald: conheça o fork UtauV do projeto Emerald"
description: "Uma introdução ao OpenUtau Emerald, conhecido publicamente como UtauV, e ao ecossistema de voicebanks do projeto Emerald."
pubDate: 2026-10-07T11:54:00-04:00
tags: ["OpenUtau Emerald", "UtauV", "Emerald", "UTAU"]
category: "Projetos"
section: "enciclopedia"
author: "xiao"
authorUrl: "https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Xiaop"
heroImage: "/images/articles/emerald.svg"
heroAlt: "Diagrama do ecossistema Emerald com UtauV, voicebanks e comunidade"
heroCaption: "Editor, voicebanks, configuração e comunidade formam camadas diferentes do ecossistema Emerald."
heroSource: "https://github.com/emeraldsingers/UtauV"
heroCredit: "Diagrama original do VIVA; referência do projeto UtauV"
heroLicense: "Diagrama original do VIVA"
draft: false
---

Quando a comunidade fala em **OpenUtau Emerald**, a referência pública encontrada é o **UtauV**, um fork associado ao projeto Emerald. O projeto Emerald também mantém uma coleção de vozes para UTAU e DiffSinger, então é importante separar o editor do conjunto de voicebanks que ele ajuda a distribuir.

## Editor e ecossistema são coisas diferentes

O [UtauV](https://github.com/emeraldsingers/UtauV) é o aplicativo. As vozes, personagens e modelos do projeto Emerald são recursos que podem ser usados dentro de um editor compatível, mas cada um tem seus próprios arquivos e termos de uso. Essa distinção é importante quando alguém pergunta se uma voz é do editor ou do projeto.

## O que caracteriza o UtauV

As releases públicas do UtauV listam versões para [Windows](https://pt.wikipedia.org/wiki/Microsoft_Windows), [macOS](https://pt.wikipedia.org/wiki/MacOS) e [Linux](https://pt.wikipedia.org/wiki/Linux). Os pacotes para Windows incluem opções [DirectML](https://learn.microsoft.com/pt-br/windows/ai/directml/dml) e [CUDA](https://pt.wikipedia.org/wiki/CUDA) em determinados cenários, enquanto as versões para macOS e Linux seguem requisitos próprios. CUDA exige uma configuração específica de [GPU](https://pt.wikipedia.org/wiki/Unidade_de_processamento_gr%C3%A1fico) e bibliotecas, por isso não é automaticamente a melhor escolha para todo mundo.

Para quem usa voicebanks do Emerald, um fork com distribuição próxima ao projeto pode facilitar testes e compatibilidade. Ainda assim, o resultado depende do cantor, do phonemizer, do renderizador e do sistema operacional. Nenhum fork elimina a necessidade de ler a documentação da voz.

## Como testar sem perder um projeto

Faça uma cópia da pasta do projeto e teste uma frase curta. Confira se a voz aparece, se os fonemas são gerados, se o áudio toca e se o render termina sem mensagens de erro. Só depois tente abrir uma música maior.

Também vale anotar qual release foi usada. Forks evoluem em ritmos diferentes, e uma mudança no renderizador ou no pacote de dependências pode modificar o resultado de uma renderização antiga.

## A pergunta da licença

O aplicativo e o voicebank não são a mesma obra. Antes de publicar um cover, distribuir um banco ou treinar um modelo, confira a licença específica dos arquivos. O [projeto Emerald](https://emeraldsingers.github.io/singers) é uma referência para conhecer as vozes associadas ao ecossistema, enquanto o [GitHub do UtauV](https://github.com/emeraldsingers/UtauV) concentra o editor e suas releases.

Como as informações de versões mudam, trate a página de releases como fonte de instalação atual e não como uma promessa de compatibilidade universal.
