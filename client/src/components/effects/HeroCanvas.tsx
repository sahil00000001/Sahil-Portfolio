import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive Three.js hero backdrop: a glowing wireframe crystal (icosahedron)
 * orbited by an additive-blended particle galaxy, with mouse parallax.
 * Lazy-loaded so the `three` chunk never blocks first paint. Falls back to
 * nothing (the CSS ambiance behind it stays) if WebGL is unavailable.
 */
export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // No WebGL → leave the CSS backdrop in place.
    }

    let w = mount.clientWidth || window.innerWidth;
    let h = mount.clientHeight || window.innerHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.z = 6;

    const primary = new THREE.Color("hsl(280, 100%, 64%)");
    const secondary = new THREE.Color("hsl(190, 100%, 58%)");

    // ── The crystal core ──────────────────────────────────────────
    const group = new THREE.Group();
    scene.add(group);

    const icoGeo = new THREE.IcosahedronGeometry(1.75, 1);

    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0b0b16,
      emissive: primary,
      emissiveIntensity: 0.45,
      metalness: 0.7,
      roughness: 0.35,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(icoGeo, coreMat);
    core.scale.setScalar(0.97);
    group.add(core);

    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: primary,
      transparent: true,
      opacity: 0.5,
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wire);

    // ── Particle galaxy shell ─────────────────────────────────────
    const COUNT = 1500;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const tmp = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const r = 3 + Math.pow(Math.random(), 0.5) * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      tmp.copy(Math.random() < 0.5 ? primary : secondary);
      colors[i * 3] = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;
    }
    const ptsGeo = new THREE.BufferGeometry();
    ptsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    ptsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const ptsMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(ptsGeo, ptsMat);
    scene.add(points);

    // ── Lighting ──────────────────────────────────────────────────
    const l1 = new THREE.PointLight(primary, 7, 60);
    l1.position.set(5, 4, 6);
    scene.add(l1);
    const l2 = new THREE.PointLight(secondary, 5, 60);
    l2.position.set(-6, -3, 4);
    scene.add(l2);
    scene.add(new THREE.AmbientLight(0x404060, 1.4));

    // ── Mouse parallax ────────────────────────────────────────────
    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    // ── Render loop ───────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.12 + target.x * 0.6;
      group.rotation.x = t * 0.05 + target.y * 0.4;
      points.rotation.y = t * 0.04;
      points.rotation.x = -t * 0.02;
      camera.position.x += (target.x * 1.3 - camera.position.x) * 0.04;
      camera.position.y += (-target.y * 1.0 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    if (reduced) {
      renderer.render(scene, camera); // single static frame
    } else {
      raf = requestAnimationFrame(tick);
    }

    // ── Resize ────────────────────────────────────────────────────
    const onResize = () => {
      w = mount.clientWidth || window.innerWidth;
      h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      icoGeo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      coreMat.dispose();
      ptsGeo.dispose();
      ptsMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
