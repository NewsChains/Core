// src/utils/shaderLoader.ts

export const loadShader = (url: string): string => {
    let shader = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // Synchronous request
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        shader = xhr.responseText;
      }
    };
    xhr.send();
    return shader;
  };