import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export const MyThree = () => {
  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animationContainer: HTMLElement | null = refContainer.current

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x343434)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const render = new THREE.WebGLRenderer()
    render.setSize(window.innerWidth, window.innerHeight)
    render.setAnimationLoop(animate)
    if (animationContainer) {
      animationContainer.appendChild(render.domElement)
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x18435a })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 3

    function animate() {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      render.render(scene, camera)
    }

    return () => {
      animationContainer!.innerHTML = ''
    }
  }, [])

  return <div ref={refContainer}></div>
}
