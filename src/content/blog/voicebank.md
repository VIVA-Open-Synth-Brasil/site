---
title: "O que é um voicebank e como ele funciona?"
description: "Conheça bancos de voz, amostras, oto.ini, fonemizadores e os elementos que formam uma voz para UTAU."
pubDate: 2026-09-09T12:44:00-04:00
tags: ["Voicebank", "Oto.ini", "Fonemas"]
category: "Enciclopédia"
section: "enciclopedia"
author: "xiao"
authorUrl: "https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Xiaop"
heroImage: "/images/articles/voicebank.svg"
heroAlt: "Diagrama de um voicebank com amostras WAV, oto.ini, fonemas e renderização"
heroCaption: "Amostras, marcações e informações de pronúncia trabalham juntas para formar um voicebank utilizável."
heroSource: "https://github.com/openutau/OpenUtau/wiki/Voicebank-Development"
heroCredit: "Diagrama original do VIVA; referência da wiki do OpenUtau"
heroLicense: "Diagrama original do VIVA"
draft: false
---

Um [voicebank](https://en.wikipedia.org/wiki/Voicebank) é um conjunto de arquivos que permite a um sintetizador vocal produzir uma voz. No universo UTAU, ele geralmente contém amostras gravadas de uma pessoa, uma configuração `oto.ini`, uma reclist ou documentação de gravação e, muitas vezes, um personagem que ajuda a comunidade a identificar aquela voz.

É útil pensar no banco como um instrumento. As amostras são as cordas, teclas ou palhetas. O `oto.ini` informa onde cada som começa e termina. O phonemizer decide quais sons devem ser usados quando você escreve uma sílaba. Se uma dessas partes estiver desalinhada, o instrumento inteiro parece desafinado mesmo quando a melodia está correta.

## Como as amostras viram notas

Uma gravação de voicebank não costuma ser uma frase musical pronta. Ela é dividida em unidades menores, como vogais, consoantes ou transições. Durante o render, o programa escolhe amostras, muda sua duração, ajusta o pitch e conecta um trecho ao seguinte. Esse processamento digital de sinais, conhecido como [DSP](https://pt.wikipedia.org/wiki/Processamento_digital_de_sinais), é uma das camadas que transforma gravações em uma voz utilizável.

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

## Métodos de gravação e pronúncia

As letras CV indicam consoante e vogal. Um banco CV pode conter sílabas como `ka`, `ki` e `ku`, sendo uma porta de entrada simples para entender o fluxo. O VCV acrescenta transições, como `a ka`, e tende a produzir passagens mais suaves quando o phonemizer e o otoing estão alinhados. O CVVC combina sílabas CV com transições VC e pode economizar gravações em alguns idiomas.

Também existem formatos como CVC, VCCV e Rentan. Eles organizam consoantes, vogais e transições de maneiras diferentes, muitas vezes com fonemas próprios para uma língua. Não há um método universalmente superior. A escolha depende da língua, da reclist, da forma de gravação e do phonemizer usado no editor.

Uma reclist é a lista de gravação que orienta quais sons devem ser registrados. Antes de gravar, leia a pronúncia dos fonemas e mantenha distância, volume e ritmo consistentes. Uma gravação tecnicamente limpa não corrige uma pronúncia que não corresponde ao sistema do banco.

## O que cada parâmetro do oto.ini faz

O `oto.ini` costuma ser entendido com seis referências principais:

- **Alias:** o nome usado pelo phonemizer para encontrar uma amostra.
- **Offset:** corta o silêncio ou ruído no começo do arquivo.
- **Consonant:** define a região que não deve ser esticada como uma vogal.
- **Cutoff:** marca o limite útil no final da amostra.
- **Preutterance:** alinha o início percebido do fonema com a nota musical.
- **Overlap:** indica quanto uma transição pode se sobrepor ao fonema anterior.

Esses valores não são números universais. Plosivas, como `b`, `d`, `k` e `t`, podem precisar de um tratamento diferente de sons contínuos, como `m`, `n`, `s` e `sh`. Teste uma frase curta, observe a consoante e a vogal separadamente e faça ajustes graduais.

## Consentimento e distribuição

Um voicebank reúne arquivos técnicos, mas também representa a voz de uma pessoa. Antes de gravar ou publicar, defina como as amostras podem ser usadas, redistribuídas e transformadas. A licença do arquivo não deve ser escondida dentro de uma pasta: ela precisa acompanhar o download e ser fácil de encontrar.

Esta expansão foi adaptada e reescrita a partir da [Megathread UTAU](https://docs.google.com/document/d/1QmiwhNqtCdWP8eV8fQVX9UG49et0o1WITPz158wURdA/edit?tab=t.0#heading=h.p6lry6ir49g6), mantida pela VocalSynth Brasil, e complementa a [documentação de desenvolvimento de voicebanks do OpenUtau](https://github.com/openutau/OpenUtau/wiki/Voicebank-Development).
