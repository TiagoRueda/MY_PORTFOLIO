export function loadPhoneModel(containerId) {
  const container = document.getElementById(containerId);
  container.style.width = '100%';
  container.style.height = '20rem';

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / container.offsetHeight, 0.1, 1000);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('public/assets/images/app.png');
  const iphoneBlue = new THREE.Color(0x1d4f8f);

  let phoneModel = null;
  const loader = new THREE.GLTFLoader();

  loader.load(
    'public/assets/glbs/iphone_12_pro.glb',
    (gltf) => {
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

      const box = new THREE.Box3().setFromObject(phoneModel);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);

      const scale = 3 / maxDim;
      phoneModel.scale.setScalar(scale);

      const boxScaled = new THREE.Box3().setFromObject(phoneModel);
      const center = new THREE.Vector3();
      boxScaled.getCenter(center);
      phoneModel.position.sub(center);

      const cameraDistance = boxScaled.getSize(new THREE.Vector3()).length() * 1.2;
      camera.position.set(0, 0, cameraDistance);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    },
    undefined,
    (error) => console.error('Erro ao carregar o modelo:', error)
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
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}
