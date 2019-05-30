// Import React
import React from "react";

import {
  Deck,
  Cover,
  Impact,
  Content,
  Separator,
  Lists
} from "dito-spectacle-theme";

// Require CSS
require("normalize.css");

const SampleImpactText = () => (
  <>
    Os líderes começaram cedo <strong>e hoje lucram alto</strong>
  </>
);

const DitoMission = () => (
  <>
    Com <strong>tecnologia</strong>, empoderar o varejo a{" "}
    <strong>conhecer</strong> e se <strong>relacionar</strong> com consumidores
    de forma personalizada e escalável para <strong>vender mais</strong>
  </>
);
export default () => (
  <Deck>
    <Separator number="1" text="Modelos de Capas" />
    <Cover
      variant={1}
      title="Título da Palestra"
      subtitle="Nome do Projeto"
      titleSuffix="."
    />
    <Cover
      variant={2}
      title="Título da Palestra"
      subtitle="Nome do Projeto"
      titleSuffix="."
    />
    <Cover
      variant={3}
      title="Título da Palestra"
      subtitle="Nome do Projeto"
      titleSuffix="."
    />
    <Cover
      variant={4}
      bgBlur="5px"
      bgSrc="https://cdn-images-1.medium.com/max/1600/1*RnzDU-OZZSup5PMAcshc4Q.jpeg"
      title="Título da Palestra"
      subtitle="Nome do Projeto"
      titleSuffix="."
    />
    <Separator number="2" text="Slide normal" />
    <Content
      breadcrumb="Introdução"
      slideTitle="Título ou frase importante"
      slideTitleSuffix="."
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Content>
    <Content
      breadcrumb="Introdução"
      slideTitle="Título ou frase importante"
      slideTitleSuffix="."
    >
      <Lists.Ordered>
        <Lists.Item>
          Este é um exemplo de tópico normal. Você pode usá-lo para um momento
          que precise colocar mais tópicos, mas lembre-se de não colocar muito
          texto, use apenas para lembretes.
        </Lists.Item>
        <Lists.Item>
          Para mudar a cor da bolinha, é só clicar nela. Você pode usar vermelho
          para um tópico negativo e amarelo para algo que pode ser melhorado,
          caso esteja fazendo uma apresentação de resultados.
        </Lists.Item>
        <Lists.Item>Exemplo de outro tópico.</Lists.Item>
      </Lists.Ordered>
    </Content>
    <Content
      breadcrumb="Introdução"
      slideTitle="Título ou frase importante"
      slideTitleSuffix="."
    >
      <Lists.Unordered>
        <Lists.Item>
          Este é um exemplo de tópico normal. Você pode usá-lo para um momento
          que precise colocar mais tópicos, mas lembre-se de não colocar muito
          texto, use apenas para lembretes.
        </Lists.Item>
        <Lists.Item>
          Para mudar a cor da bolinha, é só clicar nela. Você pode usar vermelho
          para um tópico negativo e amarelo para algo que pode ser melhorado,
          caso esteja fazendo uma apresentação de resultados.
        </Lists.Item>
        <Lists.Item>Exemplo de outro tópico.</Lists.Item>
      </Lists.Unordered>
    </Content>
    <Separator number="3" text="Slides de impacto com frases" />
    <Impact variant={1} textSuffix="." text={<SampleImpactText />} />
    <Impact variant={2} textSuffix="?" text={<SampleImpactText />} />
    <Impact variant={3} textSuffix="!" text={<SampleImpactText />} />
    <Impact
      variant={4}
      breadcrumb="Tópico / Missão"
      slideTitle="Nossa Missão"
      slideTitleSuffix="."
      textSuffix="."
      text={<DitoMission />}
    />
  </Deck>
);
