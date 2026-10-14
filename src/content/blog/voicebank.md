---
title: "O que é um voicebank e como ele funciona?"
description: "Conheça bancos de voz, amostras, oto.ini, fonemizadores e os elementos que formam uma voz para UTAU."
pubDate: 2026-10-17
tags: ["Voicebank", "Oto.ini", "Fonemas"]
category: "Enciclopédia"
section: "enciclopedia"
author: "VIVA Open Synth Brasil"
draft: false
---

Um **voicebank** é um conjunto de arquivos que permite a um sintetizador vocal produzir uma voz. No universo UTAU, ele geralmente contém amostras gravadas de uma pessoa, uma configuração `oto.ini`, uma reclist ou documentação de gravação e, muitas vezes, um personagem que ajuda a comunidade a identificar aquela voz.

É útil pensar no banco como um instrumento. As amostras são as cordas, teclas ou palhetas. O `oto.ini` informa onde cada som começa e termina. O phonemizer decide quais sons devem ser usados quando você escreve uma sílaba. Se uma dessas partes estiver desalinhada, o instrumento inteiro parece desafinado mesmo quando a melodia está correta.

## Como as amostras viram notas

Uma gravação de voicebank não costuma ser uma frase musical pronta. Ela é dividida em unidades menores, como vogais, consoantes ou transições. Durante o render, o programa escolhe amostras, muda sua duração, ajusta o pitch e conecta um trecho ao seguinte.

O `oto.ini` descreve parâmetros como offset, consonante, cutoff, preutterance e overlap. Esses valores ajudam o programa a distinguir a parte estável de uma vogal, o ataque de uma consoante e a região que pode ser esticada.

## CV, VCV e CVVC

Métodos diferentes organizam os sons de maneiras diferentes. Um banco CV grava sílabas como `ka`, `ki` e `ku`. Um banco VCV inclui transições, como `a ka`, para suavizar a passagem entre uma vogal e uma consoante. CVVC separa ainda mais os componentes e pode oferecer cobertura eficiente para determinados idiomas.

Não existe um método universalmente melhor. O método precisa combinar com a língua, a experiência de quem gravou e o phonemizer que o usuário escolherá. O [guia oficial de phonemizers do OpenUtau](https://github.com/openutau/OpenUtau/wiki/Phonemizers) mostra como essas estruturas são interpretadas.

## Por que um banco dá trabalho

Gravar é apenas uma etapa. É preciso escolher microfone e sala, manter pronúncia e volume consistentes, nomear amostras, fazer otoing, testar fonemas e documentar limitações. Uma boa descrição economiza horas para quem instala o banco depois.

Também existe o lado humano. A pessoa que fornece a voz precisa saber como as amostras serão usadas, distribuídas e eventualmente transformadas em outros formatos. Uma licença clara não substitui consentimento claro.

## Como testar um voicebank

Use uma frase curta que contenha sons importantes para a língua do banco. Teste vogais isoladas, transições e notas longas. Se um erro aparecer em todas as músicas, provavelmente ele está no banco ou no phonemizer. Se aparecer apenas em uma nota, pode estar na duração, no envelope ou no pitch.

Voicebanks são documentos vivos da comunidade. Quanto melhor a documentação, mais pessoas conseguem aprender, criar e contribuir sem depender de tentativa e erro.
