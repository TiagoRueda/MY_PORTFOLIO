export function loadMCRModel(containerId) {
  const container = document.getElementById(containerId);

  // Calcular a proporção com base no container
  const aspectRatio = container.offsetWidth / container.offsetHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(200, 100, 300);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  let mcrModel = null;
  const loader = new THREE.GLTFLoader();

  loader.load(
    'assets/glbs/mcr.glb',
    function (gltf) {
      mcrModel = gltf.scene;
      scene.add(mcrModel);

      mcrModel.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xf9d995,
            metalness: 0.5,
            roughness: 0.5
          });
        }
      });

      // Verifique o tamanho do modelo para ajustar a escala
      const box = new THREE.Box3().setFromObject(mcrModel);
      const size = new THREE.Vector3();
      box.getSize(size);
      console.log('Tamanho do modelo MCR:', size); // Adicionando log para verificação do tamanho

      const maxAxis = Math.max(size.x, size.y, size.z);
      const scale = Math.min(container.offsetWidth, container.offsetHeight) / maxAxis; // Ajusta a escala com base no container
      mcrModel.scale.setScalar(scale);

      // Verifique o modelo após a escala
      console.log('Escala aplicada no modelo MCR:', scale);

      // Centraliza o modelo
      const center = new THREE.Vector3();
      box.getCenter(center);
      mcrModel.position.sub(center);

      // Ajuste dinâmico da posição da câmera
      camera.position.set(200 * scale, 100 * scale, 300 * scale);
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    },
    undefined,
    function (error) {
      console.error('Erro ao carregar o modelo MCR:', error);
    }
  );

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);

    if (mcrModel) {
      mcrModel.rotation.x = mouseY * 0.6;
      mcrModel.rotation.y = mouseX * 0.6;
    }

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    // Atualiza o tamanho do renderer e a proporção da câmera
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  });
}
