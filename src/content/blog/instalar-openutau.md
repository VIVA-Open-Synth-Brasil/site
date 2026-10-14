---
title: "Como instalar e usar o OpenUtau"
description: "Um roteiro inicial para instalar o OpenUtau, carregar um voicebank e fazer a primeira renderização."
pubDate: 2026-08-19T09:07:00-04:00
tags: ["OpenUtau", "Tutorial", "UTAU"]
category: "Guias"
section: "guias"
author: "xiao"
authorUrl: "https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Xiaop"
heroImage: "/images/articles/openutau-editor.gif"
heroAlt: "Demonstração da interface do OpenUtau com notas e edição vocal"
heroCaption: "A interface oficial mostra o editor em uso e ajuda a visualizar o tipo de ambiente preparado no guia."
heroSource: "https://github.com/stakira/OpenUtau/blob/master/Misc/GIFs/editor.gif"
heroCredit: "OpenUtau contributors"
heroLicense: "Imagem publicada no repositório oficial do OpenUtau"
draft: false
---

O OpenUtau é um editor gratuito e de código aberto criado para a comunidade UTAU. Ele tem suporte a [Windows](https://pt.wikipedia.org/wiki/Microsoft_Windows), [macOS](https://pt.wikipedia.org/wiki/MacOS) e [Linux](https://pt.wikipedia.org/wiki/Linux), oferece múltiplas trilhas vocais e usa phonemizers para transformar letras em sequências de sons. Este guia mostra o primeiro caminho, sem tentar cobrir todas as possibilidades do programa.

## 1. Baixe uma versão confiável

Comece pelo [site oficial do OpenUtau](https://openutau.com/), pelo [repositório oficial](https://github.com/openutau/OpenUtau) ou pela [página de releases](https://github.com/openutau/OpenUtau/releases). Escolha o pacote compatível com seu sistema e leia as notas da versão. Versões beta podem conter recursos novos e também comportamentos ainda em ajuste.

No Windows, normalmente você extrai ou instala o programa em uma pasta própria. No macOS, pode ser necessário autorizar o aplicativo nas configurações de segurança. No Linux, confira o formato distribuído e as dependências indicadas pelo projeto.

## 2. Abra um projeto vazio

Ao iniciar o OpenUtau, use a opção de criar um projeto novo. Antes de inserir muitas notas, confira tempo, compasso e trilha. O [guia oficial de primeiros passos](https://github.com/openutau/OpenUtau/wiki/Getting-Started) explica esses controles com mais detalhes.

Para o primeiro teste, crie quatro ou oito compassos. Uma melodia curta facilita perceber se o problema está na instalação, no voicebank, na pronúncia ou na edição musical. Se você ainda não tiver um projeto para abrir, o [Vocaloader](https://vocaloader.app/) reúne arquivos `.ustx` para download, e a coleção [USTs PT-BR](https://rentry.org/USTs-PTBR) concentra arquivos brasileiros.

## 3. Instale um voicebank

Baixe um banco de uma fonte confiável e leia sua licença. Para procurar vozes brasileiras, consulte a categoria de [Bancos de voz da Wiki VocalSynth Brasil](https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Bancos_de_voz). No OpenUtau, você pode instalar o banco pela interface quando essa opção estiver disponível ou colocá-lo no diretório de singers indicado pelo programa. Evite espalhar cópias do mesmo banco em várias pastas, pois isso torna mais difícil saber qual versão está sendo usada.

Depois de instalar, selecione o banco na trilha vocal. Se ele não aparecer, reinicie o editor e confira se a pasta escolhida contém os arquivos de configuração esperados, como `character.yaml`, `oto.ini` ou outros arquivos específicos do banco.

## 4. Escreva a primeira frase

Insira algumas notas e escreva uma sílaba em cada uma. O resultado depende do phonemizer escolhido e do formato do voicebank. Bancos VCV, CVVC e outros métodos não esperam exatamente os mesmos aliases.

O [guia de phonemizers do OpenUtau](https://github.com/openutau/OpenUtau/wiki/Phonemizers) explica como VCV e CVVC lidam com transições e como escolher o phonemizer na trilha. Se a pronúncia parecer estranha, verifique primeiro esse ponto antes de mexer no pitch.

## 5. Faça uma renderização curta

Renderize apenas a frase de teste. Observe se o áudio sai completo, se as consoantes começam no lugar certo e se não há cortes artificiais entre as notas. O OpenUtau oferece pré-renderização para tornar esse processo mais ágil durante a edição.

## Quando algo não funciona

- **O banco não aparece:** confira a pasta, a licença, os arquivos de configuração e reinicie o programa.
- **A letra fica estranha:** teste outro phonemizer e procure os aliases esperados pelo banco.
- **O áudio não toca:** confira a saída de áudio, o renderizador e o resampler.
- **O resultado está robótico:** trabalhe duração, dinâmica, pitch e envelopes antes de trocar de ferramenta.

O primeiro objetivo não é produzir uma música pronta. É conseguir repetir o caminho: abrir, carregar uma voz, escrever uma frase, renderizar e entender onde cada ajuste acontece.

## Instalar uma voz com segurança

Quando o banco estiver em `.zip` ou `.rar`, a forma mais segura é usar a opção de instalar cantor dentro do OpenUtau ou arrastar o arquivo para a janela do programa, quando essa função estiver disponível. Em instalações no Windows, arquivos japoneses extraídos com a codificação errada podem aparecer com nomes ilegíveis, um problema conhecido como [mojibake](https://en.wikipedia.org/wiki/Mojibake). A instalação pela interface pode ajudar a escolher a codificação correta.

Também é possível colocar uma pasta já extraída no diretório `Singers`, mas evite misturar várias versões do mesmo banco. Depois da instalação, confira se a pasta contém os arquivos esperados pelo projeto, como `oto.ini`, `character.yaml`, `character.txt`, modelos ou configurações específicas do cantor.

## Diagnóstico rápido

- **O cantor não aparece:** confirme se a pasta não ficou duplicada, por exemplo `Singers/Nome/Nome/`, e reinicie o editor.
- **Os fonemas não fazem sentido:** escolha o phonemizer indicado pelo banco e confira se a letra está no sistema esperado, como CV, VCV ou CVVC.
- **O projeto abre, mas não renderiza:** confira o motor, o resampler, o wavtool, o vocoder e os arquivos exigidos pelo cantor.
- **O áudio sai cortado ou atrasado:** teste uma frase menor e revise os parâmetros do `oto.ini`, especialmente preutterance, overlap, offset e cutoff.
- **O programa não acessa o áudio:** confira o dispositivo de saída e teste outro arquivo WAV para separar um problema do sistema de um problema do voicebank.

A [documentação oficial do OpenUtau](https://github.com/openutau/OpenUtau/wiki) deve ser consultada junto da documentação específica do banco. Um pacote pode usar convenções próprias mesmo quando funciona dentro do mesmo editor.

## Referência comunitária

Esta seção foi adaptada e reescrita a partir da [Megathread UTAU](https://docs.google.com/document/d/1QmiwhNqtCdWP8eV8fQVX9UG49et0o1WITPz158wURdA/edit?tab=t.0#heading=h.p6lry6ir49g6), mantida pela VocalSynth Brasil. O documento original reúne exemplos visuais e observações adicionais sobre instalação, locale e configuração.
