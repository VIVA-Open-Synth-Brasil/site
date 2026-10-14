---
title: "OpenUtau: um ponto de partida para a criação vocal livre"
description: "Conheça o OpenUtau e os conceitos essenciais para começar a experimentar com voicebanks e síntese cantada."
pubDate: 2026-08-27T15:13:00-04:00
tags: ["OpenUtau", "UTAU", "Guia"]
category: "Guias"
author: "xiao"
authorUrl: "https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Xiaop"
heroImage: "/images/articles/openutau.svg"
heroAlt: "Piano roll conceitual do OpenUtau com notas e curva de expressão"
heroCaption: "A edição vocal reúne notas, letras, expressões e renderização em um mesmo projeto."
heroSource: "https://github.com/stakira/OpenUtau/blob/master/README.md"
heroCredit: "Diagrama original do VIVA; referência oficial do OpenUtau"
heroLicense: "Diagrama original do VIVA"
draft: false
---

O **OpenUtau** é um editor gratuito e de código aberto feito para a comunidade UTAU. Ele conserva a ideia de escrever notas e letras para uma voz sintética, mas oferece uma experiência mais moderna, com múltiplas trilhas, pré-renderização, phonemizers, plugins e suporte a [Windows](https://pt.wikipedia.org/wiki/Microsoft_Windows), [macOS](https://pt.wikipedia.org/wiki/MacOS) e [Linux](https://pt.wikipedia.org/wiki/Linux).

O projeto não tenta ser uma cópia perfeita do UTAU original. A proposta é resolver algumas tarefas com menos etapas e tornar o trabalho mais confortável para quem está criando, ajustando ou estudando síntese vocal.

## O mapa mental de um projeto

Antes de abrir menus, vale separar quatro coisas que costumam ser misturadas:

- **Editor:** onde você coloca notas, letras, expressões e curvas.
- **Voicebank ou cantor:** o recurso que fornece a identidade vocal.
- **Phonemizer:** o componente que transforma texto em fonemas adequados ao banco.
- **Renderizador:** o conjunto de ferramentas que transforma tudo em áudio.

O [wiki oficial do OpenUtau](https://github.com/openutau/OpenUtau/wiki) tem páginas específicas para instalação, phonemizers, resamplers, voicebank development e DiffSinger. É uma boa referência para sair do modo tentativa e erro.

## Por onde começar

Faça um projeto curto, carregue uma voz conhecida e escreva uma frase simples. Observe quais fonemas o programa gerou, qual phonemizer está ativo e como a voz reage a notas longas e curtas.

Depois, compare uma versão sem edição com outra em que você ajustou apenas pitch, dinâmica ou envelope. Esse registro simples ensina mais do que trocar dez parâmetros ao mesmo tempo.

## O que torna o OpenUtau especial

O editor trabalha com diferentes métodos de voz e oferece phonemizers para sistemas como VCV, CVVC e Arpasing. Os phonemizers podem operar em tempo real enquanto você edita a letra, e o resultado fonético pode ser ajustado no editor de envelopes.

O programa também usa pré-renderização para permitir uma prévia mais rápida. Isso é especialmente útil quando o projeto tem várias trilhas ou quando você está comparando pequenas mudanças de tuning.

## Um ecossistema aberto

A força do OpenUtau não está apenas no executável. Ela aparece em bancos, plugins, traduções, tutoriais, issues, forks e pessoas dispostas a explicar um detalhe. A [página de primeiros passos](https://github.com/openutau/OpenUtau/wiki/Getting-Started) e o [guia de phonemizers](https://github.com/openutau/OpenUtau/wiki/Phonemizers) são bons pontos de partida.

Consulte sempre a licença do voicebank e do plugin antes de redistribuir arquivos. Criar com software livre também significa cuidar das relações que tornam o recurso possível.

## Faixas, partes e o piano roll

Uma faixa reúne o cantor, o phonemizer, o motor de renderização e os parâmetros daquela voz. Dentro dela ficam as partes, que funcionam como blocos de notas e letras. Ao abrir uma parte, o piano roll permite editar alturas, duração, sílabas e expressões sem confundir uma frase com outra.

Essa separação ajuda a organizar um cover com várias vozes. Você pode manter uma faixa para a melodia principal, outra para harmonias e uma terceira para testes. Cada uma pode usar um cantor ou um conjunto de expressões diferente.

## Um primeiro cover, do arquivo ao áudio

Para um teste curto, importe uma [UST](https://en.wikipedia.org/wiki/UTAU) ou uma USTx, ou escreva as notas diretamente no piano roll. Também é possível importar MIDI e arquivos de outros editores, como VSQx, mas a conversão pode exigir revisão de letras, tempo e fonemas. O [UtaFormatix](https://sdercolin.github.io/utaformatix3/) ajuda a converter vários formatos usados pela comunidade.

Depois de escolher o cantor, selecione o phonemizer compatível com o método do banco. Em um banco VCV, por exemplo, o resultado pode ser completamente diferente se o programa estiver tratando a letra como CV. Faça uma frase curta, dê play e observe os fonemas gerados antes de importar uma música inteira.

O tuning começa com mudanças pequenas. Ajuste uma nota por vez, experimente a curva de pitch, a dinâmica, o vibrato e os envelopes. Se quiser testar o alcance da voz, mova a frase uma oitava para cima ou para baixo e compare o resultado. Quando a edição estiver pronta, use a opção de exportar ou renderizar para WAV e guarde a configuração junto do projeto.

## Referência comunitária

Esta expansão foi adaptada e reescrita a partir da [Megathread UTAU](https://docs.google.com/document/d/1QmiwhNqtCdWP8eV8fQVX9UG49et0o1WITPz158wURdA/edit?tab=t.0#heading=h.p6lry6ir49g6), mantida pela VocalSynth Brasil. Consulte o documento original para imagens, exemplos de interface e atualizações da comunidade.
