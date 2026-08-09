'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { WEBGL_TOKENS } from '@/data/theme-tokens';

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // AI Core Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central AI Core - Outer Node Lattice
    const outerGeo = new THREE.IcosahedronGeometry(3.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: WEBGL_TOKENS.outerLattice,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Inner Core Geometry
    const innerGeo = new THREE.OctahedronGeometry(2.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: WEBGL_TOKENS.innerOctahedron,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Central Radiant Point Node
    const corePointGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const corePointMat = new THREE.MeshBasicMaterial({
      color: WEBGL_TOKENS.corePointNode,
      transparent: true,
      opacity: 0.7,
    });
    const corePointMesh = new THREE.Mesh(corePointGeo, corePointMat);
    group.add(corePointMesh);

    // 2. Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(5.4, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: WEBGL_TOKENS.orbitalRing1,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(6.6, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: WEBGL_TOKENS.orbitalRing2,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // 3. Floating Data Particle Stream Cloud
    const particleCount = 140;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: WEBGL_TOKENS.dataParticles,
      size: 0.12,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    group.add(particleSystem);

    // Smooth Cursor Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        outerMesh.rotation.x += 0.001;
        outerMesh.rotation.y += 0.0015;

        innerMesh.rotation.x -= 0.0012;
        innerMesh.rotation.y += 0.0018;

        ring1.rotation.z += 0.0008;
        ring2.rotation.z -= 0.0006;
        particleSystem.rotation.y += 0.0004;

        targetX += (mouseX * 0.35 - targetX) * 0.05;
        targetY += (-mouseY * 0.35 - targetY) * 0.05;

        group.rotation.y = targetX;
        group.rotation.x = targetY;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean disposal of Three.js geometries and materials
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      corePointGeo.dispose();
      corePointMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
