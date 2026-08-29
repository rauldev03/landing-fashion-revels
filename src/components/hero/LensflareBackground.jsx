import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

/**
 * Componente LensflareBackground.
 * Recrea la experiencia 3D de Lensflare de Three.js (webgl_lensflares) con destellos ópticos dinámicos,
 * partículas celestiales y movimiento de cámara interactivo con el cursor del usuario.
 * 
 * Conceptos utilizados:
 * - Three.js WebGLRenderer & Scene Graph: Renderizado acelerado por GPU en Canvas.
 * - Procedural Texture Generation: Creación de texturas de destellos de lente en memoria con Canvas 2D.
 * - PointLights & Lensflare: Simulación óptica de refracción de lentes con anillos y halos cromáticos.
 * - Parallax & Animation Loop: Interpolación suave (lerp) siguiendo el cursor con requestAnimationFrame.
 * - Resource Cleanup: Liberación de memoria WebGL al desmontar (dispose de geometrías, texturas y shaders).
 */
export default function LensflareBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Escena y Niebla
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a192f); // Azul espacial profundo
    scene.fog = new THREE.FogExp2(0x0a192f, 0.0008);

    // 2. Cámara
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 15000);
    camera.position.z = 2500;

    // 3. Renderizador WebGL
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 4. Generación Procedural de Texturas de Destello (Lensflare Textures)
    const createSunTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.1, 'rgba(125, 211, 252, 0.9)'); // Celeste brillante
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.4)');
      gradient.addColorStop(0.7, 'rgba(14, 165, 233, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);

      // Rayos de sol cruzados
      ctx.strokeStyle = 'rgba(224, 242, 254, 0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(256, 0); ctx.lineTo(256, 512);
      ctx.moveTo(0, 256); ctx.lineTo(512, 256);
      ctx.stroke();

      return new THREE.CanvasTexture(canvas);
    };

    const createRingTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(128, 128, 80, 128, 128, 128);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.75, 'rgba(244, 114, 182, 0.35)'); // Rosa anime
      gradient.addColorStop(0.9, 'rgba(125, 211, 252, 0.6)');  // Celeste
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);

      return new THREE.CanvasTexture(canvas);
    };

    const createBokehTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');

      // Hexágono suave
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.6, 'rgba(56, 189, 248, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = 64 + 55 * Math.cos(angle);
        const y = 64 + 55 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const textureSun = createSunTexture();
    const textureRing = createRingTexture();
    const textureBokeh = createBokehTexture();

    // 5. Luces y Sistema de Lensflare
    const ambientLight = new THREE.AmbientLight(0x0f2744, 1.5);
    scene.add(ambientLight);

    // Luz principal celeste con destellos ópticos
    const mainLight = new THREE.PointLight(0x7dd3fc, 2.5, 5000, 0.5);
    mainLight.position.set(400, 200, -800);
    scene.add(mainLight);

    const lensflareMain = new Lensflare();
    lensflareMain.addElement(new LensflareElement(textureSun, 700, 0, new THREE.Color(0xffffff)));
    lensflareMain.addElement(new LensflareElement(textureRing, 260, 0.2, new THREE.Color(0xf472b6)));
    lensflareMain.addElement(new LensflareElement(textureBokeh, 80, 0.35, new THREE.Color(0x38bdf8)));
    lensflareMain.addElement(new LensflareElement(textureBokeh, 130, 0.5, new THREE.Color(0xa78bfa)));
    lensflareMain.addElement(new LensflareElement(textureRing, 400, 0.7, new THREE.Color(0x38bdf8)));
    lensflareMain.addElement(new LensflareElement(textureBokeh, 100, 0.9, new THREE.Color(0xfbcfe8)));
    mainLight.add(lensflareMain);

    // Segunda luz secundaria (Rosa/Lila celestial)
    const secondaryLight = new THREE.PointLight(0xf472b6, 1.8, 4000, 0.5);
    secondaryLight.position.set(-600, -300, -1200);
    scene.add(secondaryLight);

    const lensflareSecondary = new Lensflare();
    lensflareSecondary.addElement(new LensflareElement(textureSun, 450, 0, new THREE.Color(0xf472b6)));
    lensflareSecondary.addElement(new LensflareElement(textureRing, 180, 0.3, new THREE.Color(0x7dd3fc)));
    lensflareSecondary.addElement(new LensflareElement(textureBokeh, 60, 0.6, new THREE.Color(0xc084fc)));
    secondaryLight.add(lensflareSecondary);

    // 6. Campo de Estrellas y Polvo Cósmico
    const starsCount = 1200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);

    const colorSky = new THREE.Color(0x38bdf8);
    const colorPink = new THREE.Color(0xf472b6);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < starsCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 6000;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 4000;

      const randomColor = Math.random();
      const c = randomColor > 0.6 ? colorSky : randomColor > 0.3 ? colorPink : colorWhite;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 7. Objetos Cósmicos 3D Flotantes (Monolitos reflectantes de cristal)
    const crystals = [];
    const crystalGeo = new THREE.OctahedronGeometry(45, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false,
    });

    for (let i = 0; i < 25; i++) {
      const mesh = new THREE.Mesh(crystalGeo, crystalMat);
      mesh.position.set(
        (Math.random() - 0.5) * 3500,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
      const scale = 0.6 + Math.random() * 1.5;
      mesh.scale.set(scale, scale, scale);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      crystals.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
      });
      scene.add(mesh);
    }

    // 8. Interacción de Mouse / Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x - width / 2) * 0.4;
      mouseY = (y - height / 2) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 9. Manejo de Redimensión
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // 10. Optimización de Rendimiento con IntersectionObserver (0% GPU al scrollear)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 11. Bucle de Animación (60 FPS)
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Si el Hero no está visible en pantalla, no calculamos ni renderizamos
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Suave interpolación de la cámara con el mouse (Lerp)
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      // Movimiento orbital suave de las fuentes de luz y sus destellos
      mainLight.position.x = 600 + Math.sin(elapsedTime * 0.4) * 300;
      mainLight.position.y = 200 + Math.cos(elapsedTime * 0.3) * 150;

      secondaryLight.position.x = -700 + Math.cos(elapsedTime * 0.35) * 250;
      secondaryLight.position.y = -200 + Math.sin(elapsedTime * 0.45) * 150;

      // Rotación suave del campo de estrellas y cristales
      starField.rotation.y = elapsedTime * 0.015;
      starField.rotation.x = elapsedTime * 0.008;

      crystals.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 12. Limpieza de Recursos (Cleanup)
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Liberar geometrías, materiales y texturas
      textureSun.dispose();
      textureRing.dispose();
      textureBokeh.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
}
