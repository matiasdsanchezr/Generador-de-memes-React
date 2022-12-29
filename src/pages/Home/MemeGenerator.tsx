import React, { useState, ChangeEvent } from 'react';
import { Select, TextInput, Button, Flex, Container, Image } from '@mantine/core';
import { useMemegen } from '../../hooks/memeApi';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Loader from '../../layouts/Loader';
import html2canvas from 'html2canvas';

type MemeTemplate = { id: string; name: string; blank: string; lines: number };

const MemeGenerator = (): ReactJSXElement => {
  const [memeTemplate, setMemeTemplate] = useState<MemeTemplate | null>();
  const [textLines, setTextLines] = useState<Array<string>>([]);
  const [memeUrl, setMemeUrl] = useState<string | null>();
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

  const { data: memeTemplates, isLoading, isError } = useMemegen();

  const handleOnChange = (value: string) => {
    const template = memeTemplates.find((e: MemeTemplate) => e.id === value);
    if (template.blank === memeUrl) return;

    setMemeTemplate(template);
    setMemeUrl(template.blank);
    setIsLoadingImage(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!memeTemplate?.lines) return;
    setTextLines((textLines) => {
      const lineNumber = parseInt(e.target.name);
      textLines[lineNumber] = e.target.value;
      return textLines;
    });
  };

  const handleOnClickGenerate = () => {
    if (!memeTemplate) return;
    let url = `https://api.memegen.link/images/${memeTemplate.id}`;
    url += textLines.reduce((prev, cur) => (prev += `/${cur}`), '');
    url += '.png';

    if (url === memeUrl) return;
    setMemeUrl(url);
    setIsLoadingImage(true);
  };

  const handleOnClickDownload = async () => {
    const memeElement = document.getElementById('meme');
    if (!memeElement) return;

    await html2canvas(memeElement, {
      backgroundColor: '#333333',
      allowTaint: false,
      useCORS: true,
    }).then(function (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'meme.png';
      link.click();
    });
  };

  if (isLoading) return <Loader />;

  if (isError) return <h3>Error al cargar datos de Memegen</h3>;

  return (
    <Container p="md" bg="rgba(0, 0, 0, .3)" mih="500px" my="2rem">
      <Flex justify="center" direction="column" wrap="nowrap" gap="1rem">
        <Select
          label="Selecciona una imagen"
          placeholder="Seleccionar"
          searchable
          onChange={handleOnChange}
          data={memeTemplates.map((memeTemplate: MemeTemplate) => ({
            value: memeTemplate.id,
            label: memeTemplate.name,
          }))}
        />

        <Image
          src={memeUrl || 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'}
          my="1rem"
          withPlaceholder
          mih="200px"
          miw="200px"
          m="auto"
          onLoad={() => setIsLoadingImage(false)}
          id="meme"
        />

        {Array(memeTemplate?.lines)
          .fill('')
          .map((_, index) => (
            <TextInput
              key={index}
              placeholder={`Ingresa un texto`}
              label={`Linea de texto ${index + 1}:`}
              onChange={handleInput}
              name={`${index}`}
              withAsterisk
            />
          ))}

        <Button color="gray" onClick={handleOnClickGenerate} disabled={isLoadingImage}>
          Generar
        </Button>
        <Button color="gray" onClick={handleOnClickDownload} disabled={isLoadingImage}>
          Descargar
        </Button>
      </Flex>
    </Container>
  );
};

export default MemeGenerator;
