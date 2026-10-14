---
title: "Como instalar e usar o OpenUtau"
description: "Um roteiro inicial para instalar o OpenUtau, carregar um voicebank e fazer a primeira renderização."
pubDate: 2026-10-16
tags: ["OpenUtau", "Tutorial", "UTAU"]
category: "Guias"
section: "guias"
author: "VIVA Open Synth Brasil"
draft: false
---

O OpenUtau é um editor gratuito e de código aberto criado para a comunidade UTAU. Ele tem suporte a Windows, macOS e Linux, oferece múltiplas trilhas vocais e usa phonemizers para transformar letras em sequências de sons. Este guia mostra o primeiro caminho, sem tentar cobrir todas as possibilidades do programa.

## 1. Baixe uma versão confiável

Comece pelo [repositório oficial do OpenUtau](https://github.com/openutau/OpenUtau) ou pela [página de releases](https://github.com/openutau/OpenUtau/releases). Escolha o pacote compatível com seu sistema e leia as notas da versão. Versões beta podem conter recursos novos e também comportamentos ainda em ajuste.

No Windows, normalmente você extrai ou instala o programa em uma pasta própria. No macOS, pode ser necessário autorizar o aplicativo nas configurações de segurança. No Linux, confira o formato distribuído e as dependências indicadas pelo projeto.

## 2. Abra um projeto vazio

Ao iniciar o OpenUtau, use a opção de criar um projeto novo. Antes de inserir muitas notas, confira tempo, compasso e trilha. O [guia oficial de primeiros passos](https://github.com/openutau/OpenUtau/wiki/Getting-Started) explica esses controles com mais detalhes.

Para o primeiro teste, crie quatro ou oito compassos. Uma melodia curta facilita perceber se o problema está na instalação, no voicebank, na pronúncia ou na edição musical.

## 3. Instale um voicebank

Baixe um banco de uma fonte confiável e leia sua licença. No OpenUtau, você pode instalar o banco pela interface quando essa opção estiver disponível ou colocá-lo no diretório de singers indicado pelo programa. Evite espalhar cópias do mesmo banco em várias pastas, pois isso torna mais difícil saber qual versão está sendo usada.

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
