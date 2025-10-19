export function loadAEModel(containerId) {
  const container = document.getElementById(containerId);
  container.style.width = '100%';
  container.style.height = '25rem';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1500);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  let loraModel = null;
  const loader = new THREE.GLTFLoader();

  loader.load(
    '/assets/glbs/ae21.glb',
    function (gltf) {
      loraModel = gltf.scene;
      scene.add(loraModel);

      loraModel.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x9E9D9D,
            metalness: 0.5,
            roughness: 0.5
          });
        }
      });

      const box = new THREE.Box3().setFromObject(loraModel);
      const size = new THREE.Vector3();
      box.getSize(size);

      const maxAxis = Math.max(size.x, size.y, size.z);
      const scale = 4 / maxAxis;
      loraModel.scale.setScalar(scale);

      const center = new THREE.Vector3();
      box.getCenter(center);
      loraModel.position.sub(center);

      camera.position.set(0, 0, 5);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    },
    undefined,
    function (error) {
      console.error('Erro ao carregar o modelo lora:', error);
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
    if (loraModel) {
      loraModel.rotation.x = mouseY * 0.6;
      loraModel.rotation.y = mouseX * 0.6;
    }
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}
