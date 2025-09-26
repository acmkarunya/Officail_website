import React from 'react'
import * as THREE from 'three'

export default function ThreeBackground(){
  React.useEffect(()=>{
    const container = document.createElement('div'); container.id='three-bg'; document.body.appendChild(container)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000); camera.position.z=90
    const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true}); renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6)); container.appendChild(renderer.domElement)
    scene.fog = new THREE.FogExp2(0x040409, 0.0018)

    // organic glowing mesh
    const geom = new THREE.IcosahedronGeometry(20, 3)
    const mat = new THREE.MeshStandardMaterial({color:0x8b5cf6, emissive:0x6ee7b7, emissiveIntensity:0.06, roughness:0.6, metalness:0.05, transparent:true, opacity:0.95})
    const mesh = new THREE.Mesh(geom, mat); scene.add(mesh)

    // soft particle cloud
    const count = 1600
    const pos = new Float32Array(count*3)
    for(let i=0;i<count;i++){
      const r = 60 * Math.cbrt(Math.random())
      const theta = Math.random()*Math.PI*2
      const phi = Math.acos(2*Math.random()-1)
      pos[i*3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i*3+2] = r * Math.cos(phi)
    }
    const partGeo = new THREE.BufferGeometry(); partGeo.setAttribute('position', new THREE.BufferAttribute(pos,3))
    const partMat = new THREE.PointsMaterial({size:0.8, color:0xffffff, opacity:0.14, transparent:true})
    const points = new THREE.Points(partGeo, partMat); scene.add(points)

    // lights
    const a = new THREE.AmbientLight(0xffffff, 0.18); scene.add(a)
    const p1 = new THREE.PointLight(0x8b5cf6, 0.6, 250); p1.position.set(80,40,80); scene.add(p1)
    const p2 = new THREE.PointLight(0x6ee7b7, 0.6, 250); p2.position.set(-60,-30,60); scene.add(p2)

    let mouse = {x:0, y:0}
    const onMove = (e)=>{ mouse.x = (e.clientX/window.innerWidth - 0.5)*2; mouse.y = (e.clientY/window.innerHeight - 0.5)*-2 }
    window.addEventListener('pointermove', onMove)

    const clock = new THREE.Clock()
    let raf = null
    const animate = ()=>{
      const t = clock.getElapsedTime()
      mesh.rotation.y = t*0.08 + mouse.x*0.25
      mesh.rotation.x = Math.sin(t*0.18)*0.06 + mouse.y*0.15
      points.rotation.y = -t*0.02 + mouse.x*0.05
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = ()=>{ camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
    window.addEventListener('resize', onResize)

    return ()=>{
      cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); window.removeEventListener('pointermove', onMove); renderer.dispose(); container.remove()
    }
  },[])
  return null
}
