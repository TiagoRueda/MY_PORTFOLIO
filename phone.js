export function loadPhoneModel(containerId) {
  const scene = new THREE.Scene();

  // Cálculo de proporção inicial
  const container = document.getElementById(containerId);
  const aspectRatio = container.offsetWidth / container.offsetHeight;

  const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1500);
  camera.position.set(0, 0, 0);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('assets/images/app.png');
  const iphoneBlue = new THREE.Color(0x1d4f8f);

  let phoneModel = null;
  const loader = new THREE.GLTFLoader();
  loader.load(
    'assets/glbs/iphone_12_pro.glb',
    function (gltf) {
      phoneModel = gltf.scene;
      scene.add(phoneModel);

      phoneModel.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'Screen_Wallpaper_0') {
            child.material = new THREE.MeshBasicMaterial({ map: texture });
          } else {
            child.material = new THREE.MeshStandardMaterial({
              color: iphoneBlue,
              metalness: 0.5,
              roughness: 0.2
            });
          }
        }
      });

      phoneModel.position.set(0, 0, -200); // Centraliza o modelo
      const box = new THREE.Box3().setFromObject(phoneModel);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxAxis = Math.max(size.x, size.y, size.z);
      const scale = Math.min(container.offsetWidth, container.offsetHeight) / maxAxis;
      phoneModel.scale.setScalar(scale); // Ajusta a escala para o tamanho do container

      camera.position.set(0, 0, 150 * scale); // Ajusta a posição da câmera de acordo com a escala do modelo
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    },
    undefined,
    function (error) {
      console.error('Erro ao carregar o modelo:', error);
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

    if (phoneModel) {
      phoneModel.rotation.x = mouseY * 0.4;
      phoneModel.rotation.y = mouseX * 0.4;
    }

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  });
}
