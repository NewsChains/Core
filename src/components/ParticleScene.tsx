// src/components/ParticleScene.tsx
"use client"; // Komponen ini harus dijalankan di client-side

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { loadShader } from '@/utils/shaderLoader'; // Helper untuk load shader



const ParticleScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Setup Scene dan Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Tambahkan event listener untuk resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });    mountRef.current?.appendChild(renderer.domElement);

    // Load shaders
    const vertexShader = loadShader('/shaders/vertex.glsl');
    const fragmentShader = loadShader('/shaders/fragment.glsl');

    // Buat Geometry partikel
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const numParticles = 10000;

    for (let i = 0; i < numParticles; i++) {
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // Buat Material menggunakan shaders
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
      },
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.002;
      material.uniforms.uTime.value += 0.05;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ParticleScene;
